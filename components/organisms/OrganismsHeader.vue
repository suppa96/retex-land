<script setup lang="ts">
import type { OrganismsHeaderProps } from "./OrganismsHeader.props";
defineProps<OrganismsHeaderProps>();
</script>
<template>
  <div
    class="py-6 px-6 flex justify-between items-center"
    :class="[type === 'transparent' ? 'bg-transparent' : 'bg-black opacity-50']"
  >
    <IconsNotification v-if="type !== 'transparent'" />
    <IconsMenu v-if="type !== 'transparent'" />
    <div class="flex justify-end w-full" v-else>
      <NuxtLink class="mx-[35px] mt-8 mb-6" to="/">
        <IconsClose />
      </NuxtLink>
    </div>
  </div>
</template>
