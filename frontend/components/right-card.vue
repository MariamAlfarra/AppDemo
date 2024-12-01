<script setup>
import { useMainStore } from "~/stores/main";
const mainStore = useMainStore();
const {user} = toRefs(mainStore);
</script>
<template>
    <div class="flex flex-col">
        <div class="rounded-lg bg-white p-6 shadow-lg">
            <h2 class="mb-4 text-3xl font-bold text-gray-800">
                About Me
            </h2>
            <p class="leading-relaxed text-gray-600">
                {{ user.description }}
            </p>
            <h3>What i do !</h3>
            <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div class="flex flex-col items-start justify-between rounded-lg border border-gray-300 bg-gray-50 p-4 shadow-md">
                    <h3 class="text-xl font-semibold text-gray-800">
                        Web Development
                    </h3>
                    <p class="mt-2 text-sm text-gray-600">
                    </p>
                </div>

                <div class="flex flex-col items-start justify-between rounded-lg border border-gray-300 bg-gray-50 p-4 shadow-md">
                    <h3 class="text-xl font-semibold text-gray-800">
                        App Application
                    </h3>
                    <p class="mt-2 text-sm text-gray-600">
                    </p>
                </div>

                <div class="flex flex-col items-start justify-between rounded-lg border border-gray-300 bg-gray-50 p-4 shadow-md">
                    <h3 class="text-xl font-semibold text-gray-800">
                        API Creation
                    </h3>
                    <p class="mt-2 text-sm text-gray-600">
                    </p>
                </div>

                <div class="flex flex-col items-start justify-between rounded-lg border border-gray-300 bg-gray-50 p-4 shadow-md">
                    <h3 class="text-xl font-semibold text-gray-800">
                        Technologies
                    </h3>
                    <p class="mt-2 text-sm text-gray-600">
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>