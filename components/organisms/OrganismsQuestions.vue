<script setup lang="ts">
const store = useQuestionsSettings()
const { conversation, initConversation } = useConversation()

const { questions, randomQuestion } = storeToRefs(store)
const historyQuestions = ref([])
onMounted(async () => {
    initConversation()
})
</script>
<template>
    <div class="questions flex flex-col gap-y-4" v-if="conversation && conversation.length > 0">
        <div v-for="message in conversation" :key="message.label">
            <AtomsQuestion v-bind="message" />
        </div>
    </div>
</template>