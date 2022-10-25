<template>
  <div class="container d-flex justify-content-center align-items-center">
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item"
        v-for="character in characters.characters.results"
        :key="character.id"
      >
        <div class="col md-3">
          <Card :character="character" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
//import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import allCharacters from "../src/graphql/allCharacters.query.gql";
import { computed } from "vue";
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: { Card },
  setup() {
    const { result } = useQuery(allCharacters);
    const characters = computed(() => result.value);
    return {
      characters,
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
