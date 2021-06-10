<template>
  <div class="">
    <h1 class="text-2xl">{{ this.pageTitle }}</h1>
  </div>
</template>
<script>
export default {
  props: ["jsonData"],
  computed: {
    pageTitle: function () {
      let brand = this.jsonData[0][1];
      let model = this.jsonData[1][1];
      return `${brand} ${model} Modem Router`;
    },
  },
};
</script>