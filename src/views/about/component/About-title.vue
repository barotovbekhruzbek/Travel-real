<template>
<div class="container">
<div class="block">

  <div class="card">
    <div class="left">
      <img src="../../../images/about/1.svg" alt="">
    </div>
    <div class="right">
      <p class="tet">Our company’s main goal is supplying the best to our customers.
        With this goal our company has been established in 2019 by a group of professionals and surgeons. One of worlds economic hubs,  London has been chosen to be our head office location. In a short time, we have gathered marketing sales teams in Tashkent(Uzbekistan) and Shymkent(Kazakhstan). </p>
    </div>

  </div>
  <div class="card">

    <div class="right">
      <p class="tet">Our company’s main goal is supplying the best to our customers.
        With this goal our company has been established in 2019 by a group of professionals and surgeons. One of worlds economic hubs,  London has been chosen to be our head office location. In a short time, we have gathered marketing sales teams in Tashkent(Uzbekistan) and Shymkent(Kazakhstan). </p>
    </div>
    <div class="left">
      <img src="../../../images/about/2.png" alt="">
    </div>

  </div>

</div>

</div>


</template>

<script>
export default {
  name: "About-title"
}
</script>

<style scoped lang="scss">
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";
.container{


.card{
  gap:  0 70px ;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 100px;


@include xl{
  justify-content: center;
  flex-direction: column;
  padding-bottom: 50px;
}
  @include sm{
    padding-bottom: 15px;
  }

  .left{
   max-width: 624px;
    height: 399px;
    @include xl{
      width: 450px;
      height: 350px;
    }
    @include sm{
      margin-left: 30px;
      width: 350px;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
  .right{
    .tet{

      width: 660px;
      @include xl{
        padding-top: 20px;
        width: auto;
      }

      @include sm{
        padding-top: 10px;
      }
    }
  }
}
}
</style>