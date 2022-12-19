<template>
  <div class="block1">

    <div class="part">

      <div class="about">
        <ul>
          <li><a href="/">Biz bilan bog`lanish</a></li>

        </ul>
      </div>

      <div class="email">
        <form @submit.prevent="sendMail">
          <input type="text" v-model="name"  placeholder="Name" autocomplete="off">
          <input type="tel" v-model="num" placeholder="+998 88 415-15-07" autocomplete="off">
          <input type="email" v-model="email" placeholder="email" autocomplete="off">
          <input type="text" v-model="massage" placeholder="Comment .." autocomplete="off">
          <button>отправить</button>
        </form>
      </div>



    </div>
  </div>


</template>

<script>


export default {
  components: {


  },
  data() {
    return {
      token: '5359007058:AAEAwrAtik0Tzh4UrM01DwXqyJjlvJ6krVA',
      chatId: '1419395968',
      massage: '',
      num: '+998'
    }
  },
  methods : {
    async   sendMail () {
      const emailsms = this.email.toString()
      const namesms = this.name.toString()
      const num = this.num.toString()
      const sms = this.massage.toString()
      await fetch (`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&parse_mode=html&text=${sms},${namesms},${emailsms}, ${num}`)
      this.name = ''
      this.emailsms= ''
      this.num = ''
      this.massage = ''


    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/components/_vars.scss";
@import "../styles/components/_mixins.scss";



.block1{

  color: #fff;
  width: 100%;
  background-size: cover;
  height: 478px;
  //  media
  @include lg{
    height: auto;
  }
  .part{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    //  media
    @include xl{
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }
    .about{

      ul{
        li{
          padding-top: 15px;
          a{
            color: black;
            font-size: 45px;
          }
        }
      }
    }
  }

  .title{
    padding-top: 15px;
    align-items: center;
    text-align: center !important;

  }
}
.email{
  width:500px;
  margin-right: 100px;
  background: #fff;
  margin-top: 60px;
  @include md{
    width: 400px;
  }

  form{

    padding: 20px;

    @include md{
      margin-left: 30px;
    }

    button{

      padding: 15px 30px;
      cursor: pointer;
      color:#fff;
      text-transform: uppercase;
      background: rgb(75, 63, 63);
      letter-spacing: 3px;
    }

    input{
      margin-bottom: 15px;
      padding: 10px;
      width: 400px;
      font-size: 18px;
      @include md{
        width: 300px;
      }

    }
  }
}
</style>

