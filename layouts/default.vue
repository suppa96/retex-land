<script setup lang="ts">
// @ts-ignore
import { useWindowScroll } from "@vueuse/core"
const { y } = useWindowScroll()
</script>
<template>
  <div class="overlay fixed top-0 w-full h-[200px] bg-gradient-to-b from-black duration-200 transition-all opacity-0" :class="[{ '!opacity-100': y > 100}]" />
  <OrganismsHeader type="standard" class="fixed top-0 w-full z-10" />
  <slot />
</template>
