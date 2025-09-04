<template>
    <PageToolbar title="Services List" v-model:modelValue="search" :showSearch="true" :showView="false" :showExcel="true"
        createRoute="/dashboard/services/create" />
    <ServicesRowCard />
</template>

<script setup>
import { ref } from 'vue'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import ServicesRowCard from '@/components/dashboard/services/ServicesRowCard.vue';

const search = ref('')

</script>
