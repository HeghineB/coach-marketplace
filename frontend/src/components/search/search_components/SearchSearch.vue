<template>
  <v-container>
    <div class="search_form">
      <p class="display-1 font-weight-thin" mb-7>Search</p>
      <v-flex>
        <v-text-field
          v-model="search"
          label="Enter keywords"
          hint="Example: flexible schedule"
          persistent-hint
          v-on:input="searchQuery"
          box
        ></v-text-field>
      </v-flex>
      <v-container fluid>
        <p class="display font-weight-bold mb-3">Sport</p>
        <v-checkbox
          label="John"
          color="orange"
          value="John"
          v-model="selected"
          class="mb-0 mt-auto"
        ></v-checkbox>
        <v-checkbox
          label="Jacob"
          color="orange"
          v-model="selected"
          value="Jacob"
          class="mb-0 mt-auto"
        ></v-checkbox>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Search",
  props: ["filteredCoachesList"],
  data() {
    return {
      search: "",
      selected: []
    };
  },
  methods: {
    searchQuery() {
      this.$emit("searchQuery", this.search);
    }
  }
};
</script>

<style scoped>
</style>
