<template>
  <div class="index-page">
    <hello-world/>
  </div>
</template>

<script>
import VuetifyHelloWorld from '../../components/HelloWorld'

export default {
  name: 'index-page',
  mixins: [],
  components: {
    HelloWorld: VuetifyHelloWorld
  },
  props: {},
  data() {
    return {}
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
}
</script>

<style scoped>
.index-page {}
</style>