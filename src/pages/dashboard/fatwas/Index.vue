<template>
    <PageToolbar title="Fatwa List" v-model:modelValue="search" :showSearch="true" :showView="false" :showExcel="true"
        :showAdd="true" :useModal="true" @add="openAddModal" />

    <div>
        <FatwaRowCard @edit="openEditModal" @delete="handleDelete" />
    </div>

    <Dialog v-model:visible="showModal" modal :header="isEditMode ? 'Edit Fatwa' : 'Add Fatwa'" :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <FatwaForm :fatwaData="selectedFatwa" :isEditMode="isEditMode" @close="closeModal" @save="handleSave" />
    </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import FatwaForm from '@/components/dashboard/fatwas/FatwaForm.vue'
import FatwaRowCard from '@/components/dashboard/fatwas/FatwaRowCard.vue'

const search = ref('')
const showModal = ref(false)
const isEditMode = ref(false)
const selectedFatwa = ref(null)

const openAddModal = () => {
    isEditMode.value = false
    selectedFatwa.value = null
    showModal.value = true
}

const openEditModal = (fatwa) => {
    isEditMode.value = true
    selectedFatwa.value = fatwa
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
    selectedFatwa.value = null
    isEditMode.value = false
}

const handleSave = (fatwaData) => {
    console.log('Saving fatwa:', fatwaData)
    // Here you would typically save to API
    closeModal()
}

const handleDelete = (fatwaId) => {
    console.log('Deleting fatwa:', fatwaId)
}
</script>