<template>
  <div class="site-summary">
    <TTAvatar :alt="site.title" :src="site.images[0]" />

    <div class="content">
      <strong class="title">{{ site.title }}</strong>
      <AddressSummary :address="site.address" />
      <div class="contact-name">{{ site.contact.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import type { PropType } from "vue";

import type { SiteData } from "@/types";
import AddressSummary from "./AddressSummary.vue";
import TTAvatar from "./TTAvatar.vue";

/**
 * Displays a Site's basic info in a compact way
 */
export default Vue.extend({
  name: "SiteSummary",
  components: { AddressSummary, TTAvatar },
  props: {
    /**
     * Site data
     */
    site: { type: Object as PropType<SiteData>, required: true },
  },
});
</script>

<style scoped>
.content {
  color: rgba(0, 0, 0, 0.54);
  flex: 1;
  margin-left: 1rem;
  width: 100%;
}

.site-summary {
  align-items: center;
  display: flex;
  padding: 0 1rem;
  width: 100%;
}

.title {
  color: rgba(0, 0, 0, 0.87);
}
</style>
