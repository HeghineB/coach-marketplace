<template>
  <v-app>
    <v-toolbar app>
      <div class="v-toolbar__content">
        <img class="header-logo" src="./assets/images/logo_transparent.png" width="10%">

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
    <v-content>
      <!-- <v-container> -->
      <!-- <Landing/>  -->
      <router-view
        :filteredCoachesList="filteredCoachesList"
        v-on:addToFavourites="addToFavourites"
        v-on:searchQuery="searchQuery"
      ></router-view>

      <!-- </v-container> -->
    </v-content>
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-title class="orange">
          <strong class="subheading">Fill your life with sports!</strong>

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
import Favourites from "./components/landing/landing_components/Favourites.vue";
import Queries from "./_utils/queries/coaches/index.js";
export default {
  name: "app",
  components: {
    Favourites
  },
  data() {
    return {
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ],
      favourite: [],
      coachesList: [],
      search: ""
    };
  },
  async created() {
    this.coachesList = await Queries.getCoaches();
    // axios
    //   .get("https://my.api.mockaroo.com/coach-mp1.json?key=19f08970")
    //   .then(res => (this.coachesList = res.data))
    //   .catch(err => console.log(err));
  },

  methods: {
    addToFavourites(id) {
      this.favourite.indexOf(id) === -1
        ? this.favourite.push(id)
        : this.favourite.splice(this.favourite.indexOf(id), 1);
    },
    searchQuery(search) {
      this.search = search;
      console.log("method", this.search);
      console.log(this.filteredCoachesList);
    }
  },
  computed: {
    filteredCoachesList: function() {
      let filterCity = this.coachesList.filter(a => a.city.match(this.search));
      console.log("app", filterCity);
      return filterCity;
    }
  }
};
</script>

<style scoped>
.v-toolbar__content {
  justify-content: space-between;
}
</style>
