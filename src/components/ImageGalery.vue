<template>
  <div class="image-galery">
    <img class="image-wrapper" :src="images[active]" />
    <button
      v-if="canNavigate"
      class="previous-btn"
      type="button"
      @click="goBack"
    >
      ‹
    </button>
    <button
      v-if="canNavigate"
      class="forward-btn"
      type="button"
      @click="goForward"
    >
      ›
    </button>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import Vue from "vue";

export default Vue.extend({
  name: "ImageGalery",
  props: {
    images: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    canNavigate(): boolean {
      return this.images.length > 1;
    },
    lastIndex(): number {
      return this.images.length - 1;
    },
  },
  methods: {
    goBack(): void {
      this.active = this.active <= 0 ? this.lastIndex : this.active - 1;
    },
    goForward(): void {
      this.active = this.active >= this.lastIndex ? 0 : this.active + 1;
    },
  },
  watch: {
    images() {
      this.active = 0;
    },
  },
});
</script>

<style scoped>
button {
  border-radius: 50%;
  font-size: 26px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
}

button.previous-btn {
  left: 0;
}

button.forward-btn {
  right: 0;
}

.image-galery {
  display: flex;
  justify-content: center;
  position: relative;
}
</style>
