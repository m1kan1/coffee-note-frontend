<!-- pages/index.vue -->
<template>

</template>

<script>
export default {
  name: "Welcome",
  auth: false,
  mounted: function() {
    if (this.$auth.loggedIn){
      window.location.href = "/main";
    }else{
      window.location.href = "/login";
    }
  }
};


</script>
