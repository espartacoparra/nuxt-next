<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "../components/template/Navbar";
export default {
  name: "Main",
  components: { Navbar },
};
</script>

<style lang="scss" scoped>
</style>