<template>
  <header class="header">
    <div class="flex justify-between items-center header__item">
      <HeaderWirengLogo />
      <HeaderHamburgerBtn
        class="block sm:hidden"
        @click.native="showNavlink = !showNavlink"
      />
    </div>
    <HeaderNavlink
      :class="{ 'hidden sm:block': !showNavlink }"
      class="header__item"
    />
  </header>
</template>
<script>
export default {
  data() {
    return {
      showNavlink: false,
    };
  },
};
</script>
<style>
.header {
  @apply relative;
  @apply py-4;
  @apply grid grid-cols-2;
  @apply gap-y-4;
  @apply lg:px-6;
  @apply lg:gap-x-20 lg:gap-y-6;
}
.header__item {
  @apply col-span-2 sm:col-span-1;
}
</style>

