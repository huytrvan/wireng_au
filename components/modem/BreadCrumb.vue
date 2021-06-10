<template>
  <div class="text-sm">
    <span>
      <NuxtLink to="/" class="text-blue-400 hover:underline"> Home </NuxtLink>
      /
    </span>
    <span v-for="otherPath in otherPaths" :key="otherPath.id">
      <NuxtLink
        :to="'/' + otherPath.toLowerCase()"
        class="text-blue-400 hover:underline"
        >{{ otherPath }}
      </NuxtLink>
      /
    </span>
    <span>{{ currentPath }}</span>
  </div>
</template>
<script>
export default {
  props: ["urlPaths"],
  computed: {
    urlPathsCapitalized: function () {
      let urlPathsCapitalized = this.urlPaths.map(function (value) {
        let capitalizedFirstLetter = value[0].toUpperCase();
        let theRest = value.slice(1);
        return capitalizedFirstLetter + theRest;
      });
      return urlPathsCapitalized;
    },
    totalItems: function () {
      return this.urlPathsCapitalized.length;
    },
    currentPath: function () {
      let currentPath = this.urlPathsCapitalized[this.totalItems - 1];
      return currentPath;
    },
    otherPaths: function () {
      let otherPaths = this.urlPathsCapitalized.slice(0, this.totalItems - 1);
      return otherPaths;
    },
  },
};
</script>