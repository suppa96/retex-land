<script setup lang="ts">
import type { QuestionStepProps } from "./MoleculesQuestionStep.props";

const props = defineProps<QuestionStepProps>();
const emit = defineEmits<{
  (e: "select", payload: string): void;
  (e: "next-step"): void;
  (e: "prev-step"): void;
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
  <div class="question-container mx-4 p-4 flex flex-col gap-8 bg-[#000000B2]">
    <div class="question-text flex flex-col gap-4 text-white">
      <div class="title flex justify-between items-center">
        <h4 class="text-title-h4">
          <slot name="pagination"></slot>
        </h4>
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
            'py-1 px-4': type === 'multi-select',
            'py-3 w-full': type === 'single-choice',
            'bg-white text-black': selectedOption === option,
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
      <button
        @click="$emit('prev-step')"
        :class="
          currentIndex !== 0 ? 'visible' : 'invisible pointer-events-none'
        "
      >
        Back
      </button>
      <button @click="$emit('next-step')">Skip</button>
      <button class="invisible"></button>
    </div>
  </div>
</template>

<style scoped></style>
