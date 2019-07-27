<template>
  <div id="app">
    <nav>
      <router-link to="/">HomePage</router-link>
      <router-link to="/searchCoach">Search Coach</router-link>
      <router-link to="/contactPage">Contact</router-link>
      <router-link to="/shopPage">Shop</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>