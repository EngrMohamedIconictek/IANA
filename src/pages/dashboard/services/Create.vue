<template>
    <PageToolbar title="Add Service" v-model:modelValue="search" :showSearch="false" :showView="true" :showExcel="false" :showAdd="false"
        @view="goBackToList" />
    
    <div class="max-w-4xl mx-auto">
        <ServicesFrom />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import ServicesFrom from '@/components/dashboard/services/ServicesFrom.vue'

const router = useRouter()
const search = ref('')

const service = ref({
    title: '',
    description: '',
    category: '',
    active: true
})

const goBackToList = () => {
    router.push('/dashboard/services')
}

const createService = () => {
    // Logic to create the service
    console.log('Service created:', service.value)
    // You can add API call here
    // After successful creation, redirect back to services list
    router.push('/dashboard/services')
}
</script>
