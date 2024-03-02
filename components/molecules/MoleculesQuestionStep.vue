<script setup lang="ts">
import type { QuestionStepProps } from "./MoleculesQuestionStep.props";

const props = defineProps<QuestionStepProps>();
const emit = defineEmits<{
  (e: "select", payload: string): void;
}>();

const selection = ref(props.selectedOption ?? "");

const handleSelect = (option: string) => {
  if (props.type === "multi-select") {
    selection.value += option;
    emit("select", selection.value);
  } else if (props.type === "single-choice") {
    selection.value = option;
    emit("select", selection.value);
  }
};
</script>
<template>
  <div class="question-container mx-4 p-4 flex flex-col gap-8">
    <div class="question-text flex flex-col gap-4 text-white">
      <div class="title flex justify-between items-center">
        <slot name="pagination" class="text-title-h4"></slot>
      </div>
      <p class="text-paragraph-info">{{ question }}</p>
      <div
        class="options"
        :class="{
          'flex flex-wrap gap-3': type === 'multi-select',
          'flex flex-col gap-4': type === 'single-choice',
        }"
      >
        <button
          v-for="option in options"
          :key="option"
          class="option bg-transparent text-white border border-white flex justify-center items-center transition-colors rounded-full"
          :class="{
            'py-1': type === 'multi-select',
            'py-3 w-full': type === 'single-choice',
            'bg-white': selectedOption === option,
          }"
          @click="handleSelect(option)"
        >
          {{ option }}
        </button>
      </div>
    </div>

    <div
      class="question-button flex justify-between text-[rgba(124,_149,_215,_1)] text-paragraph-info font-bold"
    >
      <button>Back</button>
      <button>Skip</button>
      <button class="invisible"></button>
    </div>
  </div>
</template>

<style scoped></style>
