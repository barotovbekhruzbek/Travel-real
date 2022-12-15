<template>
  <div class="blok">
    <img :src="img" @click="$emit('action')"  alt="">
    <div class="text-blok">
      <h5>{{ text }}</h5>
      <p>{{ id }}</p>
      <h6><del> {{old_price }} </del></h6>
      <div class="buy">
        <h1>{{ new_price }}</h1>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    img:{
      type:String,
      default:() => 'https://cdn.thexplorion.com/wp-content/uploads/2020/01/no-image.png  '
    },
    text: {
      type: String,
      required : true
    },

    old_price:{
      type:String,
      required: true
    },
    new_price:{
      type:String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";
.blok{
  box-shadow: 6px 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

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
</style>