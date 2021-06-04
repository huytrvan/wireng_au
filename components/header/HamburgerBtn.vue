<template>
  <button
    class="hamburger-btn"
    :class="{
      'bg-white': !showMobileMenu,
      'bg-gray-50': showMobileMenu,
    }"
    @click="showMobileMenu = !showMobileMenu"
  >
    <IconMenu class="h-full mx-auto block" />
  </button>
</template>
<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
};
</script>
<style>
.hamburger-btn {
  @apply h-11 w-14;
  @apply rounded;
  @apply p-0.5;
  @apply border border-gray-300;
  @apply text-gray-400;
}
</style>