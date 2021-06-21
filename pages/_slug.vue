<template>
  <div class="">
    <BreadCrumb class="mb-4 sm:mb-8" />
    <div class="grid grid-cols-1 md:grid-cols-2 mb-14">
      <ProductGallery
        :folderName="folderName"
        :imageCount="antennaData[0][1]"
        class="order-2 md:order-1"
      />
      <ProductInfo
        class="order-1 md:order-2 mb-4 sm:mb-0"
        :title="data[0][0]"
      />
    </div>
    <div class="max-w-[52rem]">
      <div class="mb-8">
        <h2 class="font-bold text-gray-700 mb-1">Description</h2>
        <p
          class="mb-3.5 leading-7"
          v-for="paragraph in data[1]"
          :key="paragraph.id"
        >
          {{ paragraph }}
        </p>
      </div>
      <div class="">
        <h2 class="font-bold text-gray-700 mb-1">Main Features and Benefits</h2>
        <ul class="list-disc pl-3">
          <li
            v-for="paragraph in data[2]"
            :key="paragraph.id"
            class="mb-3.5 leading-7"
          >
            {{ paragraph }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: this.$route.path,
    };
  },
  computed: {
    urlPaths: function () {
      /* Return array of url paths */
      let urlPaths = this.url.slice(1); // ignore first '/'
      urlPaths = urlPaths.split("/");
      return urlPaths;
    },
    antennaModemList: function () {
      // Return ["Antenna Model", "Modem Model"]
      let antennaModemList = this.urlPaths[0].split("-for-");

      return antennaModemList;
    },
    antennaData: function () {
      return require(`@/static/json/antenna/${this.antennaModemList[0]}.json`);
    },
    modemData: function () {
      if (this.antennaModemList[1] === "hotspot-modems") {
        return [
          ["Test", ""],
          ["Brand", "Hotspot"],
          ["Model", "Modems"],
        ];
      }
      return require(`@/static/json/modem/${this.antennaModemList[1]}.json`);
    },
    data: function () {
      let modemBrand = this.modemData[1][1];
      let modemModel = this.modemData[2][1];
      let modem = `${modemBrand} ${modemModel}`;
      let data = this.antennaData.slice(1); // ignore ImageCount
      data = data.map((value) => {
        value = value[1];
        //   Subtitute '{modem}' with modemModel
        value = value.replace(/({.*?})/g, modem);

        // To render new paragraph in v-for
        value = value.split("\n");
        return value;
      });

      return data;
    },
    folderName: function () {
      return `antenna-images/${this.antennaModemList[0]}`;
    },
  },
  head() {
    return {
      title: `${this.data[0][0]}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Buy the newest ${this.data[3][0]} antenna from WirEng® or find the antennas for your 5G/4G/3G hotspots/ modems`,
        },
      ],
    };
  },
};
</script>