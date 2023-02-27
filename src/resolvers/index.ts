import { Mutation } from "./mutation.resolver";
import { Query } from "./query.resolver";
import { allResolvers } from "./all.resolver";

export const resolvers = {
  Query,
  Mutation,
  ...allResolvers,
};
