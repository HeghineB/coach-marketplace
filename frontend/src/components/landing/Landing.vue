<template>
  <div class="landing_body_container">
    <p>This is body of the home page</p>
    <SearchLanding/>
    <SuggestionsLanding/>
    <ArticlesLanding/>
  </div>
</template>

<script>
import SearchLanding from "./landing_components/SearchLanding";
import SuggestionsLanding from "./landing_components/SuggestionsLanding";
import ArticlesLanding from "./landing_components/ArticlesLanding";

export default {
  name: "Landing",
  components: {
    SearchLanding,
    SuggestionsLanding,
    ArticlesLanding
  }
};
</script>

<style scoped>
.landing_body_container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border: 1px solid red;
}
</style>


