<template>
  <div class="header-container">
    <div class="header-logo">
      <img src="../assets/images/runner.png" class="header-image">
      <h2 class="header-title">Coach Marketplace</h2>
    </div>
    <nav class="header-navbar">
      <a href="#" class="header-button">Home</a>
      <a href="#" class="header-button">About</a>
      <a href="#" class="header-button">Contact</a>
      <a href="#" class="header-button">Login</a>
    </nav>
  </div>
</template>

<script>
export default {};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700");
.header-container {
  font-family: "Quicksand";
  max-width: 100%;
  max-height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #009484;
}
.header-logo {
  display: flex;
  flex-direction: row;
}
.header-image {
  padding-top: 10px;
  width: 50px;
  height: 50px;
}
.header-title {
  color: white;
  height: 40px;
  width: 300px;
}
.header-navbar {
  padding-top: 25px;
}
.header-button {
  color: white;
  padding-top: 25px;
  padding-right: 10%;
  margin: 5%;
}
</style>


