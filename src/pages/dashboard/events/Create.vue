<template>
    <PageToolbar title="Events Add" v-model:modelValue="search" :showSearch="false" :showView="true" :showExcel="false" :showAdd="false"
        @view="goBackToList" />
    <EventForm />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import EventForm from '@/components/dashboard/events/EventForm.vue'

const router = useRouter()
const search = ref('')

const goBackToList = () => {
    router.push('/events')
}

</script>