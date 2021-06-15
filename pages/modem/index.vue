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
    <ModemItem :modemsToShow="modemsToShow" class="mb-8" />
    <button
      class="bg-blue-700 text-blue-50"
      :disabled="currentPage <= 1"
      @click="updateCurrentPage(currentPage - 1)"
    >
      Previous
    </button>
    <button
      class="bg-blue-700 text-blue-50"
      @click="updateCurrentPage(currentPage + 1)"
      :disabled="currentPage >= totalPage"
    >
      Next
    </button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
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