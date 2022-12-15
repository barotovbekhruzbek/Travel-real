<template>
<section class="partners">
<main-card/>
  <partners-image/>
  <partners-form/>
</section>
</template>

<script>
import MainCard from "@/views/partners/sections/Main-card";
import PartnersImage from "@/views/partners/sections/Partners-image";
import PartnersForm from "@/views/partners/sections/Partners-form";
export default {
  name: "index",
  components: {PartnersForm, PartnersImage, MainCard}
}
</script>

<style scoped lang="scss">
.partners{
  min-height: 100vh;
  padding: 200px 0;
}
</style>