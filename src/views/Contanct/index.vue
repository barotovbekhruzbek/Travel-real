<template>
  <div class="Contact-section">
    <title_contact/>

    <div class="wrap">
      <contactInfo />
    </div>
  </div>

</template>

<script>
import Title_contact from "@/views/Contanct/sections/Title_contact";
import contactInfo from "@/views/Contanct/components/contact-info";


export default {
  name: "index",
  components: { Title_contact, contactInfo}
}
</script>

<style scoped lang="scss">
.Contact-section{
  min-height: 100vh;
  padding-top: 200px;
}
</style>