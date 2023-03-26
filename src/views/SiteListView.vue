<template>
  <div v-if="loading">Loading...</div>
  <SiteList v-else :sites="sites" @click:item="goToSite($event)" />
</template>

<script lang="ts">
import Vue from "vue";

import type { SiteData } from "@/types";
import ApiService from "@/services/api-service";
import SiteList from "@/components/SiteList.vue";

export default Vue.extend({
  name: "SiteListView",
  components: { SiteList },
  data() {
    return {
      api: new ApiService(),
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
    goToSite(event: SiteData): void {
      this.$router.push(`/site/${event.id}`);
    },
  },
});
</script>
