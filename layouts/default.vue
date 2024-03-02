<template>
  <div class="h-screen relative overflow-hidden">
    <AtomsBackgrounds bg-type="welcome" />
    <div class="min-h-screen">
      <OrganismsHeader type="standard" />
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss">
.welcome-bg {
  background-image: url("/backgrounds/bg-welcome.png");
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
}
</style>
