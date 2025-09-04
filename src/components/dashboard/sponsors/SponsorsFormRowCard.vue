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
                                Title
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Date
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
                        <tr v-for="sponsorForm in displaySponsorForms" :key="sponsorForm.id"
                            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <!-- Title -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900 dark:text-white">
                                    {{ sponsorForm.name }}
                                </div>
                            </td>

                            <!-- Date -->
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900 dark:text-white">
                                    {{ sponsorForm.date || 'N/A' }}
                                </div>
                            </td>

                            <!-- Status -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                    :class="sponsorForm.status === 'Yes' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'">
                                    {{ sponsorForm.status || 'No' }}
                                </span>
                            </td>

                            <!-- Actions -->
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center justify-center space-x-2">
                                    <button @click="editSponsorType(sponsorForm)"
                                        class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Edit Sponsor Form">
                                        <i class="iconoir-edit-pencil text-lg"></i>
                                    </button>
                                    <button @click="deleteSponsorType(sponsorForm)"
                                        class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Delete Sponsor Form">
                                        <i class="iconoir-trash text-lg"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <!-- Empty state row when no sponsor forms -->
                        <tr v-if="displaySponsorForms.length === 0">
                            <td colspan="4" class="px-6 py-12 text-center">
                                <div class="text-gray-400 dark:text-gray-500">
                                    <i class="iconoir-category text-4xl mb-4"></i>
                                    <p class="text-lg font-medium">No sponsor forms found</p>
                                    <p class="text-sm">Start by adding your first sponsor form</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Mobile Card View -->
        <div class="md:hidden space-y-4">
            <div v-for="sponsorForm in displaySponsorForms" :key="sponsorForm.id" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                <!-- Sponsor Form Header with Actions -->
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                            {{ sponsorForm.name }}
                        </h3>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button @click="editSponsorType(sponsorForm)"
                            class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Edit Sponsor Form">
                            <i class="iconoir-edit-pencil text-lg"></i>
                        </button>
                        <button @click="deleteSponsorType(sponsorForm)"
                            class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Delete Sponsor Form">
                            <i class="iconoir-trash text-lg"></i>
                        </button>
                    </div>
                </div>

                <!-- Sponsor Form Details -->
                <div class="space-y-2">
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Date:</span>
                        <span class="text-sm text-gray-900 dark:text-white">{{ sponsorForm.date || 'N/A' }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Status:</span>
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                            :class="sponsorForm.status === 'Yes' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'">
                            {{ sponsorForm.status || 'No' }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Empty State -->
        <div v-if="displaySponsorForms.length === 0" class="md:hidden">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                <div class="text-gray-400 dark:text-gray-500">
                    <i class="iconoir-category text-4xl mb-4"></i>
                    <p class="text-lg font-medium">No sponsor forms found</p>
                    <p class="text-sm">Start by adding your first sponsor form</p>
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
    sponsorForms: {
        type: Array,
        default: () => []
    }
})

// Computed property to display sponsor forms
const displaySponsorForms = computed(() => {
    return props.sponsorForms
})

// Emits
const emit = defineEmits(['edit', 'delete'])

// Modal state management
const showDeleteModal = ref(false)
const selectedSponsorType = ref(null)
const isDeleting = ref(false)

// Methods
const editSponsorType = (sponsorForm) => {
    emit('edit', sponsorForm)
    console.log('Edit sponsor form:', sponsorForm)
}

const deleteSponsorType = (sponsorForm) => {
    selectedSponsorType.value = sponsorForm
    showDeleteModal.value = true
}

const confirmDelete = async () => {
    if (!selectedSponsorType.value) return

    isDeleting.value = true

    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Emit delete event to parent component with the sponsor form ID
        emit('delete', selectedSponsorType.value.id)

        // Close modal and reset state
        showDeleteModal.value = false
        selectedSponsorType.value = null

        console.log('Sponsor form deleted successfully:', selectedSponsorType.value?.id)
    } catch (error) {
        console.error('Error deleting sponsor form:', error)
    } finally {
        isDeleting.value = false
    }
}

const cancelDelete = () => {
    showDeleteModal.value = false
    selectedSponsorType.value = null
}
</script>