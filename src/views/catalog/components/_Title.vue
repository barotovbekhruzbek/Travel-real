<template>
<div class="container">
  <h3>{{ product.text }}</h3>


  <div class="content-blok">
    <div class="img-left">
      <img :src="product.img" alt="">
    </div>
    <div class="text-blok">
      <h4>{{ product.text }}</h4>
      <h6>{{ product.id }}</h6>
      <h4>{{ product.old_price }}</h4>
      <h1>{{ product.new_price }}</h1>
      <p>{{ product.title }}</p>
    </div>
  </div>
</div>
</template>

<script>
import products from "@/frags/products.js";
export default {
  name: "_Title",
  data() {
    return{
      product:products
    }
  }
}
</script>

<style scoped lang="scss">

</style>