<template>
<div class="contact-form">
<div class="content">
  <h3>Contact us</h3>
  <h2>Contact with us</h2>
  <p>There are many variations of passages of Lorem Ipsum available  but the majority have suffered alteration in some formed humour .</p>
  <ul class="social">
  <li v-for="social in socials" :key="social.icon">
    <a :href="social.link"><i :class="social.icon"></i></a>
  </li>
  </ul>
</div>

  <form @click.prevent=""  class="form">
    <input type="email" class="input" placeholder="Enter your Email ..." >
    <textarea class="input" placeholder="Enter your comments ..."  ></textarea>
  <div class="form-btn">
    <TheButton>Send</TheButton>
  </div>
  </form>
</div>
</template>

<script>

import social_array from "@/frags/social_array";
import TheButton from "@/laylouts/TheButton";

export default {
  name: "ContacForm",
  components: {TheButton},
  data() {
    return {
      socials: social_array,

    }
  }
}

</script>

<style scoped lang="scss">
@import "styles/contac";
</style>