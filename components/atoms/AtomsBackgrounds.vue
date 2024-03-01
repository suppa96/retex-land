<script setup lang="ts">
defineProps<{
  bgType: "welcome" | "onboarding";
}>();
</script>
<template>
  <div class="absolute -z-10">
    <div
      class="absolute"
      :class="{
        'welcome-bg': bgType === 'welcome',
        'onboarding-bg': bgType === 'onboarding',
      }"
      x
    ></div>
    <div
      class="w-screen h-screen absolute bg-gradient-to-t"
      :class="
        bgType === 'welcome'
          ? 'from-black to-transparent'
          : 'from-transparent to-black'
      "
    ></div>
  </div>
</template>

<style scoped lang="scss">
.welcome-bg {
  @apply w-[1326px] h-[1578px] -top-[363px] -left-[448px];
  background-image: url("/backgrounds/bg-welcome.png");
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
}

.onboarding-bg {
  background-image: url("/backgrounds/bg-onboarding.png");
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
}
</style>
