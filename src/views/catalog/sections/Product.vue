<template>
  <div class="container">
    <div class="text">
      <h3>List of tickets</h3>
    </div>
    <div class="wrapper">
      <div class="card" v-for="reys in reys" :key="reys">
        <div class="logo">
          <img :src="reys.img" alt="">
        </div>
        <div class="content">
          <h4>{{ reys.location }}</h4>
          <div class="reys">
            <div>
              <i class="fa-solid fa-plane-up"></i>
            </div>
            <div class="text-reys">
              <p>
                <span>{{ reys.date }}</span> <br>
                {{ reys.reys }} <br>
                <span> {{ reys.go }}</span>
              </p>
              <div class="dashed">

              </div>
            </div>

          </div>
          <div class="reys">
            <div>
              <i class="fa-solid fa-plane-up"></i>
            </div>
            <div class="text-reys">
              <p>
                <span>{{ reys.date }}</span> <br>
                {{ reys.reys_2 }}<br>
                <span> {{ reys.back_to }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>





import rureys from "@/frags/rureys";
export default {
  name: "HomePartners",
  components: {

  },

  data() {
    return {
      reys:rureys
    }
  },
  methods: {
    // ...mapActions(['getPartners'])
  },
  computed: {
    // ...mapGetters(["partners_list"])

  },
  mounted() {
// this.getPartners();

  }


}

</script>

<style scoped lang="scss">
@import "../../home/styles/homepartners.scss";


</style>