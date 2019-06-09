
<template>
  <div class="login-page">
    <login-form/>
    <!-- Taht's is a convention "snake-case'" to put in slite -->
  </div>
</template>

<script>
import LoginForm from '../../components/ui/form/LoginForm'

export default {
  name: "login-page",
  mixins: [],
  components: { LoginForm },
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

<style scoped>
.login-page {
}
</style>