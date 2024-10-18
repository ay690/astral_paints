import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://astralpaints.kwebmakerdigitalagency.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
