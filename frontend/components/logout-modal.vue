<script setup>
import { useMainStore } from "~/stores/main";

const mainStore = useMainStore();
const router = useRouter();
const { logoutUser } = useMainStore();
const {isModalVisible} = toRefs(mainStore);

const closeModal = () => {
    isModalVisible.value = false;
};

const logout = () => {
    logoutUser();
    isModalVisible.value=false;
    router.push("/login");

};
</script>
<template>
    <UModal v-model="isModalVisible">
        <div class="flex items-center justify-center bg-gray-800">
            <div class="w-full max-w-lg rounded-lg p-8 text-sm">
                <h2 class="mb-4 text-center text-xl font-semibold text-gray-300">
                    Confirm Logout
                </h2>
                <p class="mb-6 text-center text-white">
                    Are you sure you want to log out ?
                </p>

                <div class="flex justify-center gap-4">
                    <UButton
                        class="rounded-md px-6 py-2 text-white dark:bg-green-600"
                        @click="logout"
                    >
                        <span class="text-gray-200">Yes, Log Out</span>
                    </UButton>
                    <UButton 
                        variant="solid"
                        color="gray"
                        class="rounded-md bg-gray-600 px-6 py-2 ring-gray-600 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500"
                        @click="closeModal"
                    >
                        <span class="text-white">Cancel</span>
                    </UButton>
                </div>
            </div>
        </div>
    </UModal>
</template>
<style lang="postcss">
</style>