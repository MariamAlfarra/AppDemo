<script setup>
import { useMainStore } from "~/stores/main";
const email = ref("");
const password = ref("");
const mainStore = useMainStore();
const router = useRouter();

const handleLogin = () => {
    if (mainStore.login(email.value, password.value)) {
        router.push("/");
    } else {
        return;
    // errorMessage.value = 'Invalid credentials';
    }
};

</script>
<template>
    <div class="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div class="size-80 rounded-lg bg-white p-8 shadow-lg">
            <h1 class="mb-4 text-xl font-bold text-gray-700">
                Login Page
            </h1>
            <lion-input
                v-model="email"
                type="email"
                placeholder="Email"
                class="p-border mb-4 w-full rounded"
            />
            <lion-input
                v-model="password"
                type="password"
                placeholder="Password"
                class="mb-4 w-full rounded border p-2"
            />
            <lion-button class="w-full rounded bg-blue-500 px-4 py-2 text-white" @click="handleLogin">
                Login
            </lion-button>
            <p v-if="errorMessage" class="mt-4 text-red-500">
                {{ errorMessage }}
            </p>
        </div>
    </div>
</template>