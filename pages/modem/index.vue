<template>
  <div class="">
    <BreadCrumb class="mb-4" />
    <div class="mb-12 text-gray-700">
      <h1 class="text-2xl">All 3G/ 4G/ 5G Modems</h1>
      <p class="">
        An extensive catalogue of all modems compatible with WirEng® antennas.
        You can also
        <NuxtLink to="/#modem-by-brand" class="text-blue-500 hover:underline"
          >browse modems by brand</NuxtLink
        >.
      </p>
    </div>
    <ProductItem :modemsToShow="modemsToShow" class="mb-12" />
    <div class="text-center sm:mb-12">
      <NuxtLink
        :to="`?page=${prevPage}`"
        class="p-6 sm:mr-4 block sm:inline-block"
        :class="
          currentPage <= 1 ? 'text-gray-400 cursor-default' : 'hover:underline'
        "
        :disabled="currentPage <= 1"
      >
        Previous
      </NuxtLink>
      <NuxtLink
        :to="`?page=${index}`"
        class="p-6 sm:m-2 border-b block sm:inline-block"
        v-for="index in totalPage"
        :key="index"
        :class="
          index == currentPage
            ? 'border-blue-700 cursor-default'
            : 'hover:border-blue-500 border-white'
        "
      >
        {{ index }}
      </NuxtLink>
      <NuxtLink
        :to="`?page=${nextPage}`"
        class="p-6 sm:ml-4 block sm:inline-block"
        :class="
          currentPage >= totalPage
            ? 'text-gray-400 cursor-default'
            : 'hover:underline'
        "
        :disabled="currentPage >= totalPage"
      >
        Next
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  watch: {
    $route: function (from, to) {
      this.updateCurrentPage(this.currentPage);
      window.scrollTo(0, 100);
    },
  },
  computed: {
    ...mapGetters("modem", ["modemsToShow", "totalPage"]),
    currentPage: function () {
      return this.$route.query.page || 1;
    },
    prevPage: function () {
      let currentPage = parseInt(this.currentPage);
      if (currentPage <= 1) {
        return 1;
      }
      return currentPage - 1;
    },
    nextPage: function () {
      let currentPage = parseInt(this.currentPage);
      if (currentPage >= this.totalPage) {
        return parseInt(this.totalPage);
      }

      return currentPage + 1;
    },
  },
  methods: {
    ...mapActions("modem", ["updateCurrentPage"]),
  },
};
</script>