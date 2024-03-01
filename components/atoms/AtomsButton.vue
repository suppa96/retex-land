
<script setup lang="ts">
import type { AtomsButtonProps } from './AtomsButton.props'
const props = defineProps<AtomsButtonProps>()
defineEmits<{
  (e: 'click'): void
}>()

const classes = computed(() => props.type === 'primary' ? 'text-white bg-primary': 'bg-white text-primary')
</script>
<template>
    <button @click="$emit('click')" class="w-full py-4 rounded-[100px] font-bold tracking-wider" :class="classes">{{ label }}</button>
</template>