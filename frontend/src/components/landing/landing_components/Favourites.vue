<template>
  <v-btn icon>
    <v-badge overlap color="orange">
      <template v-slot:badge>
        <span v-if="favourite.length>0">{{ favourite.length }}</span>
      </template>
      <v-icon medium color="grey darken-1">favorite</v-icon>
    </v-badge>
  </v-btn>
</template>

<script>
export default {
  name: "Favourites",

  props: ["favourite"]
};
</script>

<style scoped>
</style>
