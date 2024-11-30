<script setup>
definePageMeta({
    middleware: "auth"
});
</script>
<template>
    <div class="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
        <login-modal></login-modal>
    </div>  
</template> 
<style lang="postcss">
</style>