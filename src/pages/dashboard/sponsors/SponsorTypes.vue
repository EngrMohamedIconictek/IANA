<template>
    <PageToolbar title="Sponsor Types List" v-model:modelValue="search" :showSearch="true" :showView="false"
        :showExcel="true" :showAdd="true" :useModal="true" @add="openAddModal" />

    <div>
        <SponsorTypesRowCard :sponsorTypes="sponsorTypes" @edit="openEditModal" @delete="handleDelete" />
    </div>

    <Dialog v-model:visible="showModal" modal :header="modalHeader" :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <SponsorTypeForm :isEditMode="isEditMode" :sponsorTypeData="selectedSponsorType"
            @save="handleSave" @close="closeModal" />
    </Dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import SponsorTypesRowCard from '@/components/dashboard/sponsors/SponsorTypesRowCard.vue'
import SponsorTypeForm from '@/components/dashboard/sponsors/SponsorTypeForm.vue'

const search = ref('')
const showModal = ref(false)
const isEditMode = ref(false)
const selectedSponsorType = ref(null)

// Sponsor types data
const sponsorTypes = ref([
    {
        id: 1,
        name: "Platinum Sponsor",
        content: "Premium level sponsorship with maximum visibility and benefits including logo placement, speaking opportunities, and exclusive networking events.",
        createdAt: "2024-01-15",
        updatedAt: "2024-01-20"
    },
    {
        id: 2,
        name: "Gold Sponsor",
        content: "High-level sponsorship package with significant visibility, logo placement, and access to networking opportunities.",
        createdAt: "2024-01-10",
        updatedAt: "2024-01-18"
    },
    {
        id: 3,
        name: "Silver Sponsor",
        content: "Standard sponsorship level with good visibility and basic benefits including logo placement and event access.",
        createdAt: "2024-01-05",
        updatedAt: "2024-01-12"
    },
    {
        id: 4,
        name: "Bronze Sponsor",
        content: "Entry-level sponsorship with basic visibility and essential benefits for smaller organizations.",
        createdAt: "2024-01-08",
        updatedAt: "2024-01-22"
    },
    {
        id: 5,
        name: "Community Partner",
        content: "Community-focused partnership with local organizations and non-profits for mutual benefit and community engagement.",
        createdAt: "2024-01-12",
        updatedAt: "2024-01-15"
    }
])

// Computed modal header based on mode
const modalHeader = computed(() => {
    if (isEditMode.value) return 'Edit Sponsor Type'
    return 'Add Sponsor Type'
})

const openAddModal = () => {
    isEditMode.value = false
    selectedSponsorType.value = null
    showModal.value = true
}

const openEditModal = (sponsorType) => {
    isEditMode.value = true
    selectedSponsorType.value = sponsorType
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
    selectedSponsorType.value = null
    isEditMode.value = false
}

const handleSave = (sponsorTypeData) => {
    console.log('Saving sponsor type:', sponsorTypeData)
    
    if (isEditMode.value) {
        // Update existing sponsor type
        const index = sponsorTypes.value.findIndex(st => st.id === sponsorTypeData.id)
        if (index > -1) {
            sponsorTypes.value[index] = { ...sponsorTypeData }
        }
    } else {
        // Add new sponsor type
        const newId = Math.max(...sponsorTypes.value.map(st => st.id)) + 1
        sponsorTypes.value.push({ ...sponsorTypeData, id: newId })
    }
    
    closeModal()
}

const handleDelete = (sponsorTypeId) => {
    console.log('Deleting sponsor type:', sponsorTypeId)
    
    // Remove sponsor type from array
    const index = sponsorTypes.value.findIndex(st => st.id === sponsorTypeId)
    if (index > -1) {
        sponsorTypes.value.splice(index, 1)
    }
}
</script>