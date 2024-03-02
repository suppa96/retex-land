<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'
const { addUserResponse, enableTexting, userInput, continueConversation, messages } = useConversation()
const isStartConversation = ref(true)
const submit = () => {
    if(isStartConversation.value){
        addUserResponse()
        isStartConversation.value = false
    }else {
        continueConversation()
    }
}

const title = ref(null)
const titleIsVisible = useElementVisibility(title) ?? true
watch(messages, () => {
    setTimeout(() => {
        const chatContainer = document.getElementById('chat-container'); 
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 100);
})
</script>

<template>
    <div class="wrapper">
        <div class="overlay fixed top-0 w-full h-[250px] z-10 bg-gradient-to-b from-black duration-300 transition-all opacity-0" :class="[{ '!opacity-100': !titleIsVisible}]" />
        <div class="instruments grid-standard">
            <div id="chat-container" class="container-questions overflow-y-scroll py-2 h-[400px] col-span-full pt-[90px] scroll-smooth">
                <h1 ref="title" class="block col-span-full text-white text-titleChat font-semibold mb-4">Strumenti</h1>
                <OrganismsQuestions class="col-span-full"/>
            </div>
    
            <div class="input-user mt-5 col-span-full flex justify-end duration-300 transition-all">
                <input v-model="userInput" v-show="enableTexting" @keypress.enter="submit" placeholder="Scrivi qui..." class="py-2 px-4 rounded-l-box w-2/3 rounded-tr-box" />
            </div>
            <AtomsLottie avatar="Zana" />
        </div>
    </div>
</template>
<style scoped lang="scss">
.input-user {
    animation: fadeIn 0.5s ease-in-out forwards;
}

/* Animation to fade in new messages */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
</style>