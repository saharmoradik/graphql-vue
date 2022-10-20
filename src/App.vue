<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ message }}
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import allCharacters from "../src/graphql/allCharacters.query.gql";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const message = ref("Hello Jason!");
    const { result } = useQuery(allCharacters);
    console.log(result);
    return {
      message,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
