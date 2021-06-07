<template>
  <form @submit.stop.prevent="search()" class="search-bar">
    <input
      aria-label="Search"
      type="text"
      placeholder="Search Antenna or Modem"
      class="search-bar__input"
      maxlength="64"
      v-model.lazy.trim="searchQ"
    />
    <button type="submit" class="search-bar__btn" title="Search">
      <IconSearch />
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      searchQ: this.$route.query.item,
    };
  },
  methods: {
    search() {
      this.$router.replace({
        path: "search",
        query: {
          ...this.$route.query,
          item: this.searchQ,
        },
      });
    },
  },
};
</script>
<style>
.search-bar {
  @apply relative;
  @apply max-w-screen-md;
  @apply h-12;
}

.search-bar__input {
  @apply border-2;
  @apply px-4 py-1;
  @apply text-lg;
  @apply appearance-none;
  @apply outline-none;
  @apply rounded;
  @apply w-full h-full;
}

.search-bar__input:focus {
  @apply border-yellow-300;
}
.search-bar__btn {
  @apply absolute right-0 top-0;
  @apply h-full;
  @apply bg-blue-600 text-blue-50 hover:bg-blue-500;
  @apply rounded-r;
  @apply px-4;
  @apply shadow-sm;
}
</style>