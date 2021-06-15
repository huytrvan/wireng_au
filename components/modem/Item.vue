<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
    <NuxtLink
      :to="`modem/${data.brandSlug}/${data.modelSlug}`"
      v-for="data in dataToShow"
      :key="data.id"
      class="hover:text-blue-600 inline-block"
    >
      <img
        :src="
          require(`@/static/images/modem-images/${data.brandSlug}_${data.modelSlug}/300_0.jpg`)
        "
        alt=""
        class="object-contain min-w-[5rem] h-28 md:h-44 mx-auto"
      />
      <h2 class="text-center text-lg">
        {{ `${data.brand} ${data.model}` }}
      </h2>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: ["modemsToShow"],
  computed: {
    dataToShow: function () {
      let dataToShow = this.modemsToShow.map((value) => {
        let brand = value[0][1];
        let model = value[1][1];
        return {
          brand: brand,
          model: model,
          brandSlug: this.getSlug(brand),
          modelSlug: this.getSlug(model),
        };
      });
      return dataToShow;
    },
  },
  methods: {
    // getUrl: function (brand, model) {
    //   brand = this.getSlug(brand);
    //   model = this.getSlug(model);

    //   return `${brand}_${model}`;
    // },

    getSlug: function (value) {
      // remove text in bracket
      value = value.replace(/\([^()]*\)/g, "").trim();

      // remove illegal character (like '!') and whitespace
      value = value.replace(/[.!\s]/g, "-");

      value = value.toLowerCase();
      return value;
    },
  },
};
</script>