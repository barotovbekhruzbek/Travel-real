<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <TheFootor />
  </div>
</template>

<script>
import Navbar from "@/laylouts/Navbar";
import TheFootor from "@/laylouts/The-footor";
export default {
  components: {TheFootor, Navbar},

}

</script>

<style lang="scss">
@import "fonts/_fonts.scss";
@import "styles/main.scss";
</style>
