<template>
  <div class="bg-white text-[#4A4A4A] dark:bg-slate-900 text-lg dark:text-white" >
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/layouts/Header.vue';
import Footer from '@/layouts/Footer.vue';
</script>
