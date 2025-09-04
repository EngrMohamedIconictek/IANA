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
                                Name
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Content
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr v-for="sponsorType in displaySponsorTypes" :key="sponsorType.id"
                            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <!-- Name -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900 dark:text-white">
                                    {{ sponsorType.name }}
                                </div>
                            </td>

                            <!-- Content -->
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900 dark:text-white max-w-xs truncate">
                                    {{ sponsorType.content }}
                                </div>
                            </td>

                            <!-- Actions -->
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center justify-center space-x-2">
                                    <button @click="editSponsorType(sponsorType)"
                                        class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Edit Sponsor Type">
                                        <i class="iconoir-edit-pencil text-lg"></i>
                                    </button>
                                    <button @click="deleteSponsorType(sponsorType)"
                                        class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Delete Sponsor Type">
                                        <i class="iconoir-trash text-lg"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <!-- Empty state row when no sponsor types -->
                        <tr v-if="displaySponsorTypes.length === 0">
                            <td colspan="3" class="px-6 py-12 text-center">
                                <div class="text-gray-400 dark:text-gray-500">
                                    <i class="iconoir-category text-4xl mb-4"></i>
                                    <p class="text-lg font-medium">No sponsor types found</p>
                                    <p class="text-sm">Start by adding your first sponsor type</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Mobile Card View -->
        <div class="md:hidden space-y-4">
            <div v-for="sponsorType in displaySponsorTypes" :key="sponsorType.id" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                <!-- Sponsor Type Header with Actions -->
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                            {{ sponsorType.name }}
                        </h3>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button @click="editSponsorType(sponsorType)"
                            class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Edit Sponsor Type">
                            <i class="iconoir-edit-pencil text-lg"></i>
                        </button>
                        <button @click="deleteSponsorType(sponsorType)"
                            class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Delete Sponsor Type">
                            <i class="iconoir-trash text-lg"></i>
                        </button>
                    </div>
                </div>

                <!-- Sponsor Type Details -->
                <div class="space-y-2">
                    <div class="flex justify-between items-start">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Content:</span>
                        <span class="text-sm text-gray-900 dark:text-white text-right max-w-48">{{ sponsorType.content }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Empty State -->
        <div v-if="displaySponsorTypes.length === 0" class="md:hidden">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                <div class="text-gray-400 dark:text-gray-500">
                    <i class="iconoir-category text-4xl mb-4"></i>
                    <p class="text-lg font-medium">No sponsor types found</p>
                    <p class="text-sm">Start by adding your first sponsor type</p>
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

const props = defineProps({
    sponsorTypes: {
        type: Array,
        default: () => []
    }
})

// Computed property to display sponsor types
const displaySponsorTypes = computed(() => {
    return props.sponsorTypes
})

// Emits
const emit = defineEmits(['edit', 'delete'])

// Modal state management
const showDeleteModal = ref(false)
const selectedSponsorType = ref(null)
const isDeleting = ref(false)

// Methods
const editSponsorType = (sponsorType) => {
    emit('edit', sponsorType)
    console.log('Edit sponsor type:', sponsorType)
}

const deleteSponsorType = (sponsorType) => {
    selectedSponsorType.value = sponsorType
    showDeleteModal.value = true
}

const confirmDelete = async () => {
    if (!selectedSponsorType.value) return

    isDeleting.value = true

    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Emit delete event to parent component with the sponsor type ID
        emit('delete', selectedSponsorType.value.id)

        // Close modal and reset state
        showDeleteModal.value = false
        selectedSponsorType.value = null

        console.log('Sponsor type deleted successfully:', selectedSponsorType.value?.id)
    } catch (error) {
        console.error('Error deleting sponsor type:', error)
    } finally {
        isDeleting.value = false
    }
}

const cancelDelete = () => {
    showDeleteModal.value = false
    selectedSponsorType.value = null
}
</script>