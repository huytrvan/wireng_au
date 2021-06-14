<template>
  <div class="text-sm">
    <span>
      <NuxtLink to="/" class="text-blue-400 hover:underline"> Home </NuxtLink>
      /
    </span>
    <span v-for="(path, index) in progressivePaths" :key="index">
      <NuxtLink
        :to="'/' + path.toLowerCase()"
        class="text-blue-400 hover:underline"
        >{{ otherPaths[index] }}
      </NuxtLink>
      /
    </span>
    <span>{{ currentPath }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: this.$route.path,
    };
  },
  computed: {
    urlPaths: function () {
      // ignore first '/'
      let urlPaths = this.url.slice(1);
      urlPaths = urlPaths.split("/");
      return urlPaths;
    },
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
    progressivePaths: function () {
      let otherPaths = this.otherPaths;
      let progressivePaths = [];
      for (let i = 0; i < otherPaths.length; i++) {
        let value = otherPaths.slice(0, i + 1).join("/");
        progressivePaths.push(value);
      }
      return progressivePaths;
    },
  },
};
</script>