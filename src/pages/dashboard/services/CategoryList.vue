<template>
    <PageToolbar title="Categories List" v-model:modelValue="search" :showSearch="true" :showView="false" :showExcel="true"
        createRoute="/dashboard/services/create_category" />
    <CategoryRowCard />
</template>

<script setup>
import { ref } from 'vue'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import CategoryRowCard from '@/components/dashboard/services/CategoryRowCard.vue'

const search = ref('')

</script>