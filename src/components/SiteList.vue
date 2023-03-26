<template>
  <div class="site-list" role="list">
    <div
      v-for="site in sites"
      class="list-item"
      :key="site.id"
      role="listitem"
      @click="$emit('click:item', site)"
    >
      <SiteSummary class="site" :site="site" />
      <div class="chevron">›</div>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import Vue from "vue";

import type { SiteData } from "@/types";
import SiteSummary from "./SiteSummary.vue";

/**
 * List sites
 */
export default Vue.extend({
  name: "SiteList",
  components: { SiteSummary },
  props: {
    /**
     * Sites data
     */
    sites: { type: Array as PropType<SiteData[]>, required: true },
  },
});
</script>

<style scoped>
.chevron {
  color: rgba(0, 0, 0, 0.54);
  font-size: 2rem;
  line-height: 1em;
  padding: 0 1rem;
}

.list-item {
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  cursor: pointer;
  display: flex;
  padding: 0.5rem 0;
}

.site {
  flex: 1;
}
</style>
