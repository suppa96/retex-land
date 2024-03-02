<script setup lang="ts">
definePageMeta({
  layout: "onboarding",
});

// const questions: QuestionProps[] = [{
//     type: "multi-select" | "single-choice";
//   question: 'LOREMI IPSUM CACCA PUPU';
//   step: 'personal';
//   options: string[];
//   optionalCta: {
//     to: string;
//     label: string;
//     icon?: string;
//   };
// }, {

// }]

const steps = [
  { name: "welcome" },
  { name: "personal" },
  { name: "passions" },
  { name: "skills" },
];
const currentStep = computed<string>(() => steps[currentIndex.value].name);
const currentIndex = ref(0);

const toNext = () => {
  currentIndex.value++;
};
const toPrev = () => {
  currentIndex.value--;
};
</script>
<template>
  <div class="welcome-page">
    <h3 class="text-title-h3 text-white ml-4">Il tuo Retex Passport</h3>
    <!-- <OrganismsScrollStepper
      class="w-full"
      v-bind="{ steps, currentStep }"
      @next-step="toNext"
      @prev-step="toPrev"
    >
      <template #step="step">
        <MoleculesQuestion> </MoleculesQuestion>
      </template>
    </OrganismsScrollStepper> -->
  </div>
</template>

<style scoped></style>
