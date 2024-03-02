<script setup lang="ts">
// @ts-ignore
import { useWindowScroll } from "@vueuse/core"
const { y } = useWindowScroll()
const route = useRoute()
</script>

<template>
  <div class="relative overflow-hidden">
    <div v-if="route.name === 'strumenti'" class="overlay fixed top-0 w-full h-[250px] bg-gradient-to-b from-black duration-300 transition-all opacity-0" :class="[{ '!opacity-100': y > 50}]" />
    <AtomsBackgrounds bg-type="welcome" />
    <div class="min-h-[calc(100dvh)]">
      <OrganismsHeader type="standard" />
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss">
.welcome-bg {
  background-image: url("/backgrounds/bg-welcome.png");
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
}
</style>
