<script setup>
import { useMainStore } from "~/stores/main";
const email = ref("");
const password = ref("");
const mainStore = useMainStore();
const router = useRouter();
const errorMessage = ref("");

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const handleLogin = () => {
    if (!email.value || !password.value) {
        errorMessage.value = "Email and password cannot be empty.";
        console.log(errorMessage.value);
        return;
    }

    if (!isValidEmail(email.value)) {
        errorMessage.value = "Please enter a valid email address.";
        console.log(errorMessage.value);
        return;
    }

    if (mainStore.login(email.value, password.value)) {
        router.push("/");
    } else {
        errorMessage.value = "Invalid credentials";
    }
};

const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
};
</script>
<template>
    <div class="flex h-screen w-screen items-center justify-center bg-gray-900 bg-gradient-to-r">
        <div class="w-full max-w-sm rounded-lg  bg-transparent/30 p-8 shadow-lg  backdrop-blur-md">
            <h1 class="mb-6 text-center text-2xl font-bold text-white">
                Login
            </h1>
            <div class="mb-6 flex justify-center">
                <div class="flex size-16 items-center justify-center rounded-full bg-gray-200">
                    <UIcon name="i-heroicons-user" class="size-12 text-gray-600" />
                </div>
            </div>
            <UInput
                v-model="email"
                type="email"
                placeholder="Email"
                :validators="emailValidators"
                class="mb-4 w-full rounded shadow-inner"
            >
            </UInput>
            <div class="relative mb-4 w-full">
                <UInput
                    v-model="password"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    placeholder="Password"
                    class="w-full rounded shadow-inner"
                />
                <button
                    type="button"
                    class="absolute right-3 top-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    @click="togglePasswordVisibility"
                >
                    <UIcon :name="isPasswordVisible ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'" class="text-gray-200" />
                </button>
            </div>
            <div class="mb-4">
                <UButton 
                    class="flex w-full justify-center rounded bg-indigo-600 p-2 text-white transition duration-200 hover:bg-indigo-700"
                    @click="handleLogin"
                >
                    Login
                </UButton>
            </div>
            <!-- Error Message -->
            <p v-if="errorMessage" class="mb-4 text-center text-sm font-semibold text-red-400">
                {{ errorMessage }}
            </p>
            <p class="text-center text-sm text-white">
                Don't have an account yet? 
                <a href="/register" class="text-indigo-300 hover:underline">Register</a>
            </p>
            <p v-if="errorMessage" class="mt-4 text-center text-sm italic text-gray-800">
                {{ errorMessage }}
            </p>
        </div>
    </div>
</template>
<style lang="postcss">
</style>