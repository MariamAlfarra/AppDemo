<script setup>
import {pageInit} from "~/composables/useData";
const mainStore = useMainStore();

useHead({
    title: "Main Page"
});
const { activeTab, user, loading} = toRefs(mainStore);
const tabs = ref([
    { title: "Home", icon: "i-heroicons-home", key:0 },
    { title: "Work", icon: "i-heroicons-briefcase", key:1},
    { title: "Reviews", icon: "i-heroicons-star", key:2 }
]);

onMounted(async () => {
    try {
        loading.value = true;
        user.value = await pageInit();
    } catch {
        console.error("Fetching user data error");
    } finally {
        loading.value = false;
    }
});

</script>
<template>
    <div class="flex min-h-screen flex-col bg-gray-900 p-[50px]">
        <div class="flex flex-1 flex-col justify-center gap-x-8 lg:flex-row lg:items-stretch">
            <div class="mt-6 hidden h-full min-w-[250px] flex-col items-center rounded-lg lg:flex">
                <left-card />
            </div>
            <div class="mt-6 flex w-full max-w-6xl flex-col items-center space-y-4 lg:w-2/3">
                <app-tabs v-model="activeTab" :tabs="tabs" class="w-full" />
                <right-card :tabs="tabs" class="w-full" />
            </div>
        </div>
        <lazy-logout-modal />
    </div>
</template>


  
  