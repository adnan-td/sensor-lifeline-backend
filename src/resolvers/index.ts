import { Mutation } from "./mutation.resolver";
import { Query } from "./query.resolver";
import { allResolvers } from "./all.resolver";
import { Resolvers } from "../types/graphql";

export const resolvers: Resolvers = {
  Query,
  Mutation,
  ...allResolvers,
};
