<script setup lang="ts">
const { randomQuestion } = useQuestionsSetting()
console.log('randomQuestion', randomQuestion.value)
</script>
<template>
    <div class="chatbot">
        <pre>{{ randomQuestion }}</pre>
    </div>
</template>