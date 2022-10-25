<template>
  <div class="card">
    <img class="card-img-top" :src="`${character.image}`" alt="Card image " />
    <div class="card-body">
      <h5 class="card-title">{{ character.name }}</h5>
      <p class="card-text">
        {{ character.name }} is a {{ character.species }}!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["character"],
};
</script>

<style></style>
