<script setup lang="ts">
import type { OrganismsHeaderProps } from './OrganismsHeader.props'
defineProps<OrganismsHeaderProps>()
</script>
<template>
    <div class=" py-6 px-6 flex justify-between items-center" :class="[type === 'transparent' ? 'bg-transparent' : 'bg-black bg-opacity-50']">
        <IconsNotification v-if="type !== 'transparent'" />
        <IconsMenu v-if="type !== 'transparent'"/>
        <IconsClose v-else />
    </div>
</template>