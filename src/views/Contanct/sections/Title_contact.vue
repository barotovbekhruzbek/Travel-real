<template>
<div class="contact">
  <div class="container">
  <the-title :sub="sub" :title="title"/>


  </div>


</div>
</template>

<script>
import TheTitle from "@/laylouts/The-title";

export default {
  name: "Title_contact",
  components: {TheTitle},
  data() {
    return{
      sub:'Main Menu / Contact Us',
      title:'Contact us'
    }
  }
}
</script>

<style scoped lang="scss">

</style>