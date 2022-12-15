<template>
<section class="last_news">
<div class="container">
  <div class="text">
    <the-title  :sub="sub" :title="title"/>
  </div>
  <div class="news-blok">
    <div class="news_" v-for="item in news" :key="item">
      <img :src="item.img" alt="">
      <div class="box">
          <p>{{ item.date }}</p>
          <h6>{{ item.news }}</h6>
      </div>
    </div>
  </div>
  <div class="btn">
    <router-link to="blog">
      <the-button :light="true"> Show more</the-button>
    </router-link>
  </div>
</div>
</section>
</template>

<script>
import news from "@/frags/news";
import TheTitle from "@/laylouts/The-title";
import TheButton from "@/laylouts/TheButton";
export default {
  name: "Last_News",
  components: {
    TheButton,
    TheTitle
  },
  data() {
    return {
      sub:'Blog',
      title:'Latest News',
      news:news
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";
  .last_news{
    .container{
      .text{
        padding-top: 80px;
      }
      .news-blok{
        padding-top: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;

        //media
        @include xl {
          flex-wrap: wrap;
          align-items: center;
        }

        @include lg {
          flex-wrap: wrap;
          justify-content: center;
        }

        img{
          border-radius: 10px;
          @include sm{
            width: 100%;
          }
        }
     .box{
       width: 425px;
       height: 120px;
       border-radius: 10px;
       background-color: $white;
       color: $dark;
       transform: translateY(-160px);
       margin-left: 48px;
        transition: 0.4s;

       //media
       @include sm{
         width: 350px;
         margin-left: 10px!important;
       }
       @include xs{
         width: 300px;
       }

       &:hover{
         color: $white;
       transition-duration: 0.6s;
         background: #1D6DC3;
         box-shadow: -10px 14px 60px rgba(29, 109, 195, 0.25);
       }

       p{
         padding: 27px 32px 0 32px;
         color: #979797;
         font-size: 12px;
         font-weight: 600;
         font-family: 'Mon',sans-serif;
         &:hover{
           color: $white;
         }
       }
       h6{
         font-size: 14px;
         line-height: 17px;
         color: $dark;
         padding: 12px 0 0 32px;
         font-family: 'Mon',sans-serif;
         &:hover{
           color: $white;
         }
       }
     }
      }
      .btn{
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

      }
    }
  }
</style>