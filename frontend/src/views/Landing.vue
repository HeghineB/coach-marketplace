<template>
  <!-- <v-parallax :src="require('../../assets/images/background1.jpg')"> -->
  <div>
    <div class="landing_intro">
      <v-img :src="require('../assets/images/landing_main.jpg')" aspect-ratio="1.7" contain>
        <div class="flex text-xs-center">
          <h1 class="display-2">Welcome to Coach for me!</h1>
          <div class="subheading">This is the best place to find a coach</div>
        </div>
      </v-img>
    </div>
    <div>
      <SearchLanding/>
      <SuggestionsLanding/>
      <ArticlesLanding/>
      <!-- </v-parallax> -->
    </div>
  </div>
</template>

<script>
import SearchLanding from "../components/landing/landing_components/SearchLanding";
import SuggestionsLanding from "../components/landing/landing_components/SuggestionsLanding";
import ArticlesLanding from "../components/landing/landing_components/ArticlesLanding";

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
.landing_intro {
  text-align: center;
  vertical-align: middle;
  color: orange;
}

/* .flex {
  height: 100%;
} */
.flex {
  color: white;
  padding: 20% 0;
}
</style>


