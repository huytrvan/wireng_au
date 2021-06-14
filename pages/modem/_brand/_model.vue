<template>
  <div class="">
    <ModemBreadCrumb class="mb-8" :urlPaths="urlPaths" />
    <div class="grid grid-cols-1 sm:grid-cols-2 mb-8">
      <ModemGallery
        class="order-2 sm:order-1"
        :urlPaths="urlPaths"
        :brand="brandSlug"
        :model="modelSlug"
        :imageCount="imageCount"
      />
      <ModemInfo class="order-1 sm:order-2" :brand="brand" :model="model" />
    </div>
    <ModemSpecTable class="" :tableData="tableData" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: this.$route.path,
    };
  },
  computed: {
    urlPaths: function () {
      // ignore first '/'
      let urlPaths = this.url.slice(1);
      urlPaths = urlPaths.split("/");
      return urlPaths;
    },
    jsonData: function () {
      let brand = this.urlPaths[1];
      let model = this.urlPaths[2];
      let fileName = `${brand}_${model}`;
      let jsonData = require(`@/static/json/${fileName}.json`);
      return jsonData;
    },
    brand: function () {
      return this.jsonData[1][1];
    },
    brandSlug: function () {
      let brandSlug = this.brand.replace(/[!.]/g, "-");
      brandSlug = brandSlug.split(" ").join("-").toLowerCase();
      return brandSlug;
    },
    model: function () {
      return this.jsonData[2][1];
    },
    modelSlug: function () {
      // remove illegal characters, ex: '!'
      let modelSlug = this.model.replace(/[!]/g, "-");
      // remove text between bracket
      modelSlug = modelSlug.replace(/\([^()]*\)/g, "").trim();
      modelSlug = modelSlug.split(" ").join("-").toLowerCase();
      return modelSlug;
    },
    imageCount: function () {
      return this.jsonData[0][1];
    },
    tableData: function () {
      return this.jsonData.slice(1);
    },
  },
};
</script>

//     