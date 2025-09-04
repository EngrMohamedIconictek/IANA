<template>
    <div class="w-full overflow-hidden">
        <!-- Desktop Table View -->
        <div class="hidden md:block">
            <div class="overflow-x-auto">
                <table class="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <thead class="bg-green-700 dark:bg-gray-700">
                        <tr>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Pillar
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Arabic Name
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Description
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Status
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr v-for="pillar in displayPillars" :key="pillar.id"
                            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <!-- Pillar Name -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900 dark:text-white">
                                    {{ pillar.name }}
                                </div>
                            </td>

                            <!-- Arabic Name -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900 dark:text-white text-right" dir="rtl">
                                    {{ pillar.arabicName }}
                                </div>
                            </td>

                            <!-- Description -->
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900 dark:text-white max-w-xs truncate">
                                    {{ pillar.description }}
                                </div>
                            </td>

                            <!-- Status -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                                    :class="{
                                        'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400': pillar.status === 'Active',
                                        'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400': pillar.status === 'Inactive'
                                    }">
                                    {{ pillar.status }}
                                </span>
                            </td>

                            <!-- Actions -->
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center justify-center space-x-2">
                                    <button @click="editPillar(pillar)"
                                        class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Edit Pillar">
                                        <i class="iconoir-edit-pencil text-lg"></i>
                                    </button>
                                    <button @click="deletePillar(pillar)"
                                        class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Delete Pillar">
                                        <i class="iconoir-trash text-lg"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <!-- Empty state row when no pillars -->
                        <tr v-if="displayPillars.length === 0">
                            <td colspan="5" class="px-6 py-12 text-center">
                                <div class="text-gray-400 dark:text-gray-500">
                                    <i class="pi pi-mosque text-4xl mb-4"></i>
                                    <p class="text-lg font-medium">No pillars found</p>
                                    <p class="text-sm">Start by adding the Five Pillars of Islam</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Mobile Card View -->
        <div class="md:hidden space-y-4">
            <div v-for="pillar in displayPillars" :key="pillar.id" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                <!-- Pillar Header with Actions -->
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                            {{ pillar.name }}
                        </h3>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1" dir="rtl">
                            {{ pillar.arabicName }}
                        </p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button @click="editPillar(pillar)"
                            class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Edit Pillar">
                            <i class="iconoir-edit-pencil text-lg"></i>
                        </button>
                        <button @click="deletePillar(pillar)"
                            class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Delete Pillar">
                            <i class="iconoir-trash text-lg"></i>
                        </button>
                    </div>
                </div>

                <!-- Pillar Details -->
                <div class="space-y-2">
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Status:</span>
                        <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                            :class="{
                                'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400': pillar.status === 'Active',
                                'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400': pillar.status === 'Inactive'
                            }">
                            {{ pillar.status }}
                        </span>
                    </div>

                    <div class="mt-3">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400 block mb-1">Description:</span>
                        <p class="text-sm text-gray-900 dark:text-white">{{ pillar.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Empty State -->
        <div v-if="displayPillars.length === 0" class="md:hidden">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                <div class="text-gray-400 dark:text-gray-500">
                    <i class="pi pi-mosque text-4xl mb-4"></i>
                    <p class="text-lg font-medium">No pillars found</p>
                    <p class="text-sm">Start by adding the Five Pillars of Islam</p>
                </div>
            </div>
        </div>

        <!-- Delete Confirmation Modal -->
        <DeleteRecode v-model="showDeleteModal" :loading="isDeleting" @confirm="confirmDelete"
            @update:modelValue="cancelDelete" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DeleteRecode from '@/layouts/dashboard/DeleteRecode.vue'

// Default dummy data for Five Pillars of Islam
const defaultPillars = [
    {
        id: 1,
        name: "Shahada",
        arabicName: "الشهادة",
        description: "Declaration of faith - There is no god but Allah, and Muhammad is the messenger of Allah.",
        status: "Active"
    },
    {
        id: 2,
        name: "Salah",
        arabicName: "الصلاة",
        description: "Prayer - Five daily prayers performed at specific times throughout the day.",
        status: "Active"
    },
    {
        id: 3,
        name: "Zakat",
        arabicName: "الزكاة",
        description: "Charity - Giving a portion of one's wealth to those in need.",
        status: "Active"
    },
    {
        id: 4,
        name: "Sawm",
        arabicName: "الصوم",
        description: "Fasting - Fasting during the month of Ramadan from dawn to sunset.",
        status: "Active"
    },
    {
        id: 5,
        name: "Hajj",
        arabicName: "الحج",
        description: "Pilgrimage - Journey to Mecca that every Muslim must make at least once in their lifetime if able.",
        status: "Active"
    }
]

const props = defineProps({
    pillars: {
        type: Array,
        default: () => []
    }
})

// Emits
const emit = defineEmits(['edit', 'delete'])

// Local reactive data for managing pillars
const localPillars = ref([...defaultPillars])

// Computed property to display pillars
const displayPillars = computed(() => {
    return props.pillars.length > 0 ? props.pillars : localPillars.value
})

// Modal state management
const showDeleteModal = ref(false)
const selectedPillar = ref(null)
const isDeleting = ref(false)

// Methods
const editPillar = (pillar) => {
    emit('edit', pillar)
    console.log('Edit pillar:', pillar)
}

const deletePillar = (pillar) => {
    selectedPillar.value = pillar
    showDeleteModal.value = true
}

const confirmDelete = async () => {
    if (!selectedPillar.value) return

    isDeleting.value = true

    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Remove pillar from local array
        const index = localPillars.value.findIndex(pillar => pillar.id === selectedPillar.value.id)
        if (index > -1) {
            localPillars.value.splice(index, 1)
        }

        // Emit delete event to parent component with the pillar ID
        emit('delete', selectedPillar.value.id)

        // Close modal and reset state
        showDeleteModal.value = false
        selectedPillar.value = null

        console.log('Pillar deleted successfully:', selectedPillar.value)
    } catch (error) {
        console.error('Error deleting pillar:', error)
    } finally {
        isDeleting.value = false
    }
}

const cancelDelete = () => {
    showDeleteModal.value = false
    selectedPillar.value = null
}
</script>