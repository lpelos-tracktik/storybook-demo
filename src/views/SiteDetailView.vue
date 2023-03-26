<template>
  <div v-if="loading">Loading...</div>
  <SiteDetail v-else :site="site" @click:back="goToList" />
</template>

<script lang="ts">
import Vue from "vue";

import type { SiteData } from "@/types";
import ApiService from "@/services/api-service";
import SiteDetail from "@/components/SiteDetail.vue";

export default Vue.extend({
  name: "SiteDetailView",
  components: { SiteDetail },
  data() {
    return {
      api: new ApiService(),
      loading: true,
      site: null as SiteData | null,
    };
  },
  created() {
    this.fetchSite();
  },
  methods: {
    async fetchSite(): Promise<void> {
      this.loading = true;
      this.site = await this.api.getSite(this.$route.params.id);
      this.loading = false;
    },
    goToList(): void {
      this.$router.push(`/`);
    },
  },
});
</script>
