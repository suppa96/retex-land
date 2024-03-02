<script setup lang="ts">
import type { ScrollStepperProps } from "./ScrollStepper.props";

const props = defineProps<ScrollStepperProps>();
const emit = defineEmits<{
  (e: "next-step"): void;
  (e: "prev-step"): void;
}>();
</script>
<template>
  <div class="scroll-container w-full">
    <div class="w-full navigation flex justify-between">
      <!-- <button
        class="bg-black prev-button text-white"
        @click="$emit('prev-step')"
        :class="
          steps?.length && currentStep !== steps[0].stepName
            ? 'visible'
            : 'invisible pointer-events-none'
        "
      >
        Prev
      </button> -->
      <!-- <button
        class="bg-black next-button text-white"
        @click="$emit('next-step')"
        :class="
          steps?.length && currentStep !== steps?.at(-1)?.stepName
            ? 'visible'
            : 'invisible pointer-events-none'
        "
      >
        Next
      </button> -->
    </div>
    <div class="w-full relative" v-for="step in steps" :key="step.id">
      <Transition>
        <div class="absolute w-full" v-if="step.stepName === currentStep">
          <slot name="step" v-bind="step"></slot>
        </div>
      </Transition>
    </div>
  </div>
</template>
<style scoped>
.v-enter-active {
  transition: all 0.5s ease;
}
.v-leave-active {
  transition: all 0.5s ease;
  opacity: 0;
}

.v-enter-from {
  transform: translateX(-100%);
}
.v-leave-to {
  transform: translateX(100%);
}
</style>
