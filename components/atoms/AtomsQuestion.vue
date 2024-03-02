
<script setup lang="ts">
import type { AtomsQuestionProps } from './AtomsQuestion.props'
const props = withDefaults(defineProps<AtomsQuestionProps>(), {
    typing: false
})
const classes = computed(() => props.type === 'user' ? 'bg-white rounded-l-box rounded-tr-box' : !props.typing ? 'bg-lightBlue rounded-r-box rounded-tl-box': 'bg-white rounded-r-box rounded-tl-box')
</script>
<template>
    <div class="question-wrapper w-full flex" :class="[type === 'user' ? 'justify-end my-3' : 'justify-start']">
        <div class="question py-2 px-4" :class="classes">
            <p class="font-[14px]" :class="[{ 'text-gray-800 italic': typing}]">{{ !typing ? label : 'Sto scrivendo...' }}</p>
            <p v-if="file">
                <a :href="file.path" download class="py-1 px-2 flex items-center font-bold bg-lightYellow text-black uppercase text-[14px] tracking-wider">
                    <span class="inline-block">{{ file.label }}</span>
                    <span class="inline-block"><IconsDownload class="w-6 h-6 ml-2" /></span>
                </a>
            </p>
        </div>
    </div>
</template>