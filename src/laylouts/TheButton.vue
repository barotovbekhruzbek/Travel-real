<template>
  <button class="the-btn" :class="{ light: light }">
    <slot />

  </button>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    light: Boolean
  }
}
</script>

<style scoped lang="scss">
@import "../styles/components/_vars.scss";
@import "../styles/components/_mixins.scss";
.the-btn{
  min-width: 200px;
  height: 55px;
  border-radius: 50px;
  font-size: 15px;
  color: $white;
  background-color: $brand_color;
  border: 0;
  box-shadow: -15px 20px 50px rgba(29,104,191,0.3);
  font-family: 'Monserat';
  //Media

  @include  lg{
    font-size: 14px;
    height: 40px;
    min-width: 150px;
    padding: 0 10px;
  }


  &.light{
    background-color: $white;
    color: $brand_color;
  }
}
</style>