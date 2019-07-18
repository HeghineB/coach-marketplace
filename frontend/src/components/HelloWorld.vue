<template>
  <div class="name">
    <p>{{ $store.state }}</p>
    <StoreButton />
  </div>
</template>

<script>
import StoreButton from "../components/ui/StoreButton";
// import Foo from 'bar/foo'

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
  computed: {},
  methods: {},
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
</style>
