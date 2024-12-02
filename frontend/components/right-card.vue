<script setup>
import { useMainStore } from "~/stores/main";

const mainStore = useMainStore();
const {user, activeTab} = toRefs(mainStore);

const props = defineProps({
    tabs: {
        type: Array,
        required: true
    }
});

</script>
<template>
    <div class="flex h-full flex-col">
        <div class="rounded-lg bg-white p-6 shadow-lg">
            <div v-if="activeTab === 0" class="transition-all duration-300 ease-in-out">
                <div class="mb-4 flex items-center">
                    <h2 class="flex-1 text-3xl font-bold text-gray-800">
                        About Me
                    </h2>
                    <div class="ml-4 h-px w-32 bg-gray-300"></div>
                </div>
                <p class="leading-relaxed text-gray-600">
                    {{ user.description }}
                </p>
  
                <h3 class="mt-4 text-2xl font-semibold text-gray-800">
                    What I Do!
                </h3>
                <div class="mt-8 grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
                    <div
                        v-for="(card, index) in user.homeCards"
                        :key="index"
                        :class="[
                            'flex flex-col items-start justify-between rounded-lg border border-gray-300 p-4 shadow-md',
                            index % 3 === 0 ? 'bg-gray-200' : ''
                        ]"
                    >
                        <div class="flex items-center space-x-2">
                            <UIcon :name="card.icon" class="text-gray-500" />

                            <h3 class="text-xl font-semibold text-gray-800">
                                {{ card.title }}
                            </h3>
                        </div>
                        <p class="mt-2 text-sm text-gray-600">
                            {{ card.description }}
                        </p>
                    </div>
                </div>
            </div>
            <div v-if="activeTab === 1" class="transition-all duration-300 ease-in-out">
                <div class="mb-4 flex items-center">
                    <h2 class="flex-1 text-3xl font-bold text-gray-800">
                        Work
                    </h2>
                    <div class="ml-4 h-px w-32 bg-gray-300"></div>
                </div>
                <p class="leading-relaxed text-gray-600">
                    {{ user.description }}
                </p>
  
                <h3 class="mt-4 text-2xl font-semibold text-gray-800">
                    What I Do!
                </h3>
                <div class="mt-8 grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
                    <div
                        v-for="(card, index) in user.homeCards"
                        :key="index"
                        class="flex flex-col items-start justify-between rounded-lg border border-gray-300 bg-gray-50 p-4 shadow-md"
                    >
                        <div class="flex items-center space-x-2">
                            <UIcon :name="card.icon" class="text-gray-500" />
                            <h3 class="text-xl font-semibold text-gray-800">
                                {{ card.title }}
                            </h3>
                        </div>
                        <p class="mt-2 text-sm text-gray-600">
                            {{ card.description }}
                        </p>
                    </div>
                </div>
            </div>
            <div v-if="activeTab === 2" class="transition-all duration-300 ease-in-out">
                <h2 class="mb-4 text-3xl font-bold text-gray-800">
                    Reviews
                </h2>
                <p class="leading-relaxed text-gray-600">
                    <app-review></app-review>
                </p>
            </div>
        </div>
    </div>
</template>
