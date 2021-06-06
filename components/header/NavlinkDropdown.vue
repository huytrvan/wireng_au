<template>
  <div
    class="w-auto outline-none"
    @mouseover="showDropdown = true"
    @mouseleave="showDropdown = false"
    @focus="showDropdown = true"
    @focusout="showDropdown = false"
    @click="
      {
        showDropdown ? !showDropdown : showDropdown;
      }
    "
    tabindex="0"
  >
    <div class="navlink-dropdown__title">
      {{ this.data.title }}
      <IconChevronDown class="navlink-dropdown__icon" />
    </div>
    <div
      class="navlink-dropdown__list"
      :class="{ hidden: showDropdown == false }"
    >
      <NuxtLink
        v-for="(link, linkTitle, index) in this.data.items"
        :to="link"
        :key="index.id"
        class="navlink-dropdown__link"
        >{{ linkTitle }}</NuxtLink
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      showDropdown: false,
    };
  },
};
</script>
<style>
.navlink-dropdown__title {
  @apply mr-16 mt-0.5;
  @apply text-lg;
  @apply block;
  @apply w-full;
  @apply hover:text-blue-400;
  @apply cursor-pointer;
  @apply border-t border-b md:border-none;
  @apply py-4 md:py-0;
  @apply mr-2;
}

.navlink-dropdown__icon {
  @apply w-6 h-6;
  @apply inline;
  @apply hover:text-blue-500;
}

.navlink-dropdown__link {
  @apply block;
  @apply m-4 py-1;
  @apply w-full;
  @apply hover:text-blue-400;
}

.navlink-dropdown__list {
  @apply md:absolute md:z-50;
  @apply bg-white;
  @apply border;
  @apply rounded;
}
</style>