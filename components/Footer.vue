<template>
  <footer
    class="
      text-center
      py-4
      bg-gradient-to-b
      from from-gray-200
      to-gray-50
      text-gray-700 text-sm
    "
  >
    Copyright © 2010-{{ this.currentYear }} WirEng® Australia & New Zealand. All
    rights reserved. Prices and specifications are subject to change without
    notice.
  </footer>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>