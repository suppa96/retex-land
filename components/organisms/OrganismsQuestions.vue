<script setup lang="ts">
const store = useQuestionsSettings();
const { questions, randomQuestion } = storeToRefs(store)
const historyQuestions = ref([])
</script>
<template>
    <div class="questions flex flex-col gap-y-4">
        <AtomsQuestion label="Ciao sono chatbot" type="chatbot" />
        <AtomsQuestion label="Ciao sono user" type="user" />
        <AtomsQuestion label="Ciao sono chatbot" type="chatbot" />
        <AtomsQuestion label="Ciao sono user" type="user" />
        <AtomsQuestion label="Ciao sono chatbot" type="chatbot" />
        <AtomsQuestion label="Ciao sono chatbot" type="chatbot" />
        <AtomsQuestion label="Ciao sono user" type="user" />
        <AtomsQuestion label="Ciao sono chatbot" type="chatbot" />
        <AtomsQuestion label="Ciao sono user" type="user" />
        <AtomsQuestion label="Ciao sono chatbot" type="chatbot" typing />
</div>
</template>