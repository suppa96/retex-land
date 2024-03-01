<script setup lang="ts">
const { setQuestions } = await useQuestionsSetting()
await setQuestions()
</script>
<template>
  <main class="h-screen w-screen m-0 p-0 flex flex-col justify-between">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
