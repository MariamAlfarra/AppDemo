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
    <lion-dialog
        v-if="isModalVisible"
        title="Confirm Logout"
        :show-close="false"
        class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
    >
        <div class="flex items-center justify-center">
            <!-- Adjusting width (max-w-lg) for larger size -->
            <div class="w-full max-w-lg rounded-lg bg-gradient-to-r from-pink-500/80 to-orange-500/80  p-8 text-sm">
                <h2 class="mb-4 text-center text-xl font-semibold text-gray-800">
                    Confirm Logout
                </h2>
                <p class="mb-6 text-center text-white">
                    Are you sure you want to log out?
                </p>

                <div class="flex justify-center gap-4">
                    <lion-button 
                        class="rounded-md bg-blue-600 px-6 py-2 text-white transition duration-200 hover:bg-blue-700"
                        @click="logout(router)"
                    >
                        Yes, Log Out
                    </lion-button>
                    <lion-button 
                        class="rounded-md  bg-gray-400 px-6 py-2 text-sm text-white transition duration-200 hover:bg-gray-500"
                        @click="closeModal"
                    >
                        Cancel
                    </lion-button>
                </div>
            </div>
        </div>
    </lion-dialog>
</template>
<style lang="postcss">
</style>