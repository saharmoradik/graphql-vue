<template>
  <div class="container d-flex justify-content-center align-items-center">
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item"
        v-for="character in characters.characters.results"
        :key="character.id"
      >
        <div class="card">
          <img
            class="card-img-top"
            :src="`${character.image}`"
            alt="Card image "
          />

          <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
          </div>
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

export default {
  name: "App",
  components: {},
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
