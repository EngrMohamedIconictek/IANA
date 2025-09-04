<template>
    <PageToolbar title="Islam List" v-model:modelValue="search" :showSearch="true" :showView="false"
        :showExcel="true" :showAdd="true" :useModal="true" @add="openAddModal" />
      <div>
        <SixPillarIslamRowCard :pillars="filteredPillars" @edit="editPillar" @delete="deletePillar" />
      </div>
      <Dialog v-model:visible="showModal" modal :header="modalHeader" :style="{ width: '50rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <SixPillarIslamFrom :isEditMode="isEditMode" :sixPillarIslamData="selectedSixPillarIslam"
            @save="handleSave" @close="closeModal" />
        </Dialog>
</template>
<script setup>
import { ref, computed } from 'vue'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import SixPillarIslamRowCard from '@/components/dashboard/islam/SixPillarIslamRowCard.vue'
import SixPillarIslamFrom from '@/components/dashboard/islam/SixPillarIslamFrom.vue'
import Dialog from 'primevue/dialog'

// Search functionality
const search = ref('')

// Modal state
const showModal = ref(false)
const isEditMode = ref(false)
const selectedSixPillarIslam = ref(null)

// Sample data for Six Pillars of Islam
const pillars = ref([
    {
        id: 1,
        name: "Shahada",
        arabicName: "الشهادة",
        description: "Declaration of faith - There is no god but Allah, and Muhammad is the messenger of Allah.",
        status: "Active",
        order: 1
    },
    {
        id: 2,
        name: "Salah",
        arabicName: "الصلاة",
        description: "Prayer - Five daily prayers performed at specific times throughout the day.",
        status: "Active",
        order: 2
    },
    {
        id: 3,
        name: "Zakat",
        arabicName: "الزكاة",
        description: "Charity - Giving a portion of one's wealth to those in need.",
        status: "Active",
        order: 3
    },
    {
        id: 4,
        name: "Sawm",
        arabicName: "الصوم",
        description: "Fasting - Fasting during the month of Ramadan from dawn to sunset.",
        status: "Active",
        order: 4
    },
    {
        id: 5,
        name: "Hajj",
        arabicName: "الحج",
        description: "Pilgrimage - Journey to Mecca that every Muslim must make at least once in their lifetime if able.",
        status: "Active",
        order: 5
    },
    {
        id: 6,
        name: "Jihad",
        arabicName: "الجهاد",
        description: "Struggle - The struggle to maintain faith and defend Islam, both internally and externally.",
        status: "Active",
        order: 6
    }
])

// Computed properties
const modalHeader = computed(() => {
    return isEditMode.value ? 'Edit Islamic Pillars ' : 'Add New Islamic Pillars '
})

const filteredPillars = computed(() => {
    if (!search.value) return pillars.value
    return pillars.value.filter(pillar => 
        pillar.name.toLowerCase().includes(search.value.toLowerCase()) ||
        pillar.arabicName.includes(search.value) ||
        pillar.description.toLowerCase().includes(search.value.toLowerCase())
    )
})

// Modal functions
const openAddModal = () => {
    isEditMode.value = false
    selectedSixPillarIslam.value = null
    showModal.value = true
}

const editPillar = (pillar) => {
    isEditMode.value = true
    selectedSixPillarIslam.value = { ...pillar }
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
    isEditMode.value = false
    selectedSixPillarIslam.value = null
}

const handleSave = (pillarData) => {
    if (isEditMode.value) {
        // Update existing pillar
        const index = pillars.value.findIndex(p => p.id === pillarData.id)
        if (index > -1) {
            pillars.value[index] = { ...pillarData }
        }
    } else {
        // Add new pillar
        const newId = Math.max(...pillars.value.map(p => p.id)) + 1
        pillars.value.push({ ...pillarData, id: newId })
    }
    closeModal()
}

const deletePillar = (pillarId) => {
    const index = pillars.value.findIndex(p => p.id === pillarId)
    if (index > -1) {
        pillars.value.splice(index, 1)
    }
}

</script>