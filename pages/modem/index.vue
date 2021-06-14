<template>
  <div class="">
    <ModemBreadCrumb :urlPaths="urlPaths" class="mb-4" />
    <h1 class="text-2xl text-gray-600">All 3G/ 4G/ 5G Modems</h1>
    <p class="text-gray-700">
      An extensive catalogue of all modems compatible with WirEng® antennas. You
      can also
      <NuxtLink
        to="/#modem-by-brand"
        class="text-blue-400 hover:underline"
        v-scroll-to="{ el: '#modem-by-brand' }"
        >browse modems by brand</NuxtLink
      >.
    </p>
    <div class="">{{ fileNames }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileNames: this.$store.getters["modem/fileNames"],
    };
  },
};
</script>