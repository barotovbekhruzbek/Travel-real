<template>
  <section class="product">
    <product-catalog/>
    <product/>
    <popular/>
  </section>
</template>

<script>
import productCatalog from "@/views/catalog/sections/Product-Catalog";
import Product from "@/views/catalog/sections/Product";
import Popular from "@/views/catalog/sections/Popular";
export default {
  name: "index",
  components: {Popular, Product, productCatalog}

}
</script>

<style scoped lang="scss">

</style>