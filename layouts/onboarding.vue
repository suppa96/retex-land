<template>
  <div class="h-[calc(100dvh)] relative overflow-hidden">
    <AtomsBackgrounds bg-type="onboarding" />
    <div class="min-h-[calc(100dvh)]">
      <OrganismsHeader type="transparent" />
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
