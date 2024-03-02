<script setup lang="ts">
const { setQuestions } = await useQuestionsSettings()
const { setFiles } = await useFiles()
await setQuestions()
await setFiles()
</script>
<template>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
