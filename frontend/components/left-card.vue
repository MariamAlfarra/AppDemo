<script setup>
import { useMainStore } from "~/stores/main";
const mainStore = useMainStore();
const {user} = toRefs(mainStore);
const redirectTo = (platform) => {
    const urls = {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    };
    window.open(urls[platform], "_blank");
};

const fullName = ref(`${user.value.firstName} ${user.value.lastName}`);
const initials = ref("");
initials.value = `${user.value.firstName[0].toUpperCase()}${user.value.lastName[0].toUpperCase()}`;


</script>
<template>
    <div class="flex h-full items-center justify-center">
        <div class="relative flex size-full max-w-sm flex-col rounded-lg bg-white p-6 text-center shadow-lg">
            <div 
                class="absolute -top-10 left-1/2 flex size-32 -translate-x-1/2 items-center justify-center bg-indigo-500 text-2xl font-bold text-white shadow-lg"
                title="User Initials">
                {{ initials }}
            </div>

            <div class="mt-8 flex flex-1 flex-col pt-8">
                <h2 class="truncate text-xl font-bold text-gray-800">
                    {{ fullName }}
                </h2>
                <p class="truncate text-sm text-gray-500">
                    {{ user.role }}
                </p>

                <div class="mt-4 flex justify-center space-x-4">
                    <lion-button 
                        class="rounded-full text-white" 
                        @click="redirectTo('facebook')"
                    >
                        <img src="/images/facebook.png" alt="Facebook" class="size-6" />
                    </lion-button>

                    <lion-button 
                        class="rounded-full text-white" 
                        @click="redirectTo('linkedin')"
                    >
                        <img src="/images/linkedin.png" alt="LinkedIn" class="size-6" />
                    </lion-button>

                    <lion-button 
                        class="rounded-full text-white" 
                        @click="redirectTo('github')"
                    >
                        <img src="/images/github.png" alt="GitHub" class="size-6" />
                    </lion-button>
                </div>


                <div class="my-8 flex-1 space-y-4 rounded-md border bg-gray-200 p-4 text-left">
                    <div class="flex items-center justify-between border-b border-gray-300 pb-2">
                        <div>
                            <span class="block text-sm text-gray-500">Phone</span>
                            <p class="truncate text-sm text-gray-800">
                                {{ user.phone }}
                            </p>
                        </div>
                        <i class="fas fa-phone text-gray-500"></i>
                    </div>
                    <div class="flex items-center justify-between border-b border-gray-300 pb-2">
                        <div>
                            <span class="block text-sm text-gray-500">Email</span>
                            <p class="truncate text-sm text-gray-800">
                                {{ user.email }}
                            </p>
                        </div>
                        <i class="fas fa-envelope text-gray-500"></i>
                    </div>
                    <div class="flex items-center justify-between border-b border-gray-300 pb-2">
                        <div>
                            <span class="block text-sm text-gray-500">Location</span>
                            <p class="truncate text-sm text-gray-800">
                                {{ user.location }}
                            </p>
                        </div>
                        <i class="fas fa-map-marker-alt text-gray-500"></i>
                    </div>
                    <div class="flex items-center justify-center pb-2">
                        <div>
                            <lion-button class="bg-gray-600 text-sm">
                                Download Resume
                            </lion-button>
                        </div>
                        <i class="fas fa-map-marker-alt text-gray-500"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
