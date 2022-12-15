<template>

  <div class="btns">


<div class="container">

  <div class="butto">
    <button v-for="(contactUs ,idx ) in contactUs" :class="{ active: activeBtn === idx }" @click="activeBtn=idx">
      <img :src="contactUs.img" alt="">
      {{ contactUs.country }}
    </button>
  </div>
  <div class="location">
<!--    <div class="map" v-html="contactUs[activeBtn].link">-->

<!--    </div>-->

    <div class="text-bar">
      <div class="left">
        <h3>AДрес</h3>
        <p>{{ contactUs[activeBtn].adres }}</p>
        <h3>Email</h3>
        <p> {{ contactUs[activeBtn].email }} </p>
      </div>
      <div class="right">
        <h3> Телефон </h3>
        <p>{{ contactUs[activeBtn].tel }}</p>
        <h3>Website</h3>
        <p>{{ contactUs[activeBtn].web }}</p>
      </div>
    </div>
  </div>
</div>
  </div>


</template>

<script>
import contactUs from "@/frags/contactUs";
export default {
  name: "contact-info",
  data() {
    return{
      contactUs:contactUs,
      activeBtn:1,
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";

.btns {
.butto{

  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @include lg{

  flex-wrap: wrap;
  }
 button{
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 30px;
   width: 350px;
   height: 80px;
    background-color: $white;
   border-radius: 10px;
   color: $black;
   font-size: 25px;
   font-weight: 600;


   @include xl{
     width: 300px;
     font-size: 20px;
   }
   @include lg{
     margin-top: 15px;
   }
   @include sm{
     margin-top: 25px;
   }
   &.active{
   background-color: $brand_color;
     color: $white;
   }

 }
}
  .location{
    padding-top: 60px;


  }

}

.text-bar{
  padding-top: 50px;
  display: flex;
  justify-content: space-around;
  gap: 40px;

  @include sm{
    flex-direction: column;
  }

  h3{
    font-size: 35px;
    font-weight: 700;
    font-family: 'Circle',sans-serif;

    @include sm{
      text-align: center;
    }

  }
  p{
    font-size: 25px;
    font-weight: 500;
    font-family: 'Monserat',sans-serif;
    padding-top: 21px;
    padding-bottom: 21px;

    @include sm{
      text-align: center;
    }
  }

}

.map{
  iframe{
    width: 500px;
    height: 500px;
  }

}

</style>