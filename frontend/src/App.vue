<template>
  <v-app>
    <v-toolbar app>
      <div class="v-toolbar__content">
        <img class="header-logo" src="./assets/images/logo_transparent.png" width="10%">
        <div>
          <a href="#login" class="v-btn v-btn--flat theme--light">
            <div class="v-btn__content">
              <span>Login</span>
            </div>
          </a>
          <a href="#signin" class="v-btn v-btn--flat theme--light">
            <div class="v-btn__content">
              <span>Sign In</span>
            </div>
          </a>
        </div>
      </div>
    </v-toolbar>
    <v-content>
      <!-- <v-container> -->
      <Landing/>
      <!-- </v-container> -->
    </v-content>
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="orange">
          <strong class="subheading">Make your life full of sports!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          &copy;2019 —
          <strong>Coach4me</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import Landing from "./components/landing/Landing";
export default {
  name: "app",
  components: {
    Landing
  },
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style scoped>
.v-toolbar__content {
  justify-content: space-between;
}
</style>
