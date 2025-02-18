<script setup>
import { ref, toRefs } from "vue";
import { useMainStore } from "~/stores/main";

const mainStore = useMainStore();
const { user, activeTab, loading } = toRefs(mainStore);

const selectedProject = ref(null);
const isModalVisible = ref(false);

onMounted(() => {
    if (activeTab.value === 1 && user?.value?.workCards?.length > 0) {
        selectedProject.value = user.value.workCards[0];
        isModalVisible.value = true;
    }
});


watch(activeTab, (newTab) => {
    if (newTab === 1 && user?.value?.workCards?.length > 0) {
        selectedProject.value = user.value.workCards[0]; 
        isModalVisible.value = true; 
    }
});
</script>
<template>
    <div class="flex flex-col">
        <div class="mx-auto w-full max-w-6xl rounded-lg bg-white p-6 shadow-lg">
            <div class="relative flex min-h-[500px] w-full max-w-full overflow-hidden xl:min-h-[650px]">
                <div v-if="loading" class="flex w-full items-center justify-center">
                    <UIcon name="i-heroicons-arrow-path" class="size-6 animate-spin text-green-500" />
                </div>
                <div v-else>
                    <div v-if="activeTab === 0" class="w-full transition-opacity duration-300 ease-in-out">
                        <div class="mb-4 flex items-center">
                            <h2 class="flex-1 text-3xl font-bold text-gray-800">
                                About Me
                            </h2>
                            <div class="ml-4 h-px w-32 bg-gray-300"></div>
                        </div>
                        <div class="max-h-[500px] rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-md md:overflow-y-auto lg:max-h-[550px] xl:max-h-[600px]">
                            <p class="leading-relaxed text-gray-600">
                                {{ user?.description }}
                            </p>

                            <h3 class="mt-4 text-2xl font-semibold text-gray-800">
                                What I Do!
                            </h3>

                            <div class="mt-4">
                                <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                    <div
                                        v-for="(card, index) in user?.homeCards"
                                        :key="index"
                                        class="flex flex-col items-start justify-between rounded-lg border border-gray-300 bg-white p-4 shadow-md"
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
                                        <ul class="mt-4 text-sm text-gray-600">
                                            <li v-for="(detail, i) in card.details" :key="i">
                                                - {{ detail }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="activeTab === 1 && user?.workCards?.length" class="w-full transition-opacity duration-200 ease-in-out">
                        <div class="mb-4 flex items-center">
                            <h2 class="flex-1 text-3xl font-bold text-gray-800">
                                Main Projects
                            </h2>
                            <div class="ml-4 h-px w-32 bg-gray-300"></div>
                        </div>
                        <UTabs :items="user.workCards" class="w-full rounded-lg p-2">
                            <template #item="{ item }">
                                <UCard class="dark:ring-bg-100 p-4 text-gray-800 shadow-lg dark:bg-gray-100">
                                    <template #header>
                                        <p class="text-gray-500">
                                            {{ item.description }}
                                        </p>
                                        <div class="mt-4">
                                            <h4 class="mb-2 text-xl font-semibold text-gray-800">
                                                Details:
                                            </h4>
                                            <ul class="list-inside list-disc text-sm text-gray-600">
                                                <li v-for="(detail, i) in item.details" :key="i">
                                                    {{ detail }}
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="mt-4">
                                            <h4 class="mb-2 text-xl font-semibold text-gray-800">
                                                Tech Stack:
                                            </h4>
                                            <div class="mt-2 flex flex-wrap gap-2">
                                                <span
                                                    v-for="tech in item.techStack"
                                                    :key="tech"
                                                    class="rounded-md bg-gray-200 px-3 py-1 text-sm"
                                                >
                                                    {{ tech }}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mt-4 flex flex-wrap gap-2">
                                            <span class="rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                                                Frontend: {{ item.contributions.frontend }}
                                            </span>
                                            <span class="rounded-md bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                                                Backend: {{ item.contributions.backend }}
                                            </span>
                                            <span class="rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-800">
                                                Team Size: {{ item.teamSize }}
                                            </span>
                                        </div>
                                    </template>
                                </UCard>
                            </template>
                        </UTabs>
                    </div>
                    <div v-if="activeTab === 2" class="w-full transition-opacity duration-300 ease-in-out">
                        <div class="mb-4 flex items-center">
                            <h2 class="flex-1 text-3xl font-bold text-gray-800">
                                Reviews
                            </h2>
                            <div class="ml-4 h-px w-32 bg-gray-300"></div>
                        </div>
                        <p class="mt-6 leading-relaxed text-gray-600">
                            <app-review></app-review>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
::v-deep(button[role="tab"]) {
  @apply text-gray-600 dark:bg-green-400 ;
}

::v-deep([role="tablist"]) {
  @apply  dark:bg-green-400;
}

::v-deep(button[role="tab"][aria-selected="true"]) {
  @apply text-white dark:bg-green-600; 
}

::v-deep(button[role="tab"][aria-selected="false"]) {
  @apply  dark:bg-green-400 dark:text-gray-600; 
}
</style>
