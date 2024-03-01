<script setup lang="ts">
import type { WelcomeProps } from "./Welcome.props";

const props = defineProps<WelcomeProps>();

const welcome = computed<string>(() => {
  switch (props.user.gender) {
    case "m":
      return "Benvenuto";
    case "f":
      return "Benvenuta";
    case "nb":
      return "Benvenut*";
    default:
      return "Benvenut*";
  }
});
</script>
<template>
  <div class="w-full flex flex-col items-center">
    <div class="flex flex-col mx-[30px] items-center text-white">
      <h4 class="text-title-h4">{{ `${welcome} ${user?.name} ` }}</h4>
      <p class="text-paragraph-info text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus! Eaque cupiditate minima
      </p>
    </div>
    <AtomsButton
      :to="'/onboarding'"
      class="w-full px-4"
      @click="$emit('updateInfo')"
      label="UPDATE GIORGIA"
      type="secondary"
    />
    <pre class="w-full px-4">{{ user }}</pre>
  </div>
</template>

<style scoped></style>
