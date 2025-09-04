<template>
    <PageToolbar title="Add Sponsor" v-model:modelValue="search" :showSearch="false" :showView="true" :showExcel="false" :showAdd="false"
        @view="goBackToList" />
    <div class="max-w-4xl mx-auto">
        <SponsorsForm />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import SponsorsForm from '@/components/dashboard/sponsors/SponsorsForm.vue'

const router = useRouter()
const search = ref('')

const goBackToList = () => {
    router.push('/dashboard/sponsors')
}

</script>