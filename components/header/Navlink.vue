<template>
  <nav class="navlink">
    <NuxtLink to="#antennas" class="navlink__link border-white"
      >Antennas & Products</NuxtLink
    >
    <NuxtLink
      to="/modem?page=1"
      class="navlink__link"
      :class="routeName === 'modem' ? ' border-blue-700' : 'border-white '"
      >Modems Routers</NuxtLink
    >
    <NuxtLink to="/contact-us" class="contact-btn"> Contact Us </NuxtLink>
  </nav>
</template>
<script>
export default {
  computed: {
    routeName: function () {
      return this.$route.name.trim();
    },
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
  @apply bg-gradient-to-b from-blue-400  to-blue-600;
  @apply active:from-blue-500;
  @apply text-blue-50;
  @apply p-2;
  @apply block;
  @apply rounded-sm;
  @apply shadow-sm hover:shadow-lg;
}
.navlink__link {
  @apply mb-1 md:my-auto;
  @apply p-4 sm:p-2 sm:mr-5 md:mr-10;
  @apply block;
  @apply border-b hover:border-blue-500;
}
</style>