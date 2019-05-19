<template>
  <v-layout row wrap>
    <v-flex xs3>
      <Search :coachesList="filteredCoachesList" v-on:searchQuery="searchQuery"></Search>
    </v-flex>
    <v-flex xs9>
      <RenderAll :filteredCoachesList="filteredCoachesList" v-on:addToFavourites="addToFavourites"></RenderAll>
    </v-flex>
  </v-layout>
</template>

<script>
import Search from "../components/search/search_components/SearchSearch.vue";
import RenderAll from "../components/search/search_components/RenderAll.vue";

export default {
  name: "SearchCoach",
  components: {
    Search,
    RenderAll
  },
  props: ["filteredCoachesList"],
  data() {
    return {};
  },
  methods: {
    addToFavourites(id) {
      this.$emit("addToFavourites", id);
    },
    searchQuery(search) {
      this.$emit("searchQuery", search);
    }
  }
};
</script>

<style scoped>
</style>


