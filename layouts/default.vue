<script setup lang="ts">
const yScroll = ref(23)
</script>
<template>
  <div class="overlay fixed top-0 w-full h-[100px]" v-show="yScroll > 0"></div>
  <OrganismsHeader type="standard" class="fixed top-0 w-full" />
  <slot />
</template>
