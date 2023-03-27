<template>
  <div class="loading-indicator">
    <div class="lds-facebook" :class="{ dark }">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

/**
 * Displays an animated "loading" indicator.
 */
export default Vue.extend({
  name: "LoadingIndicator",
  props: {
    /**
     * Make the indicator dark-colored. Default is light.
     */
    dark: { type: Boolean, default: false },
  },
});
</script>

<style scoped>
.loading-indicator {
  align-items: center;
  display: flex;
  justify-content: center;
}

.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook.dark div {
  background-color: rgba(0, 0, 0, 0.87);
}

.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>
