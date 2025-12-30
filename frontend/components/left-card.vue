<script setup>
import { useMainStore } from "~/stores/main";
const mainStore = useMainStore();
const {user,leftSideModal} = toRefs(mainStore);
const fullName = ref("");
const initials = ref("");
const redirectTo = (platform) => {
    const url = user.value[platform];
    if (url) {
        window.open(url, "_blank");
    } 
};

watch(user, (newUser) => {
    if (newUser) {
        fullName.value = `${newUser.firstName ?? ""} ${newUser.lastName ?? ""}`.trim();
        initials.value = `${newUser.firstName?.[0]?.toUpperCase() ?? ""}${newUser.lastName?.[0]?.toUpperCase() ?? ""}`;
    }
}, { immediate: true });

const downloadResume = () => {
    const link = document.createElement("a");
    const fileName = `${user.value?.firstName}-${user.value?.lastName}-cv.pdf`; 
    link.href = `files/${user.value?.cvName}`; 
    link.download = fileName; 
    link.click(); 
};

</script>
<template>
    <div class="flex items-center justify-center">
        <button 
            class="absolute left-2 top-2 flex cursor-pointer items-center justify-center sm:hidden" 
            @click="isModalOpen = true">
            <div class="flex items-center justify-center rounded-full bg-green-400 p-2 text-lg text-white">
                {{ initials }}
            </div>
        </button>

        <UModal 
            v-model="leftSideModal"
            class="fixed inset-0 z-50 flex items-center justify-center">
            <div class="relative rounded-lg bg-white p-6 text-center shadow-lg">
                <button 
                    class="absolute right-4 top-4 text-2xl text-gray-600"
                    @click="leftSideModal = false">
                    &times;
                </button>
                <div 
                    class="absolute -top-10 left-1/2 flex size-32 -translate-x-1/2 items-center justify-center bg-green-400/75 text-2xl font-bold text-white shadow-lg"
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
                        <UButton
                            color="gray"
                            variant="link"
                            class="rounded-full bg-gray-100 text-white hover:bg-gray-200" 
                            @click="redirectTo('facebook')"
                        >
                            <img src="/images/facebook.png" alt="Facebook" class="size-6" />
                        </UButton>

                        <UButton
                            color="gray"
                            variant="link"
                            class="rounded-full bg-gray-100 text-white hover:bg-gray-200" 
                            @click="redirectTo('linkedin')"
                        >
                            <img src="/images/linkedin.png" alt="LinkedIn" class="size-6" />
                        </UButton>

                        <UButton 
                            color="gray"
                            variant="link"
                            class="rounded-full bg-gray-100 text-white hover:bg-gray-200" 
                            @click="redirectTo('github')"
                        >
                            <img src="/images/github.png" alt="GitHub" class="size-6" />
                        </UButton>
                    </div>

                    <div class="my-8 space-y-4 rounded-md border bg-gray-200 p-4 text-left">
                        <div class="flex items-center justify-start border-b border-gray-300 pb-2">
                            <UIcon name="i-heroicons-device-phone-mobile" class=" pl-8 text-green-500" />
                            <div>
                                <span class="block text-sm text-gray-600">Phone</span>
                                <p class="truncate text-sm text-gray-800">
                                    {{ user?.phone }}
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center justify-start border-b border-gray-300 pb-2">
                            <UIcon name="i-heroicons-at-symbol" class="pl-8 text-green-500" />
                            <div>
                                <span class="block text-sm text-gray-600">Email</span>
                                <p class="truncate text-sm text-gray-800">
                                    {{ user?.email }}
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center justify-start border-b border-gray-300 pb-2">
                            <UIcon name="i-heroicons-map-pin" class="pl-8 text-green-500" />
                            <div>
                                <span class="block text-sm text-gray-600">Location</span>
                                <p class="truncate text-sm text-gray-800">
                                    {{ user?.location }}
                                </p>
                            </div>
                        </div>
                        <div class="mb-8 flex items-center justify-center pb-2">
                            <div>
                                <UButton variant="solid"
                                         color="gray"
                                         @click="downloadResume">
                                    <UIcon name="i-heroicons-arrow-down-tray" class="pl-7 text-white" />
                                    Download Resume
                                </UButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UModal>

        <div class="relative flex size-full max-w-sm flex-col rounded-lg bg-white p-8 text-center shadow-lg transition-opacity duration-200 ease-in-out sm:block">
            <div 
                class="absolute -top-10 left-1/2 flex size-32 -translate-x-1/2 items-center justify-center bg-green-700/80 text-2xl font-bold text-white shadow-lg"
                title="User Initials"
            >
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
                    <UButton
                        color="gray"
                        variant="link"
                        class="rounded-full bg-gray-100 text-white hover:bg-gray-200" 
                        @click="redirectTo('facebook')"
                    >
                        <img src="/images/facebook.png" alt="Facebook" class="size-6" />
                    </UButton>

                    <UButton
                        color="gray"
                        variant="link"
                        class="rounded-full bg-gray-100 text-white hover:bg-gray-200" 
                        @click="redirectTo('linkedin')"
                    >
                        <img src="/images/linkedin.png" alt="LinkedIn" class="size-6" />
                    </UButton>

                    <UButton 
                        color="gray"
                        variant="link"
                        class="rounded-full bg-gray-100 text-white hover:bg-gray-200" 
                        @click="redirectTo('github')"
                    >
                        <img src="/images/github.png" alt="GitHub" class="size-6" />
                    </UButton>
                </div>

                <div class="my-8 space-y-4 rounded-md border bg-gray-200 p-4 text-left">
                    <div class="flex items-center justify-start border-b border-gray-300 pb-2">
                        <UIcon name="i-heroicons-device-phone-mobile" class=" pl-8 text-green-600" />
                        <div>
                            <span class="block text-sm text-gray-500">Phone</span>
                            <p class="truncate text-sm text-gray-800">
                                {{ user?.phone }}
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-start border-b border-gray-300 pb-2">
                        <UIcon name="i-heroicons-at-symbol" class="pl-8 text-green-600" />
                        <div>
                            <span class="block text-sm text-gray-500">Email</span>
                            <p class="truncate text-sm text-gray-800">
                                {{ user?.email }}
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-start border-b border-gray-300 pb-2">
                        <UIcon name="i-heroicons-map-pin" class="pl-8 text-green-600" />
                        <div>
                            <span class="block text-sm text-gray-500">Location</span>
                            <p class="truncate text-sm text-gray-800">
                                {{ user?.location }}
                            </p>
                        </div>
                    </div>
                    <div class="mb-8 flex items-center justify-center pb-2">
                        <div>
                            <UButton variant="solid"
                                     color="gray"
                                     class="bg-gray-700 text-white hover:bg-gray-600"
                                     @click="downloadResume">
                                <UIcon name="i-heroicons-arrow-down-tray" class="pl-7 text-white" />
                                Download Resume
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
