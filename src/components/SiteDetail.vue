<template>
  <div class="site-detail">
    <div class="summary-wrapper">
      <div class="chevron" @click="$emit('click:back')">‹</div>
      <SiteSummary :site="site" />
    </div>
    <ImageGalery :images="site.images" />
    <div class="contact list-item">
      <div class="contact--name text-primary">{{ contactName }}</div>
      <div class="contact--job-title text-secondary">
        {{ contact.jobTitle }}
      </div>
    </div>
    <div class="phone list-item">
      {{ contact.phoneNumber }}
    </div>
    <div class="email list-item">
      {{ contact.email }}
    </div>
    <div class="address list-item">
      <AddressSummary :address="contact.address" />
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import Vue from "vue";

import type { ContactData, SiteData } from "@/types";
import AddressSummary from "./AddressSummary.vue";
import ImageGalery from "./ImageGalery.vue";
import SiteSummary from "./SiteSummary.vue";

export default Vue.extend({
  name: "SiteDetail",
  components: { AddressSummary, ImageGalery, SiteSummary },
  props: {
    site: {
      type: Object as PropType<SiteData>,
      required: true,
    },
  },
  computed: {
    contact(): ContactData {
      return this.site.contacts.main;
    },
    contactName(): string {
      const { firstName, lastName } = this.contact;
      return [firstName, lastName].join(" ");
    },
  },
});
</script>

<style scoped>
.chevron {
  color: rgba(0, 0, 0, 0.54);
  cursor: pointer;
  font-size: 2rem;
  line-height: 1em;
  padding: 0 1rem;
}

.list-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 40px;
  padding: 1rem;
}

.text-primary {
  color: rgba(0, 0, 0, 0.87);
}

.text-secondary {
  color: rgba(0, 0, 0, 0.54);
}

.summary-wrapper {
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  padding: 0.5rem 0;
}
</style>
