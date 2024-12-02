<script setup>
import { useMainStore } from "~/stores/main";

const mainStore = useMainStore();
const {isModalVisible} = toRefs(mainStore);
const props = defineProps({
    tabs: {
        type: Array,
        required: true
    },
    modelValue: {
        type: Number,
        default: 0
    }
});

const selectTab = (index) => {
    useMainStore().setActiveTab(index);
};
</script>
<template>
    <div class="flex flex-col rounded-lg shadow-lg">
        <div class="flex items-center justify-end gap-2 rounded-md bg-white p-1">
            <lion-tabs class="flex gap-2">
                <lion-button
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :slot="'tab'"
                    class="ml-4 flex w-16 flex-col items-center justify-center rounded-md border border-gray-400 p-2 text-sm text-gray-700 hover:bg-orange-600/20"
                    :class="{
                        'bg-orange-400/20': modelValue === index, 
                        'text-blue-500': modelValue === index 
                    }"
                    @click="selectTab(index)"
                >
                    <div class="flex flex-col items-center">
                        <UIcon :name="tab.icon" class="size-3 text-gray-500" />
                        <span class="text-center text-xs">{{ tab.title }}</span>
                    </div> 
                </lion-button>
                <p v-for="(tab, index) in tabs"
                   :key="index"
                   :slot="'panel'"></p>
            </lion-tabs>
            <lion-button
                class="flex w-16 flex-col items-center justify-center rounded-md border border-gray-400 p-2 text-sm text-gray-700 hover:bg-slate-200"
                @click="isModalVisible = true"
            >
                <div class="flex flex-col items-center">
                    <UIcon name="i-heroicons-arrow-right-start-on-rectangle" class="size-3 text-gray-500" />
                    <span class="text-center text-xs">Logout</span>
                </div> 
            </lion-button>
        </div>
    </div>
</template>