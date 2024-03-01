<script setup lang="ts">
const { setQuestions } = await useQuestionsSettings()
await setQuestions()
</script>
<template>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
