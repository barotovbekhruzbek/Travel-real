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
          <h2>BioLabs</h2>
        </div>

        <p class="text">Copyright &copy; 2022 BioLab </p>
        <p class="text">    Разработка: Online Service Group</p>

        <ul class="footor-social">
          <li v-for="social in social_array" :key="social.icon">
            <a :href="social.link"> <i :class="social.icon"></i> </a>
          </li>
        </ul>
      </div>
      <div class="item">
        <h4 class="title">About</h4>
        <p class="text"> We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet projects. We deliver unconventional solutions
          each project is a meaningful adventure
         </p>
      </div>


      <!--    -->

      <div class="item">
        <h4 class="title">Contact</h4>
        <p class="text"> We are idea generators, goal seekers, challenge-thirsty professionals, creators of unique Internet projects. We deliver unconventional solutions
          each project is a meaningful adventure

        </p>
      </div>

      <div class="item">
        <h4 class="title"> Location </h4>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49061.007696464425!2d64.38777875148342!3d39.77753103768543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50060e65993cd5%3A0xc87beaf40e48e767!2z0JHRg9GF0LDRgNCwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1656064593228!5m2!1sru!2s"    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </div>



  </div>



</footer>
</template>

<script>
import social_array from "@/frags/social_array";
import ContacForm from "@/laylouts/ContacForm";
export default {
  name: "The-footor",
  components: {ContacForm},
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