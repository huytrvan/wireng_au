<template>
  <div class="grid sm:grid-cols-2 gap-8">
    <div class="">
      <div class="text-gray-700 mb-4 ml-1">
        <h2 class="text-xl">Question? Let us help.</h2>
        <p class="">You can contact us by clicking any icon below:</p>
      </div>
      <div class="">
        <NuxtLink to="/contact-us" class="contact-about__icon-link">
          <IconEmail class="contact-about__icon-icon" />
          <p class="contact-about__icon-text">EMAIL</p>
        </NuxtLink>
      </div>
    </div>
    <div class="max-w-[32rem]">
      <h2 class="text-gray-700 text-xl mb-2">About Us</h2>
      <p class="mb-2">
        WirEng is commited to make fast and stable cellular network accessible
        to everyone by providing industry-leading ultra-high gain and ultra-wide
        band antenna solutions.
      </p>
      <p class="">
        <NuxtLink to="/" class="text-blue-500 hover:underline"
          >Wireng.com.au</NuxtLink
        >
        is the Australia & New Zealand subsidiary of
        <a href="https://www.wireng.com" class="text-blue-500 hover:underline"
          >WirEng®</a
        >
        USA.
      </p>
    </div>
  </div>
</template>
<style>
.contact-about__icon-icon {
  @apply w-14;
  @apply h-14;
  @apply text-white;
  @apply p-3;
  @apply bg-gray-400 hover:bg-blue-500;
  @apply shadow-sm;
  @apply rounded-sm;
}
.contact-about__icon-link {
  @apply inline-block;
  @apply mr-4;
  @apply text-center;
  @apply hover:text-blue-500;
}
.contact-about__icon-text {
  @apply uppercase;
  @apply text-xs;
  @apply mt-1;
}
</style>
// <NuxtLink to="/" class="contact-about__icon-link">
//           <IconWhatsapp class="contact-about__icon-icon" />
//           <p class="contact-about__icon-text">WHATSAPP</p>
//         </NuxtLink>
// <NuxtLink to="/" class="contact-about__icon-link">
//           <IconPhone class="contact-about__icon-icon" />
//           <p class="contact-about__icon-text">PHONE (USA)</p>
//         </NuxtLink>