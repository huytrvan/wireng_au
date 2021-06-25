<template>
  <div class="">
    <p class="text-gray-700 mb-4">Buy from our official distributors:</p>
    <a
      :href="link[1]"
      class="
        shadow
        hover:shadow-lg
        border
        max-w-[10rem]
        block
        text-center
        p-4
        rounded-sm
      "
      v-for="(distributor, index) in distributors"
      :key="index"
    >
      <img
        :src="
          require(`@/static/images/distributor-brand-logos/150_${distributor.toLowerCase()}.jpg`)
        "
        alt=""
        class=""
      />
      <p>{{ distributor }}</p>
    </a>
  </div>
</template>
<script>
export default {
  props: ["distributors", "link"],
};
</script>