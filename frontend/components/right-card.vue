<script setup>
import { ref, toRefs } from "vue";
import { useMainStore } from "~/stores/main";

const mainStore = useMainStore();
const { user, activeTab } = toRefs(mainStore);

const selectedProject = ref(null);
const isModalVisible = ref(false);
const openModal = (project) => {
    selectedProject.value = project;
    isModalVisible.value = true;
};

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
    <div class="flex h-full flex-col">
        <div class="rounded-lg bg-white p-6 shadow-lg">
            <!-- Tab 1: About Me -->
            <div v-if="activeTab === 0" class="tab-content transition-all duration-300 ease-in-out">
                <div class="mb-4 flex items-center">
                    <h2 class="flex-1 text-3xl font-bold text-gray-800">
                        About Me
                    </h2>
                    <div class="ml-4 h-px w-32 bg-gray-300"></div>
                </div>
                <p class="leading-relaxed text-gray-600">
                    {{ user?.description }}
                </p>
                <h3 class="mt-4 text-2xl font-semibold text-gray-800">
                    What I Do!
                </h3>
                <div class="mt-8 grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
                    <div
                        v-for="(card, index) in user?.homeCards"
                        :key="index"
                        :class="[
                            'flex flex-col items-start justify-between rounded-lg border border-gray-300 p-4 shadow-md',
                            index % 3 === 0 ? 'bg-orange-400/20' : ''
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
                        <ul class="mt-4 text-sm text-gray-600">
                            <li v-for="(detail, i) in card.details" :key="i">
                                - {{ detail }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
  
            <!-- Tab 2: Main Projects -->
            <div v-if="activeTab === 1" class="tab-content transition-all duration-300 ease-in-out">
                <div class="mb-4 flex items-center">
                    <h2 class="flex-1 text-3xl font-bold text-gray-800">
                        Main Projects
                    </h2>
                    <div class="ml-4 h-px w-32 bg-gray-300"></div>
                </div>
                <div class="flex w-full flex-wrap gap-4">
                    <div
                        v-for="(project, index) in user?.workCards.slice(0, 2)"
                        :key="index"
                        :class="[
                            'flex-1 cursor-pointer rounded-full border border-gray-300 bg-orange-400/80 p-2 shadow-md hover:bg-orange-500/80',
                            selectedProject?.title === project.title ? 'bg-orange-500/80 text-white' : 'bg-orange-400/80'
                        ]"
                        role="button"
                        tabindex="0"
                        @click="openModal(project)"
                        @keydown.enter="openModal(project)"
                        @keydown.space="openModal(project)"
                    >
                        <div class="flex items-center justify-center space-x-2">
                            <UIcon name="i-heroicons-briefcase" class="text-xl text-white" />
                            <span class="text-sm font-semibold text-white">{{ project.title }}</span>
                        </div>
                    </div>
                </div>
                <lion-dialog v-model="isModalVisible" title="Project Details" :show-close="true">
                    <div>
                        <div v-if="selectedProject" class="p-4">
                            <h3 class="text-2xl font-bold text-gray-800">
                                {{ selectedProject.title }}
                            </h3>
                            <p class="mt-2 text-sm text-gray-600">
                                {{ selectedProject.description }}
                            </p>
                            <div class="mt-4">
                                <h4 class="text-lg font-semibold text-gray-800">
                                    Details:
                                </h4>
                                <ul class="list-inside list-disc text-sm text-gray-600">
                                    <li v-for="(detail, i) in selectedProject.details" :key="i">
                                        {{ detail }}
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-4">
                                <h4 class="text-lg font-semibold text-gray-800">
                                    Tech Stack:
                                </h4>
                                <div class="mt-2 flex flex-wrap gap-2">
                                    <span
                                        v-for="tech in selectedProject.techStack"
                                        :key="tech"
                                        class="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-800"
                                    >
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>
                            <div class="mt-4 flex space-x-2">
                                <span class="rounded-md bg-green-100 px-3 py-1 text-sm text-green-800">
                                    Frontend Contribution: {{ selectedProject.contributions.frontend }}
                                </span>
                                <span class="rounded-md bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                                    Backend Contribution: {{ selectedProject.contributions.backend }}
                                </span>
                                <span class="rounded-md bg-blue-100 px-3 py-1 text-sm text-blue-800">
                                    Team Size: {{ selectedProject.teamSize }}
                                </span>
                            </div>
                        </div>
                    </div>
                </lion-dialog>
            </div>
  
            <!-- Tab 3: Reviews -->
            <div v-if="activeTab === 2" class="tab-content transition-all duration-300 ease-in-out">
                <div class="mb-4 flex items-center">
                    <h2 class="flex-1 text-3xl font-bold text-gray-800">
                        Reviews
                    </h2>
                    <div class="ml-4 h-px w-32 bg-gray-300"></div>
                </div>
                <p class="leading-relaxed text-gray-600">
                    <app-review></app-review>
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* Add minimum height to all tab content to ensure equal height across tabs */
.tab-content {
  min-height: 500px; /* Adjust as necessary */
}
</style>
