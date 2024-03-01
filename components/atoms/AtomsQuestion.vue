
<script setup lang="ts">
import type { AtomsQuestionProps } from './AtomsQuestion.props'
const props = withDefaults(defineProps<AtomsQuestionProps>(), {
    typing: false
})
const classes = computed(() => props.type === 'user' ? 'bg-white rounded-l-box rounded-tr-box' : !props.typing ? 'bg-lightBlue rounded-r-box rounded-tl-box': 'bg-white rounded-r-box rounded-tl-box')
</script>
<template>
    <div class="question-wrapper w-full flex" :class="[type === 'user' ? 'justify-end' : 'justify-start']">
        <div class="question py-2 px-4" :class="classes">
            <p class="font-sm">{{ !typing ? label : 'Sto scrivendo...' }}</p>
        </div>
    </div>
</template>