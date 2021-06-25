<template>
  <div class="">
    <BreadCrumb class="mb-4" :urlPaths="urlPaths" />
    <h1 class="mb-4 text-xl text-gray-700">{{ brandCapitalized }} Modem</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
      <NuxtLink
        :to="`${brand}/${model.toLowerCase()}`"
        v-for="(model, index) in modelSlugs"
        :key="index"
        class="hover:text-blue-600 inline-block"
      >
        <img
          :src="
            require(`@/static/images/modem-images/${brand}_${model.toLowerCase()}/300_0.jpg`)
          "
          alt=""
          class="object-contain min-w-[10rem] h-28 md:h-44 mx-auto"
        />
        <h2 class="text-center text-lg">
          {{ `${brandCapitalized} ${model}` }}
        </h2>
      </NuxtLink>
    </div>
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
    brand: function () {
      return this.urlPaths[1];
    },
    jsonData: function () {
      let jsonData = require(`@/static/json/modem/${this.brand}.json`);
      return jsonData;
    },
    models: function () {
      let models = this.jsonData.map(function (value) {
        value = value[1];
        return value;
      });
      return models;
    },
    modelSlugs: function () {
      let modelSlugs = this.models.map(function (value) {
        // remove illegal character, like: '!'
        value = value.replace(/[!]/g, "-");
        value = value.split(" ").join("-");
        return value;
      });
      return modelSlugs;
    },
    brandCapitalized: function () {
      let brandCapitalized = this.brand
        .split(" ")
        .map(function (value) {
          let firstLetter = value.slice(0, 1);
          firstLetter = firstLetter.toUpperCase();
          let theRest = value.slice(1);
          return firstLetter + theRest;
        })
        .join(" ");
      return brandCapitalized;
    },
  },
};
</script>