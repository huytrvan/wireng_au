<template>
  <div class="text-sm">
    <span>
      <NuxtLink to="/" class="text-blue-400 hover:underline"> Home </NuxtLink>
      /
    </span>
    <span v-for="url in otherUrls" :key="url.id">
      <NuxtLink
        :to="'/' + url.toLowerCase()"
        class="text-blue-400 hover:underline"
        >{{ url }}
      </NuxtLink>
      /
    </span>
    <span>{{ currentUrl }}</span>
  </div>
</template>
<script>
export default {
  props: ["slug"],
  computed: {
    slugItems: function () {
      let slugItems = this.slug.split("/");
      slugItems = slugItems.map(function (value) {
        let capitalizedFirstLetter = value[0].toUpperCase();
        let theRest = value.slice(1);
        return capitalizedFirstLetter + theRest;
      });
      return slugItems;
    },
    totalItems: function () {
      return this.slugItems.length;
    },
    currentUrl: function () {
      let currentUrl = this.slugItems[this.totalItems - 1];
      return currentUrl;
    },
    otherUrls: function () {
      let otherUrls = this.slugItems.slice(0, this.totalItems - 1);
      return otherUrls;
    },
  },
};
</script>