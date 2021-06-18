<template>
  <div class="">
    <h1 class="text-2xl">{{ this.pageTitle }}</h1>
  </div>
</template>
<script>
export default {
  props: ["brand", "model"],
  computed: {
    pageTitle: function () {
      return `${this.brand} ${this.model} Modem Router`;
    },
  },
};
</script>