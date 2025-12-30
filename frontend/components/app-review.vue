<script setup>
import { useMainStore } from "~/stores/main";
const mainStore = useMainStore();
const {user} = toRefs(mainStore);
const items = computed(() => user.value?.reviewCard || []);

onMounted(() => {
    const scrollable = document.querySelector(".carousel-container .overflow-x-auto");
    if (scrollable && !scrollable.hasAttribute("tabindex")) {
        scrollable.setAttribute("tabindex", "0");
        scrollable.setAttribute("role", "region");
        scrollable.setAttribute("aria-label", "Review images carousel");
    }
});
</script>
<template>
    <div class="carousel-container" 
         role="region" 
         aria-label="Customer reviews carousel">
        <UCarousel v-slot="{ item }"
                   :items="items"
                   :ui="{ 
                       item: 'basis-full',
                       container: 'focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg'
                   }"
                   class="overflow-hidden rounded-lg"
                   arrows>
            <img :src="item"
                 class="mx-auto w-full max-w-[500px]"
                 :alt="`Review image ${items.indexOf(item) + 1} of ${items.length}`"
                 draggable="false">
        </UCarousel>
    </div>
</template>
<style scoped>
.carousel-container :deep(.overflow-x-auto:focus) {
    outline: 2px solid #22c55e;
    outline-offset: -2px;
}
</style>

