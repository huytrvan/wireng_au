<template>
  <div class="">
    <div class="mb-8 text-gray-700">
      <h2 id="products" class="text-xl mb-1">Products by WirEng®</h2>
      <p class="">A collection of our newest 5G/4G/3G antenna products</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
      <NuxtLink
        :to="`/${antenna.clean.toLowerCase()}-for-hotspot-modems`"
        v-for="antenna in antennas"
        :key="antenna.clean.id"
        class="hover:text-blue-600 inline-block"
      >
        <img
          :src="
            require(`@/static/images/antenna-images/${antenna.clean.toLowerCase()}/300_0.jpg`)
          "
          alt=""
          class="object-contain min-w-[5rem] h-28 md:h-44 mx-auto"
        />
        <h3 class="text-center text-lg">
          {{ `${antenna.full} by WirEng®` }}
        </h3>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    antennas: function () {
      let antennas = require("@/static/json/antenna/_antennas.json");
      antennas = antennas.map((value) => {
        return {
          full: value[1],
          clean: value[1].replace(/[™]/g, ""),
        };
      });
      return antennas;
    },
  },
};
</script>