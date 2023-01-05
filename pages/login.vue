<template>
</template>
<script>
export default {
  name: "Login",
  auth: false,
  created: function () {
      this.$auth.loginWith('auth0')                                            
  }
};
</script>
