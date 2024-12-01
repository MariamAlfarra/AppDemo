<script setup>
definePageMeta({
    middleware: "auth"
});

import { useMainStore } from "~/stores/main";
const mainStore = useMainStore();
const router = useRouter();
const { logout, user } = toRefs(mainStore);
</script>
<template>
    <div class="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-6">
        <!-- Left Card -->
        <left-card class="w-1/3"></left-card>

        <!-- Right Card -->
        <right-card class="w-2/3"></right-card>
        <!-- <h1>Welcome to the Home Page {{ user?.name }}</h1>
        <lion-button @click="logout(router)">
            Logout
        </lion-button> -->
    </div>
</template>
