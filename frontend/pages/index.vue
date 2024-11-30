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
    <div>
        <h1>Welcome to the Home Page {{ user?.name }}</h1>
        <lion-button @click="logout(router)">
            Logout
        </lion-button>
    </div>
</template>
