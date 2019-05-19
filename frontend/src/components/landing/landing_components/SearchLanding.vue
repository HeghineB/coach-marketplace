<template>
  <div class="landing-search">
    <v-container d-flex align-self-baseline width="100">
      <div class="search_form">
        <p class="display-2 font-weight-thin" mb-7>Search for your coach</p>
        <v-flex>
          <v-text-field
            v-model="search"
            label="Enter keywords"
            hint="Example: flexible schedule"
            persistent-hint
            box
          ></v-text-field>
        </v-flex>
        <v-overflow-btn
          v-model="citySelected"
          :items="coachesList.map(coach=>coach.city)"
          label="Select city"
          editable
          item-value="text"
        ></v-overflow-btn>

        <v-combobox
          v-model="sportTypesSelected"
          :items="coachesList.map(coach=>coach.sport)"
          label="Choose your sports"
          chips
          clearable
          prepend-icon="filter_list"
          solo
          multiple
        >
          <template v-slot:selection="data">
            <v-chip
              outline
              color="orange"
              :selected="data.selected"
              close
              @input="removeSportTypes(data.item)"
            >
              <strong>{{ data.item }}</strong>
            </v-chip>
          </template>
        </v-combobox>

        <v-combobox
          v-model="extrasSelected"
          :items="featuresListGeneration()"
          label="Choose additional options"
          chips
          clearable
          prepend-icon="filter_list"
          solo
          multiple
        >
          <template v-slot:selection="data">
            <v-chip
              outline
              color="green"
              :selected="data.selected"
              close
              @input="removeExtras(data.item)"
            >
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
        <v-btn block color="secondary" dark v-on:click="searchRequest">Search</v-btn>
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
      citySelected: "",
      extrasSelected: [],
      // extras: [
      //   "Gain mass",
      //   "For kids",
      //   "Loose weight",
      //   "Training schema composing",
      //   "For pregnant",
      //   "For handicaped",
      //   "60+",
      //   "Endurance",
      //   "Harmony",
      //   "Diet"
      // ],
      sportTypesSelected: [],
      checkedPlace: [],
      search: ""
    };
  },
  props: ["coachesList"],

  methods: {
    removeExtras(item) {
      this.extrasSelected.splice(this.extrasSelected.indexOf(item), 1);
      this.extrasSelected = [...this.extrasSelected];
    },
    removeSportTypes(item) {
      this.sportTypesSelected.splice(this.sportTypesSelected.indexOf(item), 1);
      this.sportTypesSelected = [...this.sportTypesSelected];
    },
    featuresListGeneration() {
      let gettingFeatures = this.coachesList.map(item => item.features);
      let gettinObject = Object.assign({}, ...gettingFeatures);
      let gettingExtras = Object.keys(gettinObject[0]);

      return gettingExtras;
    },
    searchRequest(event) {
      console.log(this.citySelected);
      console.log(this.extrasSelected);
      console.log(this.sportTypesSelected);
      console.log(this.checkedPlace);
    }
  },
  computed: {
    filteredCoachesList: function() {
      return this.coachesList.filter(coach => {
        return;
      });
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


