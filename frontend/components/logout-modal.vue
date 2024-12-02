<script setup>
import { useMainStore } from "~/stores/main";

const mainStore = useMainStore();
const router = useRouter();
const {isModalVisible, logout} = toRefs(mainStore);

const closeModal = () => {
    isModalVisible.value = false;
};
</script>
<template>
    <UModal v-model="isModalVisible" title="Confirm Logout" :show-close="false">
        <div class="text-center">
            <p>Are you sure you want to log out?</p>
            <div class="mt-4 flex justify-center space-x-4">
                <button 
                    class="rounded-md bg-blue-600 p-2 text-white"
                    @click="logout(router)"
                >
                    Yes, Log Out
                </button>
                <button 
                    class="rounded-md bg-gray-500 p-2 text-white"
                    @click="closeModal"
                >
                    Cancel
                </button>
            </div>
        </div>
    </UModal>
</template>