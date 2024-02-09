<template>
    <div>
        <AppNav>
            <!-- <LogoutButton v-if="isAuthenticated" /> -->
            <UserMenu v-if="isAuthenticated" />
            <LogInButton v-else />
        </AppNav>
        <slot></slot>
    </div>
</template>
<script setup>
const {$authStore} = useNuxtApp();
const isAuthenticated = ref($authStore.isAuthenticated);
</script>