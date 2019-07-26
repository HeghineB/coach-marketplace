<template>
  <li v-model="country">
    <input @keyup.enter="changeCountryName" :value="country.name" />
    <button class="delButton" @click="removeCountry(country)">x</button>
  </li>
</template>

<script>
// import Foo from 'bar/foo'

export default {
  name: "CountryItem",
  mixins: [],
  components: {},
  props: ["country"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    removeCountry(element) {
      console.log(element);
      this.$store.dispatch("deleteCountry", element.id);
    },
    changeCountryName(element) {
      let changedCountry = { id: this.country.id, name: element.target.value };
      this.$store.dispatch("changeCountry", changedCountry);
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

<style scoped>
</style>`