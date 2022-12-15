<template>
<main>
  <Main />
  <HomePartners />
  <choose_us/>
  <products/>
  <customers />
  <last_-news />
</main>
</template>

<script>
import Main from "@/views/home/sections/Main";
import HomePartners from "@/views/home/sections/HomePartners";
import Choose_us from "@/views/home/sections/choose_us";
import Products from "@/views/home/sections/products";
import Customers from "@/views/home/sections/customers";
import Last_News from "@/views/home/sections/Last_News";
export default {
  name: "index",
  components: {Last_News, Customers, Products, Choose_us, HomePartners, Main},
}
</script>

<style scoped lang="scss">

</style>