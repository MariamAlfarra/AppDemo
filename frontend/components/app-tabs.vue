<script setup>
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

// Emit the selected tab index
const emit = defineEmits();

const selectTab = (index) => {
    emit("update:modelValue", index);
};
</script>
<template>
    <div class="flex flex-col rounded-lg shadow-lg">
        <div class="flex items-center justify-end gap-2 space-x-4 rounded-md bg-white p-1">
            <lion-tabs class="flex gap-2">
                <!-- Loop through tabs and render button for each -->
                <lion-button
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :slot="'tab'"
                    class="ml-3 flex items-center rounded-md border border-gray-400 p-2 text-sm text-gray-700 hover:bg-slate-200"
                    
                    @click="selectTab(index)"
                >
                    <!-- Icon for the tab -->
                    <UIcon :name="tab.icon" class="mr-2 text-gray-500" />
                    {{ tab.title }}
                </lion-button>
            </lion-tabs>
        </div>
    </div>
</template>