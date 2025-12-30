<script setup>
import { useMainStore } from "~/stores/main";
const mainStore = useMainStore();
const router = useRouter();
const { isAuthenticated } = toRefs(mainStore);
useHead({
    title: "Login"
});
const state = reactive({
    email: "",
    password: ""
});

const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
};

const validate = () => {
    const errors = [];
  
    if (!state.email) {
        errors.push({ path: "email", message: "Email is required" });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
        errors.push({ path: "email", message: "Invalid email address" });
    }

    if (!state.password) {
        errors.push({ path: "password", message: "Password is required" });
    }

    return errors;
};

async function onSubmit() {
    try {
        await mainStore.loginUser(state.email, state.password);
        if (isAuthenticated.value) {
            router.push("/");
        }
    } catch (error) {
        console.error("Login failed", error);
    }
}
</script>

<template>
    <div class="flex h-screen w-screen flex-col items-center justify-center bg-gray-900">
        <div class="flex h-screen w-screen items-center justify-center bg-gray-900 bg-gradient-to-r">
            <div class="w-full max-w-sm rounded-lg bg-transparent/30 p-8 shadow-lg backdrop-blur-md">
                <h1 class="mb-6 text-center text-2xl font-bold text-white">
                    Login
                </h1>
                <div class="mb-6 flex justify-center">
                    <div class="flex size-16 items-center justify-center rounded-full bg-gray-200">
                        <UIcon name="i-heroicons-user" class="size-12 text-gray-600" />
                    </div>
                </div>
                <UForm :validate="validate"
                       :state="state"
                       class="space-y-4"
                       @submit="onSubmit">
                    <UFormGroup name="email">
                        <span class="text-sm text-white">Email</span>
                        <UInput v-model="state.email"
                                type="email"
                                placeholder="Email"
                                class="w-full rounded shadow-inner" />
                    </UFormGroup>

                    <UFormGroup name="password">
                        <span class="text-sm text-white">Password</span>
                        <div class="relative w-full">
                            <UInput v-model="state.password"
                                    :type="isPasswordVisible ? 'text' : 'password'"
                                    placeholder="Password"
                                    class="w-full rounded shadow-inner" 
                                    :input-attrs="{autocomplete: 'current-password'}" />
                            <button
                                type="button"
                                class="absolute right-3 top-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                :aria-label="isPasswordVisible ? 'Hide password' : 'Show password'"
                                :title="isPasswordVisible ? 'Hide password' : 'Show password'"
                                :aria-pressed="isPasswordVisible"
                                @click="togglePasswordVisibility"
                            >
                                <UIcon
                                    :name="isPasswordVisible ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'"
                                    aria-hidden="true"
                                    class="text-gray-200"
                                />
                            </button>
                        </div>
                    </UFormGroup>

                    <UButton
                        type="submit"
                        class="flex w-full justify-center rounded bg-green-700 px-4 py-2 transition
         hover:bg-green-800 focus:outline-none
         focus:ring-2 focus:ring-green-500
         disabled:cursor-not-allowed disabled:bg-green-700
         disabled:opacity-60 aria-disabled:bg-green-700
         dark:bg-green-700 dark:text-white
         dark:hover:bg-green-800 dark:focus:ring-green-400 dark:disabled:bg-green-700 dark:aria-disabled:bg-green-700"
                    >
                        Login
                    </UButton>
                </UForm>

                <p class="mt-2 text-center text-sm text-white">
                    Don't have an account yet?
                    <a
                        href="/register"
                        class="ml-1 text-blue-400 underline underline-offset-2 hover:text-blue-300 hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Register
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>
