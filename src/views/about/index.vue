<template>
<section class="about-section">
  <AboutCard/>
</section>
</template>

<script>
import AboutCard from "@/views/about/sections/About-Card";
export default {
  name: "index.vue",
  components: {AboutCard}
}
</script>

<style scoped lang="scss">
.about-section{
  min-height: 100vh;
  padding-top: 120px;


}
</style>