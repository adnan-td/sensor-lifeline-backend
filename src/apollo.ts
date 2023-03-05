import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { verify } from "jsonwebtoken";
import { accessOptions, createTokens, refreshOptions } from "./auth";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "@graphql-tools/schema";
import app from "./app";
import { permissions } from "./schema/permissions";

export async function startApollo() {
  const server = new ApolloServer({
    schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }), permissions),
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        settings: {
          "request.credentials": "include",
          "schema.polling.interval": 20 * 1000,
        },
      }),
    ],
    introspection: process.env.NODE_ENV !== "production",
    context: ({ req, res }) => {
      const accessToken = req.cookies["access-token"];
      const refreshToken = req.cookies["refresh-token"];
      if (!accessToken && !refreshToken) return { req, res, user: null };
      try {
        const user = verify(accessToken, process.env.ACCESS_TOKEN_SECRET || "");
        if (user) {
          return { req, res, user };
        }
      } catch {}

      if (!refreshToken) return { req, res, user: null };

      try {
        const user: any = verify(refreshToken, process.env.REFRESH_TOKEN_SECRET || "");
        if (user?.email) {
          const tokens = createTokens({
            id: user.id,
            email: user.email,
            role: user.role,
          });
          res.cookie("access-token", tokens.accessToken, accessOptions);
          res.cookie("refresh-token", tokens.refreshToken, refreshOptions);
          return { req, res, user };
        }
      } catch (e) {
        console.log(e);
      }

      return { req, res, user: null };
    },
  });

  await server.start();
  server.applyMiddleware({ app });
}
