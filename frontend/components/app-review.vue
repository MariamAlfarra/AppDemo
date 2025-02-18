<script setup>
import { useMainStore } from "~/stores/main";
const mainStore = useMainStore();
const {user} = toRefs(mainStore);
const items = computed(() => user.value?.reviewCard);
</script>
<template>
    <div class="carousel-container">
        <UCarousel v-slot="{ item }"
                   :items="items"
                   :ui="{ item: 'basis-full' }"
                   class="overflow-hidden rounded-lg"
                   arrows>
            <img :src="item"
                 class="mx-auto w-full max-w-[500px]"
                 alt="images"
                 draggable="false">
        </UCarousel>
    </div>
</template>

