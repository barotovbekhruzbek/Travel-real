<template>
<section class="partners-image">
  <div class="title">
    <the-title :sub="sub" :title="title"/>
  </div>
  <div class="container">
    <div class="image" v-for="partners in partners" :key="partners">
      <img :src="partners.img" alt="partners">
    </div>
  </div>
</section>
</template>

<script>
import partners from "@/frags/partners";
import TheTitle from "@/laylouts/The-title";
export default {
  name: "Partners-image",
  components: {TheTitle},
  data() {
    return{
      sub:'Partners',
      title:'Our long-term friends and partners',
      partners:partners
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/components/_mixins.scss";
@import "../../../styles/components/_vars.scss";
.container{
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items:center;
  //media

  @include sm{
    justify-content: center;

  }
  .image{
    margin-top: 30px;
  }
}
</style>