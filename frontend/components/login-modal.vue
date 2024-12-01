<script setup>
import { useMainStore } from "~/stores/main";
import { Required, IsEmail } from "@lion/ui/form-core.js";
const email = ref("");
const password = ref("");
const mainStore = useMainStore();
const router = useRouter();
const resolvedIcon = ref(null);
const errorMessage = ref("");
import { resolveLionIcon } from "#build/imports";

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

onMounted(() => {
    const icon = resolveLionIcon("user");
    resolvedIcon.value = icon.strings.join("");
    console.log(resolvedIcon.value);
});

</script>
<template>
    <div class="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div class="size-96 rounded-lg bg-transparent/30 p-8 shadow-lg">
            <h1 class="mb-4 text-xl font-bold text-gray-400">
                Login
            </h1>
            <div class="flex justify-center">
                <!-- <lion-icon :icon-id="resolvedIcon" aria-label="Bug Icon"></lion-icon> -->
            </div>
            <lion-input-email
                v-model="email"
                type="email"
                placeholder="Email"
                :validators="emailValidators"
                class="mb-2 w-full"
            >
            </lion-input-email>

            <lion-input
                v-model="password"
                type="password"
                placeholder="Password"
                class="mb-2 w-full"
            />

            <div class="mb-4">
                <lion-button class="flex w-full justify-center rounded p-2 text-white" style="background-color: rgb(79 41 171)" @click="handleLogin">
                    Login
                </lion-button>
                <p class="mt-2 pl-2 text-sm text-white">
                    Don't have an account yet? Register
                </p>
            </div>
            
            <p v-if="errorMessage" class="mt-4 text-red-500">
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
    color: red;
    font-size: 13px;
    padding-left: 5px;
    font-style: italic;
}
</style>