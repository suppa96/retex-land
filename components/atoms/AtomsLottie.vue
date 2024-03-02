<script setup lang="ts">
withDefaults(defineProps<{avatar: "Zana" | "Fausto" | "Lombi"}>(), {
    avatar: "Zana"
})
</script>
<template>
    <div class="fixed bottom-0 -right-5">
        <ClientOnly>
            <Vue3Lottie
                :animation-link="`/gif/${avatar}.json`"
                :height="180"
                :width="180"
            />
        </ClientOnly>
    </div>
</template>