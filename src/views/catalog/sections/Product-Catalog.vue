<template>
  <section class="product-catalog">
      <div class="title">
        <TheTitle  :sub="sub" :title="title"/>
      </div>

    <div class="slider">
      <div class="container">
      <div class="blok">
    <div class="wrapper" v-for="item in catalog" :key="item">

      <div class="loader">

      </div>

      <h3>{{ item.categories }}</h3>
      <p>{{ item.title }}</p>
    </div>
  </div>
      </div>
    </div>
  </section>
</template>

<script>
import catalog from "@/frags/catalog";
import TheTitle from "@/laylouts/The-title";
export default {
  name: "Product-Catalog",
  components: {TheTitle},
  data() {
    return{
      sub:'Main Menu / Catalog',
      title:'Product catalog',
      catalog:catalog
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/products.scss";
.product-catalog{
  min-height:100vh;
  padding: 220px 0;
}

.slider{

  .container{
    .blok{

      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      //media

      @include md{
        justify-content: center;
      }

      .wrapper{
        position: relative;
        width: 380px;
        height: 250px;
        background-color: #ffffff;
        //display: flex;
        //justify-content: space-between;
        margin-top: 35px;


        h3{
          padding-left: 40px;
          padding-top: 120px;
          font-size: 25px;
          font-weight: 600;
          color: #000000;
        }
        p{
          padding-left: 40px;
          padding-top: 15px;
          color: #000000;
          font-size: 18px;
          width: 319px;
          height: 53px;
          font-weight: 400;
        }
      }
    }
  }
}

</style>