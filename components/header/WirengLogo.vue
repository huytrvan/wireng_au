<template>
  <NuxtLink to="/" title="Return to Homepage" aria-label="Return to Homepage">
    <img
      src="@/static/images/wireng_logo.png"
      alt="wireng.com.au"
      class="wirenglogo"
    />
  </NuxtLink>
</template>
<style>
/* Phone screen */
.wirenglogo {
  @apply w-48;
}

/* Phone Rotated screen */
.wirenglogo {
  @apply sm:w-52;
}

/* Tablet screen */
.wirenglogo {
  @apply lg:w-auto;
}
</style>