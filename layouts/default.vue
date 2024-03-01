<template>
  <div class="h-screen relative overflow-hidden">
    <div class="absolute -z-10">
      <div
        class="welcome-bg w-[1326px] h-[1578px] absolute -top-[363px] -left-[448px]"
      ></div>
      <div
        class="w-screen h-screen bg-gradient-to-t absolute from-black to-transparent"
      ></div>
    </div>
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
width: 1326px height: 1578px top: -363px left: -448px
