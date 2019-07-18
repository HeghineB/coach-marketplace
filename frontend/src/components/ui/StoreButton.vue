<template>
  <div class="name">
    <button @click="sayHello">Click me</button>
  </div>
</template>

<script>
// import Foo from 'bar/foo'

export default {
  name: "StoreButton",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    sayHello() {
      return console.log("HELLO click me button");
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