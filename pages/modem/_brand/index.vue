<template>
  <div class="">
    <img
      class="border h-40"
      :src="require('@/static/images/modem-images/comset_cm685v-1/300_0.jpg')"
      alt=""
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      brand: "comset",
    };
  },
  computed: {
    jsonData: function () {
      let jsonData = require(`@/static/json/${this.brand}.json`);
      return jsonData;
    },
    images: function () {
      let images = require
        .context("@/static/images/modem-images/comset_cm685v-1")
        .keys();
      images = images.map(function (value) {
        value = value.slice(1);
        value = "300_" + value; // get
      });
      return images;
    },
  },
};
</script>