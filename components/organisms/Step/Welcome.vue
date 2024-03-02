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
  <div class="grid-standard flex flex-col items-center pt-[80px]">
    <div class="flex flex-col items-center mt-8 mb-14 text-white">
      <IconsLogo class="w-full" />
      <div class="infos mt-20">
        <h4 class="text-title-h4 text-center font-semibold">{{ `${welcome} ${user?.name} ` }}</h4>
        <p class="text-paragraph-info text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          ratione debitis quis est labore voluptatibus! Eaque cupiditate minima
        </p>
      </div>
    </div>
    <AtomsButton
      :to="'/onboarding'"
      class="w-full px-4"
      @click="$emit('updateInfo')"
      label="UPDATE GIORGIA"
      type="secondary"
    />
    <AtomsLottie avatar="Fausto" />
  </div>
</template>

<style scoped></style>
