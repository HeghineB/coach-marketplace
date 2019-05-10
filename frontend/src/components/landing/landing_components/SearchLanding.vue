<template>
  <div class="landing-search">
    <v-container d-flex align-self-baseline width="100">
      <div class="search_form">
        <p class="display-2 font-weight-thin" mb-7>Search for your coach</p>
        <v-overflow-btn :items="cities" label="Select city" editable item-value="text"></v-overflow-btn>
        <v-combobox
          v-model="sports"
          :items="sportTypes"
          label="Choose your sports"
          chips
          clearable
          prepend-icon="filter_list"
          solo
          multiple
        >
          <template v-slot:selection="data">
            <v-chip :selected="data.selected" close @input="remove(data.item)">
              <strong>{{ data.item }}</strong>
            </v-chip>
          </template>
        </v-combobox>

        <v-combobox
          v-model="extras"
          :items="items"
          label="Choose additional options"
          chips
          clearable
          prepend-icon="filter_list"
          solo
          multiple
        >
          <template v-slot:selection="data">
            <v-chip :selected="data.selected" close @input="remove(data.item)">
              <strong>{{ data.item }}</strong>
            </v-chip>
          </template>
        </v-combobox>
        <div id="search_indoor_outdoor">
          <input type="checkbox" id="indoor" value="Indoor" v-model="checkedPlace">
          <v-label for="indoor">Indoor</v-label>
          <input type="checkbox" id="outdoor" value="Outdoor" v-model="checkedPlace">
          <v-label for="outdoor">Outdoor</v-label>
        </div>
        <v-btn block color="secondary" dark>Search</v-btn>
      </div>
      <v-img :src="require('../../../assets/images/coachfind.jpg')" width="20"></v-img>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "SearchLanding",

  data() {
    return {
      extras: [],
      items: [
        "Gain mass",
        "For kids",
        "Loose weight",
        "Training schema composing",
        "For pregnant",
        "For handicaped",
        "60+",
        "Endurance",
        "Harmony",
        "Diet"
      ],
      sports: [],
      sportTypes: [
        "Fitness",
        "TRX",
        "Squash",
        "Basketball",
        "Swimming",
        "Hiking"
      ],
      cities: [
        { text: "Brussels" },
        { text: "Antwerp" },
        { text: "Liege" },
        { text: "Namur" },
        { text: "Ostende" },
        { text: "Charleroi" }
      ]
    };
  },

  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    }
  }
};
</script>

<style scoped>
.search_form {
  width: 2%;
  margin-right: 3em;
}
#search_indoor_outdoor label {
  margin: 0 1em 0 0.2em;
}
</style>


