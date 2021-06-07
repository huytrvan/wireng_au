<template>
  <div class="">
    {{ this.file.spec }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      slug: "comset_cm658vx",
    };
  },
  computed: {
    file: function () {
      let file = require(`@/static/json/${this.slug}.json`);
      return file;
    },
  },
};
</script>