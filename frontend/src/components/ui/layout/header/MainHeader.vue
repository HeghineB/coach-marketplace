<template>
  <v-app>
    <v-toolbar app>
      <div class="v-toolbar__content">
        <img class="header-logo" src="../../../../assets/images/logo_transparent.png" width="10%">

        <div>
          <router-link to="/" class="v-btn v-btn--flat theme--light">
            <div class="v-btn__content">
              <span>Home</span>
            </div>
          </router-link>
          <router-link to="/login" class="v-btn v-btn--flat theme--light">
            <div class="v-btn__content">
              <span>Login</span>
            </div>
          </router-link>
          <router-link to="/signin" class="v-btn v-btn--flat theme--light">
            <div class="v-btn__content">
              <span>Sign In</span>
            </div>
          </router-link>
          <router-link to="/search" class="v-btn v-btn--flat theme--light">
            <div class="v-btn__content">
              <span>Search</span>
            </div>
          </router-link>
        </div>
      </div>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
.v-toolbar__content {
  justify-content: space-between;
}
</style>