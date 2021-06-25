<template>
  <div class="">
    <div class="mb-8 text-gray-700 ml-1">
      <h2 id="modem-by-brand" class="text-xl mb-1">
        Select your hotspot modem
      </h2>
      <p>
        We will help you find the right products to boost your 5G/4G/3G signal
      </p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <NuxtLink
        :to="`modem/${brand.toLowerCase()}`"
        v-for="(image, brand) in images"
        :key="brand.id"
        class="block shadow hover:shadow-lg border rounded-sm"
      >
        <img
          :src="require(`@/static/images/modem-brand-logos/${image}`)"
          :alt="brand"
          class="h-24 mx-auto"
        />
        <h3 class="text-center">{{ brand }}</h3>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: {
        Alcatel: "alcatel.webp",
        Asus: "asus.png",
        AVM: "avm.png",
        Comset: "comset.jpg",
        // "D-Link": "d-link.png",
        "GL-inet": "gl-inet.png",
        Huawei: "huawei.jpg",
        Kuwfi: "kuwfi.png",
        NetComm: "netcomm.jpg",
        NetGear: "netgear.png",
        Optus: "optus.png",
        Telstra: "telstra.png",
        Tenda: "tenda.webp",
        "Tp-Link": "tplink.jpg",
        VodaFone: "vodafone.png",
        // Wavlink: "wavlink.jpg",
        // ZTE: "zte.jpg",
      },
    };
  },
};
</script>