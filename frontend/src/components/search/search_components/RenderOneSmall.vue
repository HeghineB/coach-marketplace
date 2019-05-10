<template>
  <v-layout>
    <v-flex class="card" xs12 sm11>
      <v-card>
        <v-img class="coach_image white--text" height="200px" :src="coach.picture">
          <v-container fill-height fluid>
            <v-layout fill-height align-end>
              <v-flex xs12 flexbox>
                <span class="headline">{{coach.firstName+ " "+ coach.lastName}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">TRX</span>
            <br>
            <span>{{coach.city}}</span>
            <br>
            <span>For kids</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn @click="addToFavourites" fab dark small color="orange">
            <v-icon dark>favorite</v-icon>
          </v-btn>
          <v-btn flat color="orange">Details</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "RenderOneSmall",
  data() {
    return { isInFavourites: false };
  },
  props: ["coach"],
  methods: {
    addToFavourites() {
      this.$emit("addToFavourites", this.coach.id);
      this.isInFavourites = !this.isInFavourites;
    }
  }
};
</script>

<style scoped>
.coach_image {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    85%,
    rgba(0, 0, 0, 0.7)
  );
}
</style>
