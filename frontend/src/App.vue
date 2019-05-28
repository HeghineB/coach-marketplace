<template>
  <div>
    <MainHeader></MainHeader>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import MainHeader from "./components/ui/layout/header/MainHeader";
import LoginForm from "./components/ui/layout/forms/LoginForm";
export default {
  name: "app",
  components: {
    MainHeader,
    LoginForm
  }
};
</script>
