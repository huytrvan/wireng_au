<template>
  <div class="contact">
    <a href="#" class="contact__email">
      <span class="contact__email is-text">Email: sales@wireng.com</span>
    </a>
    <a href="#" class="contact__tel">
      <span class="contact__tel is-text">Whatsapp: +123456789</span>
    </a>
  </div>
</template>
<style>
/* Mobile screen */
.contact {
  @apply flex justify-start;
  @apply hidden lg:block;
}
.contact__email,
.contact__tel {
  @apply w-full;
  @apply m-2;
  @apply block;
  @apply xl:inline;
}
.contact__email.is-text,
.contact__tel.is-text {
  @apply font-bold text-xl;
}
</style>