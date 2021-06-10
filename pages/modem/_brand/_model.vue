<template>
  <div class="">
    <ModemBreadCrumb class="mb-8" :slug="slug" />
    <div class="grid grid-cols-1 sm:grid-cols-2 mb-8">
      <ModemGallery class="order-2 sm:order-1" :slug="slug" />
      <ModemInfo class="order-1 sm:order-2" :jsonData="jsonData" />
    </div>
    <ModemSpecTable class="" :file="jsonData" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      brand: "comset",
      model: "cm685vx",
    };
  },
  computed: {
    slug: function () {
      return `modem/${this.brand}/${this.model}`;
    },
    jsonData: function () {
      let jsonData = require(`@/static/json/${this.slug}.json`);
      return jsonData;
    },
  },
};
</script>