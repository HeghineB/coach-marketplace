<template>
  <div class="container">
    <input
      class="countryInput"
      v-model="newBindCountry"
      placeholder="type new country"
      @keyup.enter="addCountry"
    />
    <div class="buttonsContainer">
      <StoreButton text="Generate List" />
      <StoreButton text="Clear everything" rem />
    </div>

    <ul>
      <li class="country" v-for="country in allCountries" :key="country.id">
        {{ country.name }}
        <button class="delButton" @click="removeCountry(country)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
import StoreButton from "../components/ui/StoreButton";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "name",
  mixins: [],
  components: {
    StoreButton
  },
  props: {},
  data() {
    return {
      newBindCountry: ""
    };
  },
  computed: {
    ...mapGetters(["allCountries"])
  },
  methods: {
    addCountry() {
      this.newBindCountry &&
        this.newBindCountry.length &&
        this.$store.dispatch("addNewCountry", this.newBindCountry);

      this.newBindCountry = null;
    },
    removeCountry(element) {
      this.$store.dispatch("deleteCountry", element.id);
    }
  },
  watch: {},
  beforeCreated() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>

<style  scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
ul {
  font-size: x-small;
  columns: 5;
}
.countryInput {
  width: 150px;
  border: 1px solid black;
  margin: 1em;
}
.country {
  width: 150px;
  display: flex;
  justify-content: space-between;
}
.buttonsContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.delButton {
  color: red;
}
</style>
