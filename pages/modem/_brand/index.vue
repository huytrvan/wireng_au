<template>
  <div class="">
    <ModemBreadCrumb class="mb-8" :slug="slug" />
    <h1 class="text-2xl text-gray-700 mb-4">{{ brandCapitalized }} Modems</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
      <NuxtLink
        :to="`${brand}/${model.toLowerCase()}`"
        v-for="(model, index) in models"
        :key="index"
        class="hover:text-blue-600 inline-block"
      >
        <img
          :src="
            require(`@/static/images/modem-images/${brand}_${model.toLowerCase()}/300_0.jpg`)
          "
          alt=""
          class="object-contain min-w-[5rem] h-28 md:h-40 mx-auto"
        />
        <h2 class="text-center">
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
      brand: "comset",
      slug: "modem/comset",
    };
  },
  computed: {
    jsonData: function () {
      let jsonData = require(`@/static/json/${this.brand}.json`);
      return jsonData;
    },
    models: function () {
      let models = this.jsonData.map(function (value) {
        value = value[0][1];
        return value;
      });
      return models;
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