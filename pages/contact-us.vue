<template>
  <div class="">
    <div class="text-gray-700 mb-8">
      <h1 class="text-2xl">Contact WirEng</h1>
      <p>
        Feel free to email us your question/ feedback using the form below. We
        will respond to you within 48 hours.
      </p>
    </div>
    <form @submit.prevent="test()" class="">
      <div class="grid grid-cols-2 gap-4 mb-8">
        <div class="col-span-2">
          <label for="topic" class="contact-us__label">Topic *</label>
          <select
            id="topic"
            :value="data.topic"
            @change="updateData([$event, 'topic'])"
            type="text"
            class="contact-us__input p-0"
            required
          >
            <option value="Inquiry about Antennas">
              Inquiry about Antennas
            </option>
            <option value="Suggestions">Suggestions</option>
            <option value="Report Site problem/ typo">
              Report Site problem/ typo
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="">
          <label for="firstName" class="contact-us__label">First Name *</label>
          <input
            id="firstName"
            :value="data.firstName"
            @change="updateData([$event, 'firstName'])"
            type="text"
            class="contact-us__input"
            required
          />
        </div>
        <div class="">
          <label for="lastName" class="contact-us__label">Last Name *</label>
          <input
            id="lastName"
            :value="data.lastName"
            @change="updateData([$event, 'lastName'])"
            type="text"
            class="contact-us__input"
            required
          />
        </div>
        <div class="">
          <label for="email" class="contact-us__label">Email *</label>
          <input
            id="email"
            :value="data.email"
            @change="updateData([$event, 'email'])"
            type="email"
            class="contact-us__input"
            required
          />
        </div>
        <div class="">
          <label for="phone" class="contact-us__label">Phone</label>
          <input
            id="phone"
            :value="data.phone"
            @change="updateData([$event, 'phone'])"
            type="phone"
            class="contact-us__input"
          />
        </div>
        <div class="col-span-2">
          <label for="message" class="contact-us__label">Message *</label>
          <textarea
            id="message"
            :value="data.message"
            @change="updateData([$event, 'message'])"
            type="text"
            class="contact-us__input"
            rows="10"
            required
          ></textarea>
        </div>
      </div>
      <button
        class="
          w-full
          bg-gray-500
          hover:bg-gray-600
          transition-colors
          text-gray-50
          py-3
          rounded-sm
        "
        type="submit"
      >
        Send
      </button>
    </form>
  </div>
</template>
<script>
// import Email from "~/assets/js/smtp.js";
import { mapActions } from "vuex";
export default {
  mounted() {},
  computed: {
    data: function () {
      return this.$store.state.email.storageData;
    },
  },
  methods: {
    // test: function () {
    //   Email.send({
    //     SecureToken: "e212e9b1-25bf-48b9-b3d9-680648126dff",
    //     To: "huy.at.welc.group@gmail.com",
    //     From: "huy.at.welc.group@gmail.com",
    //     Subject: "Testing Testing",
    //     Body: "I have something amazing to send you. Do you want to see?",
    //   }).then((message) => alert(message));
    // },
    ...mapActions("email", ["updateData"]),
    // phoneInBody: function () {
    //   if (this.phone) {
    //     return this.phone;
    //   }
    //   return "N/A";
    // },
    // getHeaderMessage: function () {
    //   let string = `
    //         ${this.topic} from Mr/Mrs ${this.firstName} ${this.lastName}`;
    //   string = string.replace(/[\s]/g, "");
    //   return string;
    // },
    // getBodyMessage: function () {
    //   let string = `
    //         First Name: ${this.firstName}\n
    //         Last Name: ${this.lastName}\n
    //         Phone: ${this.phoneInBody()}\n
    //         Message:\n
    //         ${this.message}`;
    //   string = string.replace(/[\s]/g, "");
    //   return string;
    // },
  },
};
</script>
<style>
.contact-us__input {
  @apply p-3;
  @apply w-full;
  @apply border border-gray-300;
  @apply bg-gray-50;
  @apply focus:bg-white;
  @apply focus:border-blue-300;
  @apply focus:outline-white;
  @apply rounded-sm;
  @apply focus:shadow-sm;
}
.contact-us__label {
  @apply block;
  @apply mb-1;
  @apply rounded-sm;
}
</style>