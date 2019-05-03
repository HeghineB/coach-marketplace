<template>
  <v-layout>
    <v-flex class="card" xs12 sm3 v-for="n in 5" :key="n">
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          :src="require('../../../assets/images/athlete.jpg')"
        >
          <v-container fill-height fluid>
            <v-layout fill-height align-end>
              <v-flex xs12 flexbox>
                <span class="headline">John Strong</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">TRX</span>
            <br>
            <span>Antwerp</span>
            <br>
            <span>For kids</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn fab dark small color="orange">
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
  name: "SuggestionsLanding"
};
</script>

<style scoped>
.card {
  margin: 2em;
}
.headline {
  background-color: black;
  opacity: 0.7;
}
</style>





