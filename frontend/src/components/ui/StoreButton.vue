<template>
  <div class="button">
    <button @click="sayHello">Generate countries</button>
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
button {
  width: 70px;
  color: white;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  background: rgb(28, 184, 65);
}
</style>`