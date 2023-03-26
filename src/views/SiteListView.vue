<template>
  <div v-if="loading">Loading...</div>
  <SiteList v-else :sites="sites" />
</template>

<script lang="ts">
import Vue from "vue";

import type { SiteData } from "@/types";
import SiteList from "@/components/SiteList.vue";
import Api from "@/services/api-service";

export default Vue.extend({
  name: "SiteListView",
  components: { SiteList },
  data() {
    return {
      api: new Api(),
      loading: true,
      sites: [] as SiteData[],
    };
  },
  created() {
    this.fetchSites();
  },
  methods: {
    async fetchSites(): Promise<void> {
      this.loading = true;
      this.sites = await this.api.getSiteList({ limit: 25 });
      this.loading = false;
    },
  },
});
</script>
