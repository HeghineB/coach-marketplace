<template>
  <v-layout row wrap>
    <v-flex xs3>
      <Search></Search>
    </v-flex>
    <v-flex xs9>
      <RenderAll :coaches="coaches" v-on:addToFavourites="addToFavourites"></RenderAll>
    </v-flex>
  </v-layout>
</template>

<script>
import Search from "../components/search/search_components/SearchSearch.vue";
import RenderAll from "../components/search/search_components/RenderAll.vue";
import axios from "axios";
export default {
  name: "SearchCoach",
  components: {
    Search,
    RenderAll
  },
  data() {
    return {
      coaches: []
    };
  },
  created() {
    axios
      .get("https://my.api.mockaroo.com/coach-mp1.json?key=19f08970")
      .then(res => (this.coaches = res.data))
      .catch(err => console.log(err));
  },
  methods: {
    addToFavourites(id) {
      this.$emit("addToFavourites", id);
    }
  }
};
</script>

<style scoped>
</style>


