<template>
<div class="blog-about">

  <div class="container">
   <div class="title">
     <h6>{{ sub }}</h6>
     <h3>{{ newsBlog[id=postId-1].title }}</h3>
   </div>
    <div class="about">
      <p>
        {{ newsBlog[id=postId-1].desc }}
      </p>
      <p>
        {{ newsBlog[id=postId-1].desc }}
      </p>
      <p>
        {{ newsBlog[id=postId-1].desc }}
      </p>

    </div>

    <div class="wrap">
      <div class="left">
        <p>
          Our company’s main goal is supplying the best to our customers.
          With this goal our company has been established in 2019 by a group of professionals and surgeons. One of worlds economic hubs,  London has been chosen to be our head office location. In a short time, we have gathered marketing sales teams in Tashkent(Uzbekistan) and Shymkent(Kazakhstan).
        </p>
      </div>
      <div class="right">
        <img :src="newsBlog[id=postId-1].img" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import newsBlog from "@/frags/news-blog";

export default {
  name: "Blog-about",
  components: {},
  data() {
    return{
      postId:this.$route.params.id,
      newsBlog:newsBlog,
      sub:'Main Menu / Blog'


    }
  },
  computed : {
    post() {
      return this.newsBlog.find(post => post.id===this.postId)
    }
  }

}
</script>

<style scoped lang="scss">
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";
.blog-about{
  min-height: 100vh;
  padding-top: 200px;

  .container{
    .title{
      align-items: center;
      display: flex;
      flex-direction: column;
      h6{
        color: $brand_color;
        font-size:20px;

      }
      h3{
        padding-top: 30px;
        width: 977px;
        height: 122px;

        font-size: 50px;

        @include xl{
          font-size: 40px;
        }
        @include lg{
          font-size:30px;
          width: auto;
        }
        @include md{
          font-size: 20px;
        }
      }
    }
    .about{
      p{
        font-size: 25px;
        padding-top: 25px;
        font-family: 'Circle',sans-serif;

      }
    }
    .wrap{
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left{
        @include sm{
          padding-top: 20px;
        }
      }

@include sm{
  flex-direction: column;
  justify-content: center;
}
      .right{
        img {
          @include xl{
            margin-top: 35px;
            width: 350px;
            height: 350px;
          }
        }
      }

    }

  }
}
</style>