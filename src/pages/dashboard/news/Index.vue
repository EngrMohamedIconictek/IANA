<template>
    <PageToolbar title="News" v-model:modelValue="search" :showSearch="false" :showView="false" :showExcel="false"
        createRoute="/news/create" />

    <div class="mt-6">
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">News Articles</h2>
            <p class="text-gray-500 dark:text-gray-400">News articles will be displayed here...</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'

const search = ref('')

</script>
