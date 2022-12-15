<template>
<div class="form">
  <div class="title">
    <the-title :sub="sub" :title="title"/>
  </div>

  <div class="container">
    <div class="form_is">
      <form @click.prevent>
        <input type="email" placeholder="Enter your Email ..." >
        <input type="number" placeholder="Enter your Phone number">
        <textarea placeholder="Enter your Comments" class="input">    </textarea>

        <div class="social-send">
          <div class="socials">
            <ul v-for="social_array in social_array" :key="social_array">
              <li>
                  <router-link :to="social_array.link" >
                    <i :class="social_array.icon"></i>
                  </router-link>

              </li>
            </ul>
          </div>
          <div class="btn">
            <TheButton>Send</TheButton>
          </div>
        </div>

      </form>
    </div>
  </div>
</div>
</template>

<script>
import social_array from "@/frags/social_array";
import TheTitle from "@/laylouts/The-title";
import TheButton from "@/laylouts/TheButton";
export default {
  name: "Partners-form",
  components: {TheButton, TheTitle},
  data() {
    return{
      sub:'For new partners',
      title:'LEAVE A REQUEST',
      social_array:social_array
    }

  }
}
</script>

<style scoped lang="scss">
  @import "../styles/form.scss";
</style>