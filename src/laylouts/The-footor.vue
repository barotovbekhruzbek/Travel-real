<template>
<footer class="footor">
  <div class="for-form">
<div class="container">
  <contac-form/>
</div>
  </div>


  <div class="footor-content">
    <div class="container">

      <div class="item">
        <div class="logo">
          <h2>ENDA TOUR</h2>
        </div>

        <p class="text">Copyright &copy; 2022</p>
        <p class="text">    Разработка: <a href="https://webranduz.netlify.app/">Web brend</a></p>

        <ul class="footor-social">
          <li v-for="social in social_array" :key="social.icon">
            <a :href="social.link"> <i :class="social.icon"></i> </a>
          </li>
        </ul>
      </div>
      <div class="item">
        <h4 class="title">Biz haqimizda</h4>
        <p class="text"> Ichki va tashqi turizm xizmati
          Biz ko`p yillardan beri sifatli xizmat olib bormoqdamiz
         </p>
      </div>


      <!--    -->

      <div class="item">
        <h4 class="title">Contact</h4>
        <p class="text">
          Manzil : Tashkent, Mirzo Ulugbek tumani Osiyo kochasi 13- uy <br>
          Murojaat uchun : +998950999339


        </p>
      </div>

      <div class="item">
        <h4 class="title"> Location </h4>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2076738520923!2d69.29128441579529!3d41.32609727926988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4cbd5591e2b%3A0x31a0279a22a206bb!2zT3NpeW8ga28nY2hhc2ksIFRhc2hrZW50LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1671256264411!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </div>



  </div>



</footer>
</template>

<script>
import social_array from "@/frags/social_array";

export default {
  name: "The-footor",
  components: {},
  data() {
    return{
      social_array:social_array
    }
  }
}
</script>

<style scoped lang="scss">
@import "styles/footor.scss";

</style>