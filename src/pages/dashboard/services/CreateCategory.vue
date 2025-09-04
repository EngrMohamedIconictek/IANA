<template>
    <PageToolbar title="Add Service Category" v-model:modelValue="search" :showSearch="false" :showView="true" :showExcel="false" :showAdd="false"
        @view="goBackToList" />
    <div class="max-w-4xl mx-auto">
        <CategoryForm />
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import CategoryForm from '@/components/dashboard/services/CategoryForm.vue'

const router = useRouter()
const search = ref('')

const goBackToList = () => {
    router.push('/dashboard/services/category')
}

const createService = () => {
    // Logic to create the service
    console.log('Service created:', service.value)
    // You can add API call here
    // After successful creation, redirect back to services list
    router.push('/dashboard/services/category')
}

</script>