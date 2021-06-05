<template>
  <nav class="navlink">
    <NuxtLink class="navlink__link" to="/"> Home </NuxtLink>
    <NuxtLink to="/modem?page=1" class="navlink__link"
      >Hotspot/ Modems</NuxtLink
    >
    <NuxtLink to="#contact-us" class="contact-btn"> Contact Us </NuxtLink>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      antennas: {
        title: "Antenna Products",
        items: {
          "5G Antennas": "/antenna/5g",
          "4G Antennas": "/antenna/4g",
          "Home/ Office Antennas": "/antenna/for-home",
          "Vehicle Antennas": "/antenna/for-vehicle",
          "Boat Antennas": "/antenna/for-boat",
          "See All Antennas >": "/antenna/",
        },
      },
      modems: {
        title: "Compatible Modems",
        items: {
          NetGear: "/modem/netgear",
          Comset: "/modem/comset",
          "TP-Link": "/modem/tp-link",
          Huawei: "/modem/huawei",
          Tenda: "/modem/tenda",
          "See All Brands >": "/modem/",
        },
      },
      helpfulLinks: {
        title: "Helpful Links",
        items: {
          "Product Inquiry": "/product-inquiry/",
          "Frequently Asked Questions": "/frequently-asked-questions/",
          "Get Enterprise Quote": "/enterprise-quote/",
          "Customer Reviews": "/customer-reviews/",
          "About Us": "/about/",
        },
      },
    };
  },
};
</script>
<style>
.navlink {
  @apply sm:flex sm:justify-end sm:items-center;
  @apply text-center;
  @apply text-lg;
  @apply sm:pt-2;
}
.contact-btn {
  @apply w-full sm:w-32;
  @apply hover:bg-yellow-300 bg-yellow-400;
  @apply text-yellow-900;
  @apply p-2;
  @apply block;
  @apply shadow-sm;
}
.navlink__link {
  @apply mb-1 md:my-auto;
  @apply p-4 sm:p-2 md:mr-12;
  @apply block;
  @apply border-b-2;
  @apply border-white md:hover:border-blue-800;
  @apply focus:bg-blue-800 focus:text-blue-50;
}
</style>
// <HeaderNavlinkDropdown :data="this.antennas" />
// <HeaderNavlinkDropdown class="my-8 md:my-auto" :data="this.modems" />
// <HeaderNavlinkDropdown class="my-8 md:my-auto" :data="this.helpfulLinks" />

// <NuxtLink to="/#antenna" class="my-8 md:my-auto lg:mr-12 text-gray-900">
//       Antenna Solutions</NuxtLink
//     >