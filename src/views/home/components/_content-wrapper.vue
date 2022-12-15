<template>
<div class="text-content">
<slot />
</div>
</template>

<script>
export default {
  name: "_content-wrapper"
}
</script>

<style scoped lang="scss">
@import "../../../styles/components/_mixins.scss";
@import "../../../styles/components/_vars.scss";
.text-content{
  max-width: 700px;

// media
  @include xxl{
    max-width: 540px;
  }


.subtitle{
  font-size: 25px;
  color: $brand_color;
  margin-bottom: 5px;


  // media
  @include xxl{
    font-size: 20px;
  }
}

  .title{
    font-size: 70px ;

    // media
    @include xxl{
      font-size: 45px;
    }
  }

  .text{
    font-size: 18px;
    font-family: 'Circle',sans-serif;
    line-height: 26px;
    margin: 10px 0 20px;
    font-weight: 400;

  }

  .buttons{
    display: flex;
    gap: 48px;

  //  Media

    @include md{
     gap: 20px 15px;
      justify-content: space-evenly;
      flex-wrap: wrap;

    }
  }
}
</style>