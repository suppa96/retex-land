<script setup lang="ts">
import type { QuestionStepProps } from "./MoleculesQuestionStep.props";

const props = defineProps<QuestionStepProps>();
const emit = defineEmits<{
  (e: "select", payload: { id: number; value: string; step: string }): void;
  (e: "next-step"): void;
  (e: "prev-step"): void;
}>();

const selection = ref(props.selectedOption ?? "");

const handleSelect = (option: string) => {
  if (props.type === "multi-select") {
    selection.value += option;
    emit("select", {
      id: props.id,
      value: selection.value,
      step: props.stepName,
    });
  } else if (props.type === "single-choice") {
    selection.value = option;
    emit("select", {
      id: props.id,
      value: selection.value,
      step: props.stepName,
    });
    setTimeout(() => {
      emit("next-step");
    }, 300);
  }
};
</script>
<template>
  <div class="question-container mx-4 p-4 flex flex-col gap-8 bg-[#000000B2]">
    <div class="question-text flex flex-col gap-4 text-white">
      <div class="title flex justify-between items-center">
        <h4 class="text-title-h4 font-semibold">
          <slot name="pagination"></slot>
        </h4>
        <div class="chip-stepname shrink-0" v-if="chip">
          <div :class="chip.color" class="rounded-full px-[6px]">
            <p class="text-small font-bold text-black">
              {{ chip.label }}
            </p>
          </div>
        </div>
      </div>
      <p class="text-paragraph-info text-start">{{ question }}</p>
      <div class="my-2 flex items-center justify-center" v-if="optionalCta">
        <IconsLinkedin class="w-5 h-5 inline mr-2" />
        <p class="text-paragraph-info inline">{{ optionalCta.label }}</p>
      </div>
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
          class="option bg-transparent border font-light border-white flex justify-center items-center transition-colors rounded-full"
          :class="{
            'py-1 px-4': type === 'multi-select',
            'py-3 w-full': type === 'single-choice',
            'bg-primary text-white': selectedOption === option,
          }"
          @click="handleSelect(option)"
        >
          {{ option }}
        </button>
      </div>
    </div>

    <div
      class="question-button flex justify-start text-[rgba(124,_149,_215,_1)] text-paragraph-info font-bold"
      :class="[currentIndex === 0 ? 'justify-center' : 'justify-start']"
    >
      <button
        @click="$emit('prev-step')"
        class="w-[45%] text-start"
        :class="
          currentIndex !== 0 ? 'visible' : 'hidden pointer-events-none'
        "
      >
        Back
      </button>
      <button @click="$emit('next-step')">Skip</button>
    </div>
  </div>
</template>

<style scoped></style>
