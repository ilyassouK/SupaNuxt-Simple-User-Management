<template>
    <div class="container mx-auto my-8">
        <div class="flex justify-between flex justify-between">
            <div><img class="cursor-pointer" src="~/assets/logo.png" width="110px" alt="SupaNuxt logo" @click="useRouter().push('/')"></div>
            <slot></slot>
        </div>
    </div>
</template>