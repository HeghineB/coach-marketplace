<template>
  <v-layout row wrap>
    <v-flex xs3 d-flex :key="coach.id" v-for="coach in coaches">
      <OneSmall :coach="coach" v-on:addToFavourites="addToFavourites"/>
    </v-flex>
  </v-layout>
</template>

<script>
import OneSmall from "./RenderOneSmall";
export default {
  name: "RenderAll",
  components: {
    OneSmall
  },
  props: ["coaches"],
  methods: {
    addToFavourites(id) {
      this.$emit("addToFavourites", id);
    }
  }
};
</script>


<style>
</style>
