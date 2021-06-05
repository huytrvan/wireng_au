<template>
  <div class="">
    <h1>Testing</h1>
    <agile v-bind="agileSettings" class="shadow-md">
      <div v-for="imageName in imageNames" :key="imageName.id" class="slide">
        <img
          :src="require(`../static/images/Carousels/${imageName}`)"
          alt=""
          class="w-full"
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
            bg-gray-100
            text-gray-700
            left-0
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
            bg-gray-100
            text-gray-700
            right-0
          "
        />
      </template>
      <template slot="dot"> hey </template>
    </agile>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageNames: [
        "Introducing-The-WideAnt4-5G-by-WirEng-1024x373.jpg",
        "Introducing-WirEng-1-1024x373.jpg",
        "Introducing-WirEng-2-1024x373.jpg",
        "Introducing-WirEng-3-1024x373.jpg",
        "Introducing-WirEng-4-1024x373.jpg",
        "Introducing-WirEng-5-1024x373.jpg",
      ],
      agileSettings: {
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 1000,
      },
    };
  },
};
</script>
<style scoped>
.agile__dot {
  @apply m-3;
}

.agile__dot button {
  @apply bg-gray-400;
  @apply opacity-25;
  @apply h-3;
  @apply w-6;
}

.agile__dot--current button {
  @apply bg-gray-700;
}
</style>