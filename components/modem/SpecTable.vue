<template>
  <div class="">
    <h2 class="font-bold mb-2">Specification</h2>
    <div
      class="overflow-x-scroll overflow-y-hidden relative"
      :class="{ 'h-48': !isTableExpanded }"
    >
      <table class="">
        <tbody>
          <tr v-for="data in file" :key="data.id">
            <td
              class="pl-1 py-2 sm:p-3 align-top"
              :class="
                data[1] === ''
                  ? 'bg-gray-500 text-gray-50'
                  : 'text-gray-700 border-t border-b border-gray-200'
              "
              :colspan="data[1] === '' ? 2 : 1"
            >
              {{ data[0] }}
            </td>
            <td
              :class="{
                'py-2 pl-2 sm:p-3 align-top border-t border-b border-gray-200':
                  data[1] !== '',
              }"
            >
              <p :class="{ 'lg:w-3/4': data[1] !== '' }">
                {{ data[1] }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        v-show="isTableExpanded == false"
        class="
          h-4
          w-full
          opacity-50
          bg-gradient-to-b
          from-gray-50
          to-gray-400
          absolute
          bottom-0
          z-10
        "
      ></div>
    </div>
    <button
      @click="isTableExpanded = !isTableExpanded"
      class="w-full h-14 text-gray-500 hover:text-gray-800 border"
    >
      <span v-show="!isTableExpanded">Expand</span>
      <span v-show="isTableExpanded">Minimize</span>
      table
    </button>
  </div>
</template>
<script>
export default {
  props: ["file"],
  data() {
    return {
      isTableExpanded: false,
    };
  },
};
</script>