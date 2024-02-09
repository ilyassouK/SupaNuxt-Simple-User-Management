

<template>
  <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
    <UAvatar size="md" src="https://dragonball.guru/wp-content/uploads/2021/03/goku-profile-e1616173641804-400x400.png" />

    <template #account="{ item }">
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #appearance>
      <AppearanceMode />
    </template>

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>
      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>
</template>
<script setup>
const {$authStore} = useNuxtApp();
const items = ref([
  [{
    label: $authStore.user?.email,
    slot: 'account',
    disabled: true
  }], 
  [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth',
    to:'/settings'
  }], 
  [{
    label: 'Dashboard',
    icon: 'i-heroicons-book-open',
    to:'/dashboard'
  }, {
    label: 'Profile',
    icon: 'i-heroicons-megaphone',
    to:'/profile'
  }],
  [{
    label: 'Dark Mode',
    slot:'appearance'
  }],
  [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click:$authStore.logOut
  }]
])
</script>
