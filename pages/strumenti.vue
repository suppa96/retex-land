<script setup lang="ts">
const { addUserResponse, enableTexting, userInput, continueConversation } = useConversation()
const isStartConversation = ref(true)
const submit = () => {
    if(isStartConversation.value){
        addUserResponse()
        isStartConversation.value = false
    }else {
        continueConversation()
    }
}
</script>

<template>
    <div class="instruments grid-standard pt-[90px] pb-[300px]">
        <h1 class="block col-span-full text-white text-titleChat font-semibold mb-4">Strumenti</h1>
        <OrganismsQuestions class="col-span-full"/>

        <div class="input-user mt-5 col-span-full flex justify-end">
            <input v-model="userInput" v-if="enableTexting" @keypress.enter="submit" placeholder="Scrivi qui..." class="py-2 px-4 rounded-l-box w-2/3 rounded-tr-box" />
        </div>
        <AtomsLottie avatar="Zana" />
    </div>
</template>