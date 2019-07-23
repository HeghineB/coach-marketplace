<template>
  <div :class="{rem}" class="button">
    <button @click="buttonAction">{{ text }}</button>
  </div>
</template>

<script>
// import Foo from 'bar/foo'

export default {
  name: "StoreButton",
  mixins: [],
  components: {},
  props: {
    text: { type: String, default: "" },
    rem: { type: Boolean, default: false }
  },
  data() {
    return {};
  },
  computed: {
    buttonAction() {
      return this.text === "Generate List" ? this.getCountries : this.removeAll;
    }
  },
  methods: {
    getCountries() {
      console.log("I am working- gen");
      return this.$store.dispatch("getAllCountries");
    },
    removeAll() {
      console.log("I am working- rem");
      return this.$store.dispatch("clearAll");
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
.button {
  width: 70px;
  color: white;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  background: rgb(28, 184, 65);
  margin: 2px;
}
.rem {
  width: 70px;
  color: white;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  background: rgb(184, 28, 28);
}
</style>`