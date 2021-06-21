<template>
  <div class="">
    <agile
      ref="main"
      @after-change="$refs.thumbnail.goTo($event.currentSlide)"
      v-bind="imageSettings"
    >
      <div v-for="index in imageCount" :key="index" class="sm:h-80">
        <img
          :src="
            require(`~/static/images/${folderName}/compressed_${index - 1}.jpg`)
          "
          alt=""
          class="w-full sm:w-auto sm:h-full object-cover mx-auto"
        />
      </div>
    </agile>
    <agile ref="thumbnail" v-bind="thumbnailSettings" class="mt-4 relative">
      <div
        @click="$refs.main.goTo(index - 1)"
        v-for="index in imageCount"
        :key="index"
        class="
          cursor-pointer
          border
          thumbnail
          p-2
          hover:border-blue-600
          mx-1
          rounded-sm
        "
      >
        <img
          :src="require(`~/static/images/${folderName}/150_${index - 1}.jpg`)"
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
          :class="{ hidden: this.imageCount <= 5 }"
        />
      </template>
      <template slot="nextButton">
        <IconChevronRight
          :class="{ hidden: this.imageCount <= 5 }"
          class="
            w-10
            h-full
            block
            absolute
            top-0
            opacity-25
            hover:opacity-75
            text-gray-700
            right-[-10.5%]
          "
        />
      </template>
    </agile>
  </div>
</template>
<script>
export default {
  props: ["folderName", "imageCount"],
  data() {
    return {
      imageSettings: {
        fade: true,
        speed: 1,
        navButtons: false,
        infinite: false,
        dots: false,
      },
      thumbnailSettings: {
        slidesToShow: 5,
        dots: false,
        infinite: false,
        navButtons: true,
      },
    };
  },
};
</script>
<style>
/* .thumbnail.agile__slide {
  opacity: 80%;
}
.thumbnail.agile__slide--active {
  @apply opacity-100;
} */
.thumbnail.agile__slide {
  width: calc(100% / 6 - 1px) !important;
}
</style>