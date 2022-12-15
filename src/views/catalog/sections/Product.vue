<template>
  <div class="product">
    <div class="container">
      <div class="card-wrap">
        <div class="card" >
        <card
            v-for="(products,id) in products"
            :key="products.id"
            :img="products.img"
            :text="products.text"
            :id="products.id"
            :old_price="products.old_price"
            :new_price="products.new_price"


            @action ="$router.push({ name: 'products', params:{ id: products.id} })"
        />
        </div>
      </div>
      <div class="number">
        <number/>
      </div>
    </div>
  </div>
</template>

<script>
import products from "@/frags/products.js";
import Number from "@/views/catalog/components/Number";
import Card from "@/views/catalog/sections/card";
export default {
  name: "Product",
  components: {Card, Number},
  data() {
    return{
      products:products,

    }
  }
}
</script>




<style scoped lang="scss">
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";

.card{
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
//  media

  @include md{
    justify-content: center;
  }
}

</style>