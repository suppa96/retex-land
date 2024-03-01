<script setup lang="ts">
definePageMeta({
  layout: "onboarding",
});

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
  <div class="welcome-page grid-container">
    <OrganismsScrollStepper
      class="col-span-full"
      v-bind="{ steps, currentStep }"
      @next-step="toNext"
      @prev-step="toPrev"
    >
      <template #step="step">
        <div class="item w-full">
          <pre>{{ step }}</pre>
        </div>
      </template>
    </OrganismsScrollStepper>
  </div>
</template>

<style scoped></style>
