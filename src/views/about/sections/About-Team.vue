<template>
  <div class="about-section">
    <the-title :sub="sub" :title="title" />

    <div class="wrapper">
      <div class="container">
        <div class="blok ">

          <router-link to="card">
            <button >


              <h1>History of the company</h1>
              <p>When, while lovely valley teems with vapour around meand </p>
            </button>
          </router-link>

        </div>
        <div >

          <router-link to="team">
            <button class="active">


              <h1>Our team</h1>
              <p>When, while lovely valley teems with vapour around meand </p>
            </button>
          </router-link>

        </div>
        <div class="blok">

          <router-link to="mission">
            <button>


              <h1>Our goal and mission</h1>
              <p>When, while lovely valley teems with vapour around meand </p>
            </button>
          </router-link>

        </div>
      </div>
    </div>


    <div class="list">
      <Comanda />
    </div>

  </div>
</template>

<script>
import aboutBtn from "@/frags/about-btn.js";
import TheTitle from "@/laylouts/The-title";

import Comanda from "@/views/about/component/Comanda";
export default {
  name: "About-Card",
  components: {Comanda, TheTitle},
  data() {
    return {
      activeBtn:0,
      sub:'Main Menu / About Us',
      title:'About us',
      aboutBtn:aboutBtn
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";
.about-section{
  padding-top: 200px;
}
.container{
  padding-top: 54px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .blok{
    @include xl{
      margin-bottom: 30px;
    }
  }



  @include xl{
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  button{
    padding: 10px 30px;
    color: black;
    width: 520px;
    height: 260px;
    background: #FFFFFF;
    border-radius: 10px;

    @include sm{
      width: 350px;
    }

    &.active{
      background-color: $brand_color;
      color: $white;
    }
    h1{
      font-size: 25px;
      @include xl{
        padding-top: 20px;
      }
    }
    p{
      padding-top: 30px;
      font-size: 18px;
      width: 437px;
      @include xl{
        padding-top: 15px;
      }
      @include sm{
        margin-left: 25px;
        width: 200px;
      }
    }
  }
}

.list{
  padding-top: 50px;
}

</style>