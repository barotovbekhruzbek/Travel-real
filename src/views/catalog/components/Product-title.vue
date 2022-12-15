<template>
<section class="title-product">

  <div class="title">

      <h3>{{ products[id=postId-1].text}}</h3>
    </div>


<div class="slider-catalog">
  <div class="container">


    <div class="left">
      <div class="slider">
        <img :src="products[id=postId-1].img" alt="">
      </div>
    </div>
    <div class="right">
      <h4>{{ products[id=postId-1].text }}</h4>
      <p class="price"><del>{{ products[id=postId-1].old_price }}</del></p>
      <h1>{{ products[id=postId-1].new_price }}</h1>
      <p>{{ products[id=postId-1].title }}</p>
    </div>

  </div>
</div>





<!--  <button @click="$router.push({ name: 'home' })">Home Page</button>-->
</section>

</template>

<script>


import products from '../../../frags/products.js'
// import _Title from "@/views/catalog/components/_Title";
export default {
  name: "Product-title",
  components: {

  },
  data() {
    return{

      postId:this.$route.params.id,
      products:products

    }
  },
  computed: {
    post() {
      return this.products.find(post => post.id===this.postId)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";
.title-product{
  min-height: 100vh;
  padding-top: 200px;

  .title{
    h3{
       font-size: 50px;
      text-align: center;
    }
  }
}

.container{
  padding-top: 40px;
  display: flex;
  justify-content: space-around;
  //gap: 120px;
  @include md{
    flex-direction: column;
    justify-content:center;
  }

  .left{

    .slider{
      width: 500px;
      height: 500px;
      @include lg{
        width: 450px;
        height: 450px;
      }
      @include md{
        width: auto;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .right{
    padding-top: 45px;
    h4{
      font-size: 40px;
      color:#000000;
      @include lg{
        font-size: 30px;
      }
      @include md{
        text-align: center;
      }
    }

   .price{

     padding-top: 44px;
     font-size: 18px;
     color: #808080;
     @include lg{
       font-size: 16px;
     }
     @include md{
       display: none;
     }
   }
    h1{
      padding-top: 10px;
      font-size: 65px;
      color: $brand_color;
      @include lg{
        font-size: 50px;
      }
      @include md{
        display: none;
      }
    }
    p{
      width: 657px;
      height: 113px;
      font-size: 18px;
      @include lg{
        width: auto;
        width: auto;
      }
      @include md{
        padding-top: 30px;
        padding-bottom: 50px;
      }
      @include sm{
        padding-bottom: 150px;
      }
    }
  }
}
</style>