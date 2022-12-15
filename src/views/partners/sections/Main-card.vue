<template>
<section class="main-section">
  <div class="title">
    <the-title :sub="sub" :title="title"/>
  </div>

  <div class="container">
    <div class="partners_about">
      <div class="banner">
        <img src="../../../images/sections/img4.png" alt="">
      </div>
      <div class="banner_title">
        <p>Our company’s main goal is supplying the best to our customers.
          With this goal our company has been established in 2019 by a group of professionals and surgeons. One of worlds economic hubs,  London has been chosen to be our head office location. In a short time, we have gathered marketing sales teams in Tashkent(Uzbekistan) and Shymkent(Kazakhstan). </p>
      </div>

    </div>
    <p class="last-title">In 2020, we have opened our representative offices. In the same year, U.S.IOL has signed partnership contract, meanwhile, Labtronics has become our partner company. Meanwhile, we have signed partnership agreements with a total of 45 public and private clinics, 3 opticians in Uzbekistan and 18 in Kazakhstan. In 2021, a few European and American distributor companies has been merged to our country, giving the opportunity to get in touch with our prospective companies directly.</p>
    </div>



  <div class="container">
    <div class="partners_about">

      <div class="banner_title">
        <p>Our company’s main goal is supplying the best to our customers.
          With this goal our company has been established in 2019 by a group of professionals and surgeons. One of worlds economic hubs,  London has been chosen to be our head office location. In a short time, we have gathered marketing sales teams in Tashkent(Uzbekistan) and Shymkent(Kazakhstan). </p>
      </div>

      <div class="banner">
        <img src="../../../images/sections/img3.png" alt="">
      </div>

    </div>
    <p class="last-title">In 2022, we have opened our representative offices. In the same year, U.S.IOL has signed partnership contract, meanwhile, Labtronics has become our partner company. Meanwhile, we have signed partnership agreements with a total of 45 public and private clinics, 3 opticians in Uzbekistan and 18 in Kazakhstan. In 2021, a few European and American distributor companies has been merged to our country, giving the opportunity to get in touch with our prospective companies directly.</p>
    <p class="last-title">In 2020, we have opened our representative offices. In the same year, U.S.IOL has signed partnership contract, meanwhile, Labtronics has become our partner company. Meanwhile, we have signed partnership agreements with a total of 45 public and private clinics, 3 opticians in Uzbekistan and 18 in Kazakhstan. In 2021, a few European and American distributor companies has been merged to our country, giving the opportunity to get in touch with our prospective companies directly.</p>
  </div>



</section>
</template>

<script>
import TheTitle from "@/laylouts/The-title";
export default {
  name: "Main-card",
  components: {TheTitle},
  data() {
    return{
      sub:'Main Menu / Partners',
      title:'Partners'
    }
  }
}
</script>

<style scoped lang="scss">
@import "../styles/main-card.scss";
</style>