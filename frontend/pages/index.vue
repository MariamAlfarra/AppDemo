<script setup>
definePageMeta({
  middleware: 'auth',
});

const logout = () => {
  localStorage.setItem('loggedIn', 'false');
  window.location.href = '/login';
};

</script>

<template>
  <div>
    <h1>Welcome to the Home Page</h1>
    <button @click="logout">Logout</button>
  </div>
</template>
