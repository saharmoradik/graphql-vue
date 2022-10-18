import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
//import { DefaultApolloClient } from "@vue/apollo-composable";
import { createApp } from "vue";
import App from "./App.vue";

const defaultClient = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});

const query = gql`
  query {
    characters {
      results {
        id
        name
        species
      }
    }
  }
`;

defaultClient
  .query({
    query,
  })
  .then((res) => console.log(res));

createApp(App).mount("#app");
