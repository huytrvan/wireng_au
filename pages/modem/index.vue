<template>
  <div class="">
    <ModemBreadCrumb class="mb-4" />
    <div class="mb-8">
      <h1 class="text-2xl text-gray-600">All 3G/ 4G/ 5G Modems</h1>
      <p class="text-gray-700">
        An extensive catalogue of all modems compatible with WirEng® antennas.
        You can also
        <NuxtLink
          to="/#modem-by-brand"
          class="text-blue-400 hover:underline"
          v-scroll-to="{ el: '#modem-by-brand' }"
          >browse modems by brand</NuxtLink
        >.
      </p>
    </div>
    <ModemItem :modemsToShow="modemsToShow" class="mb-12" />
    <div class="text-center">
      <button
        class="p-4 m-4"
        :class="
          currentPage <= 1 ? 'text-gray-400 cursor-default' : 'hover:underline'
        "
        :disabled="currentPage <= 1"
        @click="updateCurrentPage(currentPage - 1)"
      >
        Previous
      </button>
      <button
        class="p-4 m-2"
        v-for="index in totalPage"
        :key="index"
        @click="updateCurrentPage(index)"
        :class="
          index === currentPage
            ? 'border-b border-blue-700 cursor-default'
            : 'hover:underline'
        "
      >
        {{ index }}
      </button>
      <button
        class="p-4 m-4"
        :class="
          currentPage >= totalPage
            ? 'text-gray-400 cursor-default'
            : 'hover:underline'
        "
        @click="updateCurrentPage(currentPage + 1)"
        :disabled="currentPage >= totalPage"
      >
        Next
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  scrollToTop: true,
  watch: {
    $route: function (from, to) {
      window.scrollTo(0, 150);
    },
  },
  computed: {
    ...mapGetters("modem", ["modemsToShow", "totalPage"]),
    currentPage: function () {
      return this.$store.state.modem.currentPage;
    },
  },
  methods: {
    ...mapActions("modem", ["updateCurrentPage"]),
  },
};
</script>