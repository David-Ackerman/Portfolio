import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apiGraphql = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
});
