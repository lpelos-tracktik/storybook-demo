<template>
  <div class="tt-avatar" :style="style" :title="alt">
    <img v-show="false" :src="src" :alt="alt" @error="useFallback = true" />
    <span v-if="useFallback" class="initial">{{ initial }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import type { StyleValue } from "vue/types/jsx";

/**
 * Displays a cropped small-sized image or the initials of the alternative text
 */
export default Vue.extend({
  name: "TTAvatar",
  props: {
    /**
     * Alternative text
     */
    alt: { type: String, required: true },
    /**
     * Image src
     */
    src: { type: String, default: undefined },
  },
  data() {
    return {
      useFallback: false,
    };
  },
  computed: {
    initial(): string {
      return this.alt[0];
    },
    style(): StyleValue {
      if (!this.src) return {};
      return { backgroundImage: `url(${this.src})`, backgroundSize: "cover" };
    },
  },
  watch: {
    src: {
      immediate: true,
      handler(src: string) {
        this.useFallback = !src;
      },
    },
  },
});
</script>

<style scoped>
.tt-avatar {
  align-items: center;
  background-color: #ccc;
  border-radius: 50%;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;
}

.initial {
  color: white;
  font-size: 20px;
  font-weight: bold;
}
</style>
