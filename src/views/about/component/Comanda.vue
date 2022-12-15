<template>
<div class="camanda-section">
  <div class="container">
    <h3>Команда Разработчиков</h3>
    <div class="wrapper">

      <div class="blok" v-for="comanda in comanda" :key="comanda">
        <img :src="comanda.img" alt="">
        <h4>{{ comanda.text }}</h4>
        <h6>{{ comanda.title }}</h6>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import comanda from "@/frags/comanda";
export default {
  name: "Comanda",
  data() {
    return{
      comanda:comanda
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";
    .container{
      padding-top:  100px;

      h3{
        font-size: 35px;
        @include lg{
          padding-left: 40px;
          padding-bottom: 20px;
        }
        @include sm{
          text-align: center;
          //padding-top: 20px;
          padding-bottom: 30px;
        }
      }

      .wrapper{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        gap: 40px;

@include lg{
  justify-content: center;

}


        .blok{
          img{
            width: 380px;
            height: 386px;

          }
        h4{
          padding-top: 33px;
          font-size: 25px;
          color: black;
        }
          h6{
            font-size: 18px;
            padding-top: 10px;
            padding-bottom: 50px;
          }
        }
      }
    }
</style>