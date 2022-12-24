<template>
  <div class="container">
    <div class="search-panel">
      <h3> Biletni izlash </h3>
      <div class="bar">
        <input type="text" v-model="search" placeholder="izlash ..." />
      </div>

    </div>

  <div class="wrapper" v-for="user in filteredAndSorted" :key="user.id">
    <div class="box">

      <div>
        <img src="../../../images/home/air.svg" alt="">
      </div>
      
    <div>
      <p>{{ user.name }} <i class="fas fa-right-long"></i> {{ user.qayerga }}  </p>
    </div>

      <div>
        <h5>uchish vaqti</h5>
        <p>24.12.2022</p>
        <p>23:15</p>
      </div>

      <div>
        <h3>Narxi </h3>
        <p>  {{ user.narxi }}  so`m</p>
      </div>

      <div>
        <button>Buyurtma berish</button>
      </div>

    </div>
  </div>

  </div>
</template>

<script>
export default {
  //...
  data() {
    return {
      search: "",
      userList: [
        {
          id: 1,
          name: "Buxoro",
          qayerga: 'Toshkent',
          data:'24.12.2022',
          time: '22:30',
          narxi: '1 500 000'
        },
        {
          id: 1,
          name: "Nukus",
          qayerga: 'Buxoro',
          data:'24.12.2022',
          time: '22:30',
          narxi: '1 500 000'
        },
        {
          id: 1,
          name: "Toshkent",
          qayerga: 'Farg`ona',
          data:'24.12.2022',
          time: '22:30',
          narxi: '1 500 000'

        },
      ],
    };
  },
  computed: {
    filteredAndSorted() {
      const compare = (a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      };

      return this.userList
          .filter((user) => {
            return user.name.toLowerCase().includes(this.search.toLowerCase());
          })
          .sort(compare);
    },
  },
  //...
};
</script>

<style lang="scss" scoped>
@import "../../../styles/components/_vars.scss";
@import "../../../styles/components/_mixins.scss";

.container {
  padding-top: 200px;
}
.wrapper {
 margin: 20px auto;
  border-radius: 10px;
  max-width: 1000px;
  height: 130px;
  background-color: white;
  padding: 20px;

  @include md {
    height: auto;
  }

  .box {

    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div img {
      margin-bottom: 20px;
    }
    div p {
      padding-top: 10px;
    }

    @include md  {
      flex-direction: column;
    }

    

    div {
      button {
        padding: 8px 20px;
        background-color: #EFA543;
        border-radius: 8px;
        color: white;

        @include md {
          margin-top: 20px;
        }
      }
    }
  }

}

.search-panel {
  background-color: white;
  border-radius: 10px;
  padding: 20px 40px;

  h3 {
    padding-bottom: 15px;
    text-align: center;
    font-size: 40px;
  }
  input {
   width: 400px;
    height: 30px;
   
    

  }
}


.bar {
  display: flex;
  justify-content: center;
}
</style>