<template>
<div class="the-title">
  <h3 class="subtitle"> {{ sub }}  </h3>
  <h2 class="title"> {{ title }} </h2>
</div>
</template>

<script>
export default {
  name: "The-title",
  props: {
    sub:{
      type:String,
      default: () => 'subtitle'
    },
    title: {
      type:String,
      default: () => 'title'
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/components/_vars.scss";
@import "../styles/components/_mixins.scss";

.the-title{
  width: 100%;
  text-align: center;


  .subtitle{
    font-size: 25px;
    color: $brand_color;
    margin-bottom: 24px;
    @include sm{
      font-size: 18px;
    }
  }

  .title{
    font-size: 40px;

    @include sm{
      font-size: 25px;
    }
  }
}
</style>