<script setup>
import { useMainStore } from "~/stores/main";
const mainStore = useMainStore();
const {user} = toRefs(mainStore);

const redirectTo = (platform) => {
    const url = user.value[platform];
    if (url) {
        window.open(url, "_blank");
    } 
};

const fullName = ref(`${user.value?.firstName} ${user.value?.lastName}`);
const initials = ref("");
initials.value = `${user.value?.firstName[0].toUpperCase()}${user.value?.lastName[0].toUpperCase()}`;

const downloadResume = () => {
    const link = document.createElement("a");
    const fileName = `${user.value?.firstName}-${user.value?.lastName}-cv.pdf`; 
    link.href = `files/${user.value?.cvName}`; 
    link.download = fileName; 
    link.click(); 
};

</script>
<template>
    <div class="flex h-full items-center justify-center">
        <div class="relative flex size-full max-w-sm flex-col rounded-lg bg-white p-6 text-center shadow-lg">
            <div 
                class="absolute -top-10 left-1/2 flex size-32 -translate-x-1/2 items-center justify-center bg-yellow-400/75 text-2xl font-bold text-white shadow-lg"
                title="User Initials">
                {{ initials }}
            </div>

            <div class="mt-8 flex flex-1 flex-col pt-8">
                <h2 class="truncate text-xl font-bold text-gray-800">
                    {{ fullName }}
                </h2>
                <p class="truncate text-sm text-gray-500">
                    {{ user?.role }}
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


                <div class="my-8 space-y-4 rounded-md border bg-gray-200 p-4 text-left">
                    <div class="flex items-center justify-start border-b border-gray-300 pb-2">
                        <UIcon name="i-heroicons-device-phone-mobile" class=" pl-8 text-pink-500" />
                        <div>
                            <span class="block text-sm text-gray-500">Phone</span>
                            <p class="truncate text-sm text-gray-800">
                                {{ user?.phone }}
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-start border-b border-gray-300 pb-2">
                        <UIcon name="i-heroicons-at-symbol" class="pl-8 text-pink-500" />
                        <div>
                            <span class="block text-sm text-gray-500">Email</span>
                            <p class="truncate text-sm text-gray-800">
                                {{ user?.email }}
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-start border-b border-gray-300 pb-2">
                        <UIcon name="i-heroicons-map-pin" class="pl-8 text-pink-500" />
                        <div>
                            <span class="block text-sm text-gray-500">Location</span>
                            <p class="truncate text-sm text-gray-800">
                                {{ user?.location }}
                            </p>
                        </div>
                    </div>
                    <div class="mb-8 flex items-center justify-center pb-2">
                        <div>
                            <lion-button class=" bg-gradient-to-r from-pink-500 to-orange-500  text-sm hover:from-pink-600 hover:to-orange-600" @click="downloadResume">
                                <UIcon name="i-heroicons-arrow-down-tray" class="pl-7 text-white" />
                                Download Resume
                            </lion-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
