<template>
<header class="header" :class="{ active: is_navbar_active }">
  <div class="container">
    <nav class="navbar">
      <div class="logo">
        <span> <router-link to="/">
          ENDA TOUR
        </router-link> </span>
      </div>
      <ul class="menu" v-if="!is_mobile">
        <li v-for="item in menu_array" :key="item.text">
          <router-link :to="{ name: item.link }" class="link">
            {{ item.text[lengs] }}
          </router-link>
        </li>
      </ul >

      <div class="mobile-menu" v-if="is_mobile" :class="{active:is_menu_open}">
     <ul>
       <li v-for="item in menu_array" :key="item.text">
         <router-link class="link" :to="{ name: item.link }">
           {{ item.text[lengs] }}
         </router-link>
       </li>
     </ul>

        <div class="mobile-search">


        </div>
      </div>

      <div class="actions">
        <div class="search" v-if="!is_mobile">
          <div class="contact-btn">
            <button>Buyurtma berish</button>
          </div>

        </div>



        <div class="language" @click="toggleDropDown">
          <span>{{lengs}}</span>
          <i
              class="fas fa-angle-down"
              :style="{ transform: is_dropdawn_open ? 'rotate(180deg)' : 'rotate(0deg)'  }"
          ></i>

          <ul class="dropdown" :class="{ active: is_dropdawn_open }" >
            <li @click="uzbb"> UZB </li>
            <li @click="russ">RUS</li>
            <li @click="engg"><router-link to="catalog">ENG</router-link></li>
          </ul>
        </div>



      </div>
      <div class="burger" v-if="is_mobile" @click="is_menu_open = !is_menu_open">
        <burger-btn :is_active="is_menu_open"></burger-btn>
      </div>
    </nav>
  </div>

</header>
</template>

<script>
import BurgerBtn from "@/laylouts/Burger-btn";
import menu_array from "@/frags/menu_array";
export default {
  name: "Navbar",
  components: {

    BurgerBtn
  },

  data() {
    return {
      is_dropdawn_open:false,
      is_menu_open:false,
      is_mobile:false,
      menu_array:menu_array,
      brakpoints_width:970,
      is_navbar_active:false,
      lengs: 'en',
    }
  },
  methods:{
    russ() {
        this.lengs = 'ru'
      },
      uzbb() {
        this.lengs = 'uz'
      },
      engg() {
        this.lengs = 'en'
      },

    toggleDropDown() {
      this.is_dropdawn_open = !this.is_dropdawn_open
    },
    checkWindowWidth() {
      const width  =  window.innerWidth
      if(width <this.brakpoints_width) {
        this.is_mobile = true
        return
      }
      this.is_mobile = false
      this.is_menu_open=false
    }
  },
  mounted() {
    this.checkWindowWidth()
    window.addEventListener('resize', this.checkWindowWidth)
    window.addEventListener('scroll',() => {
     window.pageYOffset > 0
         ? this.is_navbar_active = true
         : this.is_navbar_active = false

    })
  }

}
</script>

<style scoped lang="scss">
@import "./styles/navbar.scss";
</style>