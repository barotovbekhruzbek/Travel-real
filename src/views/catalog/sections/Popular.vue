<template>
<div class="popular">
  <div class="title">
    <div class="container">
      <h3>  Popular products</h3>
    </div>
  </div>

  <div class="slider">
    <div class="container">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="product  in product" :key="product">
          <div class="blok">
            <img :src="product.img" alt="">
            <div class="text-blok">
              <h5>{{ product.text }}</h5>
              <p>{{ product.id }}</p>
              <h6><del> {{ product.old_price }} </del></h6>
              <div class="buy">
                <h1>{{ product.new_price }}</h1>
                <i :class="product.icons"></i>
              </div>
            </div>
          </div>

        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>

</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import product from "@/frags/product";
export default {
  name: "Popular",
  components:{
    Swiper, SwiperSlide
  },
  data() {
   return{
     product:product,
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
   }
  }
}
</script>

<style scoped lang="scss">

@import "../../../styles/components/_vars.scss";
.slider{
  .container{
    display: flex;
    justify-content: space-between;
  }
  .blok{
    box-shadow: 6px 10px 25px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    //margin-top: 80px;
    width: 380px;
    height: 450px;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 100px;
    img{
      margin-top: 20px;
    }
    .text-blok{
      h5{
        height: 50px;
        width: 315px;
        padding-top: 30px;
        font-weight: 600;
        font-size: 18px;
        color: $black;
      }
      p{
        padding-top: 15px;
        font-size: 14px;
        font-weight: 400;
        color: #808080;
        font-family: 'Circle',sans-serif;
      }
      h6{
        padding-top: 10px;
        font-weight: 600;
        font-size: 18px;
        color: #808080;
        font-family: 'Circle',sans-serif;
      }
      .buy{
        display: flex;
        justify-content: space-between;
        h1{
          padding-top: 15px;
          font-weight: 600;
          font-size: 43px;
          color: $brand_color;
          font-family: 'Circle',sans-serif;
        }
      }
    }
  }
  .swiper-pagination{
    span{
      .swiper-pagination-bullet{
        width: 40px;
        height: 8px;
        border-radius:0;

      }
    }
  }
}

.title{
  h3{
    text-align: center;
    font-size: 40px;
    line-height: 49px;
    font-weight: 600;
    font-family: "Mon",sans-serif;
    padding-bottom: 70px;
  }
}

</style>