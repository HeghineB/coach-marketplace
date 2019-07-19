<template>
  <div class="container">
    <!-- <p>Direct access to current state: {{ $store.state.countries.data }}</p> -->
    <StoreButton />
    <div class="country" v-for="country in countries" :key="country.alpha2Code">{{ country.name }}</div>
  </div>
</template>

<script>
import StoreButton from "../components/ui/StoreButton";

export default {
  name: "name",
  mixins: [],
  components: {
    StoreButton
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    countries() {
      return this.$store.getters.allCountries;
    }
  },
  methods: {},
  watch: {},
  beforeCreated() {},
  created() {},
  beforeMount() {},
  mounted() {
    return this.$store.dispatch("getAllCountries");
  },
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
</style>
