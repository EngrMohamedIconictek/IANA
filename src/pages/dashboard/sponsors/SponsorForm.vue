<template>
    <PageToolbar title="Sponsor Form List" v-model:modelValue="search" :showSearch="true" :showView="false"
        :showExcel="true" :showAdd="true" :useModal="true" @add="openAddModal" />

    <div>
        <SponsorsFormRowCard :sponsorForms="sponsorForms" @edit="openEditModal" @delete="handleDelete" />
    </div>

    <Dialog v-model:visible="showModal" modal :header="modalHeader" :style="{ width: '35rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <AddSponsorsForm :isEditMode="isEditMode" :sponsorFormData="selectedSponsorForm"
            @save="handleSave" @close="closeModal" />
    </Dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import SponsorsFormRowCard from '@/components/dashboard/sponsors/SponsorsFormRowCard.vue'
import AddSponsorsForm from '@/components/dashboard/sponsors/AddSponsorsForm.vue'

const search = ref('')
const showModal = ref(false)
const isEditMode = ref(false)
const selectedSponsorForm = ref(null)

// Sponsor forms data
const sponsorForms = ref([
    {
        id: 1,
        name: "Iana Annual Banquet 2019",
        date: "2019-06-10",
        status: "No"
    },

])

// Computed modal header based on mode
const modalHeader = computed(() => {
    if (isEditMode.value) return 'Edit Sponsor Form'
    return 'Add Sponsor Form'
})

const openAddModal = () => {
    isEditMode.value = false
    selectedSponsorForm.value = null
    showModal.value = true
}

const openEditModal = (sponsorForm) => {
    isEditMode.value = true
    selectedSponsorForm.value = sponsorForm
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
    selectedSponsorForm.value = null
    isEditMode.value = false
}

const handleSave = (sponsorFormData) => {
    console.log('Saving sponsor form:', sponsorFormData)
    
    if (isEditMode.value) {
        // Update existing sponsor form
        const index = sponsorForms.value.findIndex(sf => sf.id === sponsorFormData.id)
        if (index > -1) {
            sponsorForms.value[index] = { ...sponsorFormData }
        }
    } else {
        // Add new sponsor form
        const newId = Math.max(...sponsorForms.value.map(sf => sf.id)) + 1
        sponsorForms.value.push({ ...sponsorFormData, id: newId })
    }
    
    closeModal()
}

const handleDelete = (sponsorFormId) => {
    console.log('Deleting sponsor form:', sponsorFormId)
    
    // Remove sponsor form from array
    const index = sponsorForms.value.findIndex(sf => sf.id === sponsorFormId)
    if (index > -1) {
        sponsorForms.value.splice(index, 1)
    }
}
</script>