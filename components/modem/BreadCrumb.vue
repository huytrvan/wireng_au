<template>
  <div class="text-sm">
    <NuxtLink to="/" class="text-blue-400 hover:underline">Home</NuxtLink>
    <span>/</span>
    <NuxtLink :to="'/' + this.brand" class="text-blue-400 hover:underline"
      >{{ brand }}
    </NuxtLink>
    <span>/</span>
    <span>{{ model }}</span>
  </div>
</template>
<script>
export default {
  props: ["jsonData"],
  data() {
    return {
      brand: this.jsonData[0][1],
      model: this.jsonData[1][1],
    };
  },
};
</script>