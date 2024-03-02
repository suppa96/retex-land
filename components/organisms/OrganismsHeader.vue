<script setup lang="ts">
import type { OrganismsHeaderProps } from "./OrganismsHeader.props";
defineProps<OrganismsHeaderProps>();
</script>
<template>
  <div
    class="pt-6 pb-4 px-6 flex justify-between items-center fixed top-0 w-full z-[99999]"
    :class="[
      type === 'transparent' ? 'bg-transparent' : 'bg-black bg-opacity-50',
    ]"
  >
    <IconsNotification v-if="type !== 'transparent'" />
    <IconsMenu v-if="type !== 'transparent'" />
    <div class="flex justify-end w-full" v-else>
      <NuxtLink to="/">
        <IconsClose />
      </NuxtLink>
    </div>
  </div>
</template>
