<template>
<main>
  <Main />
  <HomePartners />
  <choose_us/>
  <products/>
  <customers />
  <last_-news />
  <formContent />

</main>
</template>

<script>
import formContent from "@/laylouts/Form-Content";
import Main from "@/views/home/sections/Main";
import HomePartners from "@/views/home/sections/HomePartners";
import Choose_us from "@/views/home/sections/choose_us";
import Products from "@/views/home/sections/products";
import Customers from "@/views/home/sections/customers";

export default {
  name: "index",
  components: { Customers, Products, Choose_us, HomePartners, Main ,formContent},
}
</script>

<style scoped lang="scss">

</style>