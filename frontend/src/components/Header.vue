<template>
  <v-app>
    <v-toolbar app>
      <div class="v-toolbar__content">
        <img
          class="header-logo"
          src="/Users/Joe/Desktop/Projects/coach-marketplace/frontend/src/assets/images/logo_transparent.png"
          width="10%"
        >

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
          <Favourites v-bind:favourite="favourite"></Favourites>
        </div>
      </div>
    </v-toolbar>
  </v-app>
</template>

<script>
import Favourites from "/Users/Joe/Desktop/Projects/coach-marketplace/frontend/src/components/header-components/Favourites.vue";
export default {
  name: "app",
  components: {
    Favourites
  },
  data() {
    return {
      favourite: []
    };
  },
  methods: {
    addToFavourites(id) {
      this.favourite.indexOf(id) === -1
        ? this.favourite.push(id)
        : this.favourite.splice(this.favourite.indexOf(id), 1);
    }
  }
};
</script>

<style scoped>
.v-toolbar__content {
  justify-content: space-between;
}
</style>