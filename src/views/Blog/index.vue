<template>
<section class="blog-sections">
<NewsBlog/>
</section>
</template>

<script>

import NewsBlog from "@/views/Blog/components/News-Blog";
export default {
  name: "index",
  components: {NewsBlog}
}
</script>

<style scoped lang="scss">
.blog-sections{
  min-height: 100vh;
  padding-top: 200px;
}
</style>