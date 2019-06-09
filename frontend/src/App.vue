<template>
  <div class="coucou">
    <MainHeader></MainHeader>
    <router-view/>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from "./components/ui/layout/header/MainHeader";
import MainFooter from './components/ui/layout/footer/Footer'
export default {
  name: "app",
  components: {
    MainHeader,
    MainFooter
  },
  created() {
    console.log('++1', this)
    console.log('++2', this.$router)
    console.log('++2', this)
  }
};
</script>
