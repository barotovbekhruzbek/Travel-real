<template>
  <div class="card">
    <img :src="img" alt="" @click="$emit('action')">
    <div class="text-blok">
      <p>{{ date }}</p>
      <h6>{{ title }}</h6>
    </div>
  </div>
</template>

<script>
// import newsBlog from "@/frags/news-blog.js";
export default {
  name: "CardNews",
  data() {
    return {
      // newsBlog:newsBlog
    }
  },
  props : {
    img:{
      type:String,
      default: () => 'https://cdn.thexplorion.com/wp-content/uploads/2020/01/no-image.png'
    },
    date: {
      type:String,
      required:true
    },
    title: {
      type:String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";

.card{

  position: relative;
  margin-bottom: 45px;
  width: 520px;
  height: 500px;

  .text-blok{
    border-radius: 10px;
    position: absolute;
    margin-left: 50px;
    transform: translateY(-160px);

    width: 425px;
    height: 120px;
    color: black;
    background-color:white;

    p{
      padding-top: 27px;
      padding-left: 32px;
      font-size: 12px;
      color:  #979797;
    }

    h6{
      padding-top: 12px;
      padding-left:30px;
      width: 362px;
      height: 36px;
    }

    &:hover{
      color: $white;
      background-color: $brand_color;
    }
  }
}

</style>