<template>
  <section class="products">
    <h1>Service</h1>
<div class="container">


  <div class="slider">
    <!-- Swiper -->
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="product  in product" :key="products">
        <div class="blok">
            <i :class="product.class"></i>
          <div class="text-blok">
            <h5>{{ product.text }}</h5>



          </div>
        </div>

      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>


  </div>
</div>
  </section>
</template>

<script>


//swiper import
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import product from "@/frags/product";
export default {
  components: {
    Swiper, SwiperSlide },

  data() {
    return {
      sub: 'Service xizmatlari',
      title: '',
      swiperOptions:{
        pagination: {
          el: '.swiper-pagination'
        },
        slidesPerView: 4,
        loop: true,
        speed: 5000,
        autoplay: { delay: 0},
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          731:{
            slidesPerView: 2,
            spaceBetween: 20
          },
          971:{
            slidesPerView: 3,
            spaceBetween: 20
          },
          1681:{
            slidesPerView: 4,
            spaceBetween: 20
          },

        }
      },

      product:product

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
@import "../styles/product.scss";
</style>