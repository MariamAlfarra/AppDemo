<script setup>
definePageMeta({
    middleware: "auth"
});

import { useMainStore } from "~/stores/main";
const mainStore = useMainStore();
const router = useRouter();
const { logout, user } = toRefs(mainStore);

const activeTab = ref(0);
const tabs = ref([
    { title: "Home",content:"", icon: "i-heroicons-home" },
    { title: "Work", content:"", icon: "i-heroicons-briefcase" },
    { title: "Reviews", content:"", icon: "i-heroicons-star" },
    { title: "Logout", content:"", icon: "i-heroicons-logout" }
]);

</script>
<template>
    <div class="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-6">
        <div class="flex w-full max-w-5xl space-x-6">
            <left-card></left-card>
            <div class="flex flex-1 flex-col space-y-4">
                <app-tabs v-model="activeTab" :tabs="tabs"></app-tabs>
                <right-card :active-tab="activeTab" :tabs="tabs" class="flex-[1.5]"></right-card>
            </div>
        </div>
        <app-footer></app-footer>
        <!-- <h1>Welcome to the Home Page {{ user?.name }}</h1>
        <lion-button @click="logout(router)">
            Logout
        </lion-button> -->
    </div>
</template>
