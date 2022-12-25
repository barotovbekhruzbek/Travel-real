<template>
  <section class="choose-section">
    <div class="container">
      <div class="title">
        <h1>Our advantages</h1>
      </div>
      <div class="wrapper">
        <div class="box" v-for="dollor in dollor" :key="dollor">
          <div class="logo">
            <img :src="dollor.img" alt="">
          </div>
          <div class="content">
            <p>{{ dollor.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


import engdollor from "@/frags/engdollor";


export default {
  name: "choose_us",
  components: {


  },
  data() {
    return{
      dollor:engdollor
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../home/styles/choose.scss";
</style>