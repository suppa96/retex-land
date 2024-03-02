<script setup lang="ts">
const { addUserResponse, enableTexting } = useConversation()

const inputUser = ref('')

const submit = () => {
    addUserResponse(inputUser.value)
}
</script>

<template>
    <div class="instruments grid-standard bg-black pt-[80px] pb-[300px]">
        <h1 class="block col-span-full text-white text-titleChat font-semibold mb-4">Strumenti</h1>
        <OrganismsQuestions class="col-span-full"/>

        <div class="input-user mt-5 col-span-full flex justify-end">
            <input v-model="inputUser" v-if="enableTexting" @key.press="submit" placeholder="Scrivi qui..." class="py-2 px-4 rounded-l-box w-full rounded-tr-box" />
        </div>
    </div>
</template>