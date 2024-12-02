<script setup>
definePageMeta({
    middleware: "auth"
});
</script>
<template>
    <div class="flex h-screen w-screen flex-col items-center justify-center  bg-gradient-to-r from-pink-400/80 to-orange-400/80">
        <login-modal></login-modal>
        <app-footer></app-footer>
    </div>
</template> 
<style lang="postcss">
</style>