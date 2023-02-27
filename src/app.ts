import express from "express";
import morgan from "morgan";
import api from "./routes/api";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const app = express();
app.use(cors());
app.use(express.json());

async function startApollo() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await server.start();
  server.applyMiddleware({ app });
}

startApollo();

app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use("/images", express.static("/uploads"));

app.use("/", api);

export default app;
