<script setup>
import { useMainStore } from "~/stores/main";

const mainStore = useMainStore();
const {isModalVisible , activeTab, user, leftSideModal} = toRefs(mainStore);
const props = defineProps({
    tabs: {
        type: Array,
        required: true
    }
});

const selectTab = (index) => {
    useMainStore().setActiveTab(index);
};

const showLeftCardModal =( ) => {
    leftSideModal.value = true;
};
</script>
<template>
    <div class="flex flex-col rounded-lg shadow-lg">
        <div class="relative flex items-center justify-end gap-2 rounded-md bg-white p-1">
            <button class="absolute left-2 flex cursor-pointer items-center justify-center lg:hidden" @click="showLeftCardModal">
                <div class="flex items-center justify-center rounded-full bg-green-500 p-2 text-lg text-white">
                    {{ user?.firstName[0] }}{{ user?.lastName[0] }}
                </div>
            </button>
            <div class="flex gap-2">
                <UButton
                    v-for="(tab) in props.tabs"
                    :key="tab.key"
                    color="gray"
                    class="flex w-16 flex-col items-center p-2 transition-all duration-300"
                    :class="activeTab === tab.key ? 'text-primary-500 border-b-2 border-primary-500' : 'text-gray-500'"
                    @click="selectTab(tab.key)"
                >
                    <UIcon :name="tab.icon" class="size-3" />
                    <span class="text-xs">{{ tab.title }}</span>
                </UButton>
            </div>
            <UButton
                size="sm"
                color="gray"
                class="flex w-16 flex-col items-center justify-center rounded-md p-2 text-sm "
                @click="isModalVisible = true"
            >
                <div class="flex flex-col items-center">
                    <UIcon
                        name="i-heroicons-arrow-right-start-on-rectangle"
                        class="size-3 text-gray-500"
                    />
                    <span class="text-center text-xs">Logout</span>
                </div>
            </UButton>
        </div>
    </div>
</template>