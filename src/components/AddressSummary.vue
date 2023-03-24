<template>
  <div class="avatar-summary" :title="text">{{ text }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import type { PropType } from "vue";

import type { AddressData } from "@/types";

/**
 * Displays an address in a single line. If the contaier is too small, it will
 * truncate the text, but the full address can be seen by hovering over the
 * element.
 */
export default Vue.extend({
  name: "AddressSummary",
  props: {
    /**
     * Address data
     */
    address: { type: Object as PropType<AddressData>, required: true },
  },
  computed: {
    text(): string {
      const { city, country, state, street, zipCode } = this.address;
      return [[street, city, state, country].join(", "), zipCode].join(" ");
    },
  },
});
</script>

<style scoped>
.avatar-summary {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
</style>
