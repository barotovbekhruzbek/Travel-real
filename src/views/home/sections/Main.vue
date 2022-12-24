<template>
<section class="home-main">
<div class="container">

  <div class="btn-avia">
    <button> <i class="fa-solid fa-plane-up"></i> Aviachiptalar</button>
  </div>
  <div class="bilet">
    <h3>Biletni izlash</h3>

    <form action="" @click.prevent>
      <input type="text" placeholder="Qayerdan">
      <input type="text" placeholder="Qayerga">
      <input type="date" placeholder="Sana">

      <router-link to="about" >
        <button> <i class="fas fa-search"></i> Qidirish </button>
      </router-link>
    </form>
  </div>


  </div>




</section>
</template>

<script>
import reys from "@/frags/reys";

export default {
  name: "Main",
  components: {

  },


  data() {
    return{
      reys:reys,
      term : ''
    }
  },
  methods : {
    onsearch (reys,term) {
      if (term.length === 0 ) {
        return reys
      }
      return reys.filter( c => c.location.toLowerCase().indexOf(term) > -1)
    }
  }
}



</script>

<style scoped lang="scss">
@import "../styles/main-section.scss";

</style>