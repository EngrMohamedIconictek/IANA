<template>
    <PageToolbar title="Fatwa Categories" v-model:modelValue="search" :showSearch="true" :showView="false"
        :showExcel="true" :showAdd="true" :useModal="true" @add="openAddModal" />

    <div>
        <FatwaCategoriesRowCard @view="openViewModal" @edit="openEditModal" @delete="handleDelete" />
    </div>

    <Dialog v-model:visible="showModal" modal :header="modalHeader" :style="{ width: isViewMode ? '60rem' : '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <FatwaCategoryView v-if="isViewMode" :categoryData="selectedCategory" @edit="openEditModal"
            @close="closeModal" />
        <FatwaCategoriesFrom v-else :fatwaData="selectedCategory" :isEditMode="isEditMode" :isViewMode="isViewMode"
            @close="closeModal" @save="handleSave" />
    </Dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import FatwaCategoriesFrom from '@/components/dashboard/fatwas/FatwaCategoriesFrom.vue'
import FatwaCategoriesRowCard from '@/components/dashboard/fatwas/FatwaCategoriesRowCard.vue'
import FatwaCategoryView from '@/components/dashboard/fatwas/FatwaCategoryView.vue'

const search = ref('')
const showModal = ref(false)
const isEditMode = ref(false)
const isViewMode = ref(false)
const selectedCategory = ref(null)

// Computed modal header based on mode
const modalHeader = computed(() => {
    if (isViewMode.value) return 'View Fatwa Category'
    if (isEditMode.value) return 'Edit Fatwa Category'
    return 'Add Fatwa Category'
})

const openAddModal = () => {
    isEditMode.value = false
    isViewMode.value = false
    selectedCategory.value = null
    showModal.value = true
}

const openViewModal = (category) => {
    isEditMode.value = false
    isViewMode.value = true
    selectedCategory.value = category
    showModal.value = true
}

const openEditModal = (category) => {
    isEditMode.value = true
    isViewMode.value = false
    selectedCategory.value = category
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
    selectedCategory.value = null
    isEditMode.value = false
    isViewMode.value = false
}

const handleSave = (categoryData) => {
    console.log('Saving category:', categoryData)
    // Here you would typically save to API
    closeModal()
}

const handleDelete = (categoryId) => {
    console.log('Deleting category:', categoryId)
}
</script>