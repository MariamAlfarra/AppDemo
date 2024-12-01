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
</script>
<template>
    <div class="relative p-8"> 
        <div 
            class="absolute -top-6 left-20 flex size-32 items-center justify-center rounded-sm bg-indigo-500 text-2xl font-bold text-white shadow-lg"
            title="User Initials">
            MA
        </div>
        <div class="mx-auto w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-lg">
            <div class="mt-8 pt-8">
                <h2 class="line-clamp-1 truncate text-2xl font-bold text-gray-800">
                    {{ user.name }}
                </h2>
                <p class="line-clamp-1 truncate text-sm text-gray-500">
                    {{ user.role }}
                </p>
            </div>

            <div class="mt-4 flex justify-center space-x-4">
                <lion-button class="rounded-full bg-blue-600 p-2 text-white" @click="redirectTo('facebook')">
                    <i class="fab fa-facebook-f"></i>
                </lion-button>
                <lion-button class="rounded-full bg-blue-500 p-2 text-white" @click="redirectTo('linkedin')">
                    <i class="fab fa-linkedin-in"></i>
                </lion-button>
                <lion-button class="rounded-full bg-gray-800 p-2 text-white" @click="redirectTo('github')">
                    <i class="fab fa-github"></i>
                </lion-button>
            </div>

            <div class="mt-6 space-y-4 rounded-md border bg-gray-200 p-2 text-left">
                <div class="flex items-center justify-between border-b border-gray-300 pb-2">
                    <div>
                        <span class="block text-sm text-gray-500">Phone</span>
                        <p class="line-clamp-1 truncate text-sm text-gray-800">
                            {{ user.phone }}
                        </p>
                    </div>
                    <i class="fas fa-phone text-gray-500"></i>
                </div>
                <div class="flex items-center justify-between border-b border-gray-300 pb-2">
                    <div>
                        <span class="block text-sm text-gray-500">Email</span>
                        <p class="line-clamp-1 truncate text-sm text-gray-800">
                            {{ user.email }}
                        </p>
                    </div>
                    <i class="fas fa-envelope text-gray-500"></i>
                </div>
                <div class="flex items-center justify-between border-b border-gray-300 pb-2">
                    <div>
                        <span class="block text-sm text-gray-500">Location</span>
                        <p class="line-clamp-1 truncate text-sm text-gray-800">
                            {{ user.location }}
                        </p>
                    </div>
                    <i class="fas fa-map-marker-alt text-gray-500"></i>
                </div>
                <div class="flex items-center justify-center pb-2">
                    <div>
                        <lion-button class="text-sm">
                            Download Resume
                        </lion-button>
                    </div>
                    <i class="fas fa-map-marker-alt text-gray-500"></i>
                </div>
            </div>
        </div>
    </div>
</template>