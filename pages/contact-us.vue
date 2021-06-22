<template>
  <div class="">
    <div class="text-gray-700 mb-8">
      <h1 class="text-2xl">Contact WirEng</h1>
      <p>
        Feel free to email us your question/ feedback using the form below. We
        will respond to you within 48 hours.
      </p>
    </div>
    <form @submit.prevent="send()" class="">
      <div class="grid grid-cols-2 gap-6 mb-8">
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
            <option disabled selected value="">---</option>
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
import Email from "~/assets/js/smtp.js";
import { mapActions } from "vuex";
export default {
  mounted() {},
  computed: {
    data: function () {
      return this.$store.state.email.storageData;
    },
  },
  methods: {
    ...mapActions("email", ["updateData", "deleteData"]),
    phoneInBody: function () {
      if (this.phone) {
        return this.phone;
      }
      return "N/A";
    },
    getHeaderMessage: function () {
      let string = `
            ${this.data.topic} from Mr/Mrs ${this.data.firstName} ${this.data.lastName}`;
      string = string.replace(/[\s]/g, " ");
      return string;
    },
    getBodyMessage: function () {
      let string = `
            First Name:${this.data.firstName},
            Last Name:${this.data.lastName},
            Phone:${this.phoneInBody()},
            Message:
            ${this.data.message}`;
      string = string.replace(/[\s]/g, " ");
      return string;
    },
    send: function () {
      Email.send({
        SecureToken: "e212e9b1-25bf-48b9-b3d9-680648126dff",
        To: "wirengin@gmail.com",
        From: "huy.at.welc.group@gmail.com",
        Subject: this.getHeaderMessage(),
        Body: this.getBodyMessage(),
      }).then((message) => {
        if (message === "OK") {
          alert(
            "Thank for sending us your message.\nOur Customer Support team will reply to you within 48 hours."
          );
          this.deleteData();
        } else {
          alert(
            `Something went wrong while sending your email.\nPlease check your internet connection and retry sending.\nSorry for the inconvenience.`
          );
        }
      });
    },
  },
  head: {
    title: "Contact WirEng",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Feel free to email us your question/ feedback using the form below. We will respond to you within 48 hours.",
      },
    ],
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
  @apply appearance-none;
}
.contact-us__label {
  @apply block;
  @apply mb-1;
  @apply rounded-sm;
}
</style>