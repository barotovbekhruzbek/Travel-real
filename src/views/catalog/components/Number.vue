<template>
  <paginate
      :page-count="20"
      :click-handler="functionName"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'">
  </paginate>
</template>

<script>
export default {
  data() {
    return {
      page: 10
    }
  },
  methods:{
    functionName() {

    }
  }
}
</script>