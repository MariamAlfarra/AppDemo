<script setup>
definePageMeta({
    middleware: "auth"
});

import { useMainStore } from "~/stores/main";
const mainStore = useMainStore();
const { logout, user, activeTab } = toRefs(mainStore);

const tabs = ref([
    { title: "Home",content:"About Me", icon: "i-heroicons-home" },
    { title: "Work", content:"Relevant Work ", icon: "i-heroicons-briefcase" },
    { title: "Reviews", content:"Given reviews", icon: "i-heroicons-star" }
]);

</script>
<template>
    <div class="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-pink-400/80 to-orange-400/80  p-6">
        <div class="flex w-full space-x-6">
            <left-card></left-card>
            <div class="flex flex-1 flex-col space-y-4">
                <app-tabs v-model="activeTab" :tabs="tabs"></app-tabs>
                <right-card :tabs="tabs" class="flex-[1.5]"></right-card>
            </div>
            <logout-modal>
            </logout-modal>
        </div>
        <app-footer></app-footer>
    </div>
</template>
