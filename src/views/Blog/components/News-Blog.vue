<template>
  <div class="news-blog">
    <TheTitle  :sub="sub" :title="title"/>
    <div class="container">
      <div class="card-wrap">
        <CardNews
          v-for="(newsBlog, id) in newsBlog"
          :key="newsBlog.id"
          :img="newsBlog.img"
          :date="newsBlog.date"
          :title="newsBlog.title"

          @action ="$router.push({ name: 'blogAbout', params:{ id: newsBlog.id} })"
        />
      </div>

    </div>

  </div>
</template>

<script>
import CardNews from "@/views/Blog/sections/CardNews";
import newsBlog from "@/frags/news-blog";
import TheTitle from "@/laylouts/The-title";
export default {
  name: "News-Blog",
  components: {TheTitle, CardNews},
  data() {
    return {
      newsBlog:newsBlog,
      sub:'Main Menu / Blog',
      title:'Blog'
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  padding-top: 80px;
  .card-wrap{
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>