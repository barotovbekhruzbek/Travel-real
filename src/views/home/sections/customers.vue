<template>
<section class="customer">
  <div class="container">
    <h4 class="sub">{{ sub }}</h4>
    <h1 class="title">{{ title }}</h1>

    <div class="costumer-blok">

      <div v-for="item in customers" :key="item" class="box">
        <img :src="item.img" alt="">
        <div class="wrapper">
          <p>{{ item.text }}</p>
          <h5>{{ item.name }}</h5>
          <h6>{{ item.job }}</h6>
        </div>
      </div>

    </div>
  </div>
</section>
</template>

<script>
import customers from "@/frags/customers";
import TheTitle from "@/laylouts/The-title";
export default {
  name: "customers",
  components: {
    TheTitle
  },
  data() {
    return {
      sub:'Testimonial',
      title:'We Care About Our Customers Experience Too',
      customers:customers

    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";

.customer{
  background: #081420;
  padding-top: 110px;
  padding-bottom: 160px;
  .sub{
    padding-bottom: 12px;
    line-height: 30px;
    font-size: 25px;
    text-align: center;
    color: $brand_color;
  }

  .title{
    font-size: 40px;
    color: #ffffff;
    text-align: center;

  }

  .container{
  .costumer-blok{
    margin-top: 90px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    //media
    @include xl{
      flex-wrap: wrap;
      justify-content: center;

    }
    @include lg{
      justify-content: center;
    }
    img{
     width: 100px;
      height: 100px;
      transform: translateY(-50px);
    }

    .box{
      width: 520px;
      height: 300px;
      background: #192431;
      border-radius: 10px;

      //media
      @include sm{
        margin-top: 25px;
        width: 100%;
      }

      &:hover{
        transition: 0.4s;
        transform: translateY(-10px);
        box-shadow: -10px 30px 60px rgba(29, 109, 195, 0.25);
        border-radius: 10px;
        background-color: $brand_color;
      }

      .wrapper{





        p{

          padding-left: 40px;
          width: 410px;
          text-align: center;
          font-size: 18px;
          line-height: 27px;
          color: $white;

          @include sm{
            padding-left: 15px;
            width: 300px;
            font-size: 16px;
          }

        }
        h5{
          padding-top: 25px;
          padding-left: 40px;
          font-size: 18px;
          line-height: 27px;
          color: $white;
          font-weight: 700;
          text-align: left;

          @include sm{
            padding-left: 15px;
            font-size: 16px;
          }
        }
        h6{
          padding-left: 40px;
          padding-top: 5px;
          font-size: 18px;
          color: $white;
          font-family: 'Circle',sans-serif;

          @include sm{
            padding-left: 15px;
            font-size: 16px;
          }
        }

      }
    }
  }
  }
}
</style>