<template>
  <div class="">
    <agile
      ref="main"
      @after-change="$refs.thumb.goTo($event.currentSlide)"
      v-bind="imageSettings"
    >
      <div v-for="image in images" :key="image.id" class="sm:h-80">
        <img
          :src="require(`~/static/images/modem-images/${slug}/${image}`)"
          alt=""
          class="w-full sm:w-auto sm:h-full object-cover mx-auto"
        />
      </div>
    </agile>
    <agile ref="thumb" v-bind="thumbSettings" class="mt-4 relative">
      <div
        @click="$refs.main.goTo(index)"
        v-for="(image, index) in images"
        :key="index"
        class="cursor-pointer border thumb p-2 hover:border-blue-600"
      >
        <img
          :src="require(`~/static/images/modem-images/${slug}/${image}`)"
          alt=""
          class="h-12 mx-auto object-contain"
        />
      </div>
      <template slot="prevButton">
        <IconChevronLeft
          class="
            w-10
            h-full
            block
            absolute
            top-0
            opacity-25
            hover:opacity-75
            text-gray-700
            left-[-7.5%]
          "
        />
      </template>
      <template slot="nextButton">
        <IconChevronRight
          class="
            w-10
            h-full
            block
            absolute
            top-0
            opacity-25
            hover:opacity-75
            text-gray-700
            right-[-7.5%]
          "
        />
      </template>
    </agile>
  </div>
</template>
<script>
export default {
  props: ["slug"],
  computed: {
    images: function () {
      let images = require
        .context(`@/static/images/modem-images/comset_cm685vx`, true)
        .keys();

      return images.map(function (fileName) {
        // Ignore the directory './' in string
        return fileName.slice(2);
      });
    },
  },
  data() {
    return {
      imageSettings: {
        fade: true,
        speed: 1,
        navButtons: false,
        infinite: false,
      },
      thumbSettings: {
        slidesToShow: 5,
        dots: false,
        infinite: false,
        navButtons: false,
      },
    };
  },
};
</script>
<style>
/* .thumb.agile__slide {
  opacity: 80%;
}
.thumb.agile__slide--active {
  @apply opacity-100;
} */
</style>