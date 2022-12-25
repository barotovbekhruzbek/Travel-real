<template>
  <section class="home-main">
    <div class="container">

      <div class="btn-avia">
        <button> <i class="fa-solid fa-plane-up"></i> Airplane tickets</button>
      </div>
      <div class="bilet">
        <h3>Ticket search</h3>

        <form action="" @click.prevent>
          <input type="text" placeholder="Where">
          <input type="text" placeholder="where to">
          <input type="date" placeholder="date">
          <router-link to="about" >
            <button> <i class="fas fa-search"></i> Search </button>
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
@import "../../home/styles/main-section.scss";

</style>