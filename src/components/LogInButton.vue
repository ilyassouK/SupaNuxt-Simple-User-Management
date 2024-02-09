<template>
    <UButton icon="i-heroicons-arrow-left-end-on-rectangle" trailing label="Open" @click="isOpen = true">Join for Free</UButton>
    <UModal class="bg-slate-900" v-model="isOpen" fullscreen>
    <div class="text-center my-20">
        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
        <AuthForm class="mt-10 md:w-4/12 mx-auto" />
    </div>
    </UModal>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>