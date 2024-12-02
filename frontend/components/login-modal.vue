<script setup>
import { useMainStore } from "~/stores/main";
import { Required, IsEmail } from "@lion/ui/form-core.js";
const email = ref("");
const password = ref("");
const mainStore = useMainStore();
const router = useRouter();
const errorMessage = ref("");

const emailValidators = [
    new Required(null, {
        getMessage: () => "Email is required."
    }),
    new IsEmail(null, {
        getMessage: () => "Please enter a valid email address."
    })
];

const handleLogin = () => {
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
    <div class="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div class="w-full max-w-sm rounded-lg  bg-transparent/30 p-8 shadow-lg  backdrop-blur-md">
            <h1 class="mb-6 text-center text-2xl font-bold text-white">
                Login
            </h1>
            <div class="mb-6 flex justify-center">
                <div class="flex size-16 items-center justify-center rounded-full bg-gray-200">
                    <UIcon name="i-heroicons-user" class="size-12 text-gray-600" />
                </div>
            </div>
            <lion-input-email
                v-model="email"
                type="email"
                placeholder="Email"
                :validators="emailValidators"
                class="mb-4 w-full rounded shadow-inner"
            >
            </lion-input-email>
            <div class="relative mb-4 w-full">
                <lion-input
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
                    <UIcon :name="isPasswordVisible ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'" />
                </button>
            </div>
            <div class="mb-4">
                <lion-button 
                    class="flex w-full justify-center rounded bg-indigo-600 p-2 text-white transition duration-200 hover:bg-indigo-700"
                    @click="handleLogin"
                >
                    Login
                </lion-button>
            </div>
            <p class="text-center text-sm text-white">
                Don't have an account yet? 
                <a href="/register" class="text-indigo-300 hover:underline">Register</a>
            </p>
            <p v-if="errorMessage" class="mt-4 text-center text-sm italic text-red-400">
                {{ errorMessage }}
            </p>
        </div>
    </div>
</template>
<style lang="postcss">
lion-input .form-control {
  background-color: white;
  color: black;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 0.5rem;
  font-size: 0.875rem;
}
lion-input-email .form-control {
  background-color: white;
  color: black;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 0.5rem;
  font-size: 0.875rem;
}

lion-validation-feedback {
    color: rgb(236, 89, 89);
    font-size: 13px;
    padding-left: 5px;
    font-style: italic;
}
</style>