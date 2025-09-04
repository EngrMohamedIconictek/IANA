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
                                Scholar
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Category
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
                        <tr v-for="fatwa in displayFatwas" :key="fatwa.id"
                            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <!-- Fatwa Title -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900 dark:text-white">
                                    {{ fatwa.title }}
                                </div>
                            </td>

                            <!-- Scholar -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900 dark:text-white">
                                    {{ fatwa.scholar }}
                                </div>
                            </td>

                            <!-- Category -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900 dark:text-white">
                                    {{ fatwa.category }}
                                </div>
                            </td>

                            <!-- Status -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                                    :class="fatwa.status === 'Published' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'">
                                    {{ fatwa.status }}
                                </span>
                            </td>

                            <!-- Actions -->
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center justify-center space-x-2">
                                    <button @click="editFatwa(fatwa)"
                                        class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Edit Fatwa">
                                        <i class="iconoir-edit-pencil text-lg"></i>
                                    </button>
                                    <button @click="deleteFatwa(fatwa)"
                                        class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Delete Fatwa">
                                        <i class="iconoir-trash text-lg"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <!-- Empty state row when no fatwas -->
                        <tr v-if="displayFatwas.length === 0">
                            <td colspan="5" class="px-6 py-12 text-center">
                                <div class="text-gray-400 dark:text-gray-500">
                                    <i class="iconoir-book text-4xl mb-4"></i>
                                    <p class="text-lg font-medium">No fatwas found</p>
                                    <p class="text-sm">Start by adding your first fatwa</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Mobile Card View -->
        <div class="md:hidden space-y-4">
            <div v-for="fatwa in displayFatwas" :key="fatwa.id" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                <!-- Fatwa Header with Actions -->
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                            {{ fatwa.title }}
                        </h3>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button @click="editFatwa(fatwa)"
                            class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Edit Fatwa">
                            <i class="iconoir-edit-pencil text-lg"></i>
                        </button>
                        <button @click="deleteFatwa(fatwa)"
                            class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Delete Fatwa">
                            <i class="iconoir-trash text-lg"></i>
                        </button>
                    </div>
                </div>

                <!-- Fatwa Details -->
                <div class="space-y-2">
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Scholar:</span>
                        <span class="text-sm text-gray-900 dark:text-white">{{ fatwa.scholar }}</span>
                    </div>

                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Category:</span>
                        <span class="text-sm text-gray-900 dark:text-white">{{ fatwa.category }}</span>
                    </div>

                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Status:</span>
                        <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                            :class="fatwa.status === 'Published' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'">
                            {{ fatwa.status }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Empty State -->
        <div v-if="displayFatwas.length === 0" class="md:hidden">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                <div class="text-gray-400 dark:text-gray-500">
                    <i class="iconoir-book text-4xl mb-4"></i>
                    <p class="text-lg font-medium">No fatwas found</p>
                    <p class="text-sm">Start by adding your first fatwa</p>
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

// Default dummy data
const defaultFatwas = [
    {
        id: 1,
        title: "Prayer Times During Travel",
        scholar: "Sheikh Abdullah Al-Mahmoud",
        category: "Worship",
        status: "Published"
    },
    {
        id: 2,
        title: "Zakat on Cryptocurrency",
        scholar: "Dr. Muhammad Al-Hassan",
        category: "Financial",
        status: "Draft"
    },
    {
        id: 3,
        title: "Medical Treatment During Fasting",
        scholar: "Sheikh Ahmad Al-Rashid",
        category: "Health",
        status: "Published"
    },
    {
        id: 4,
        title: "Marriage Without Guardian's Consent",
        scholar: "Dr. Fatima Al-Zahra",
        category: "Family",
        status: "Published"
    },
    {
        id: 5,
        title: "Interest in Modern Banking",
        scholar: "Sheikh Umar Al-Qadri",
        category: "Financial",
        status: "Draft"
    }
]

const props = defineProps({
    fatwas: {
        type: Array,
        default: () => []
    }
})

// Local reactive data for managing fatwas
const localFatwas = ref([...defaultFatwas])

// Use computed to return either props data or local data
const displayFatwas = computed(() => {
    return props.fatwas && props.fatwas.length > 0 ? props.fatwas : localFatwas.value
})

// Emits
const emit = defineEmits(['edit', 'delete'])

// Modal state management
const showDeleteModal = ref(false)
const selectedFatwa = ref(null)
const isDeleting = ref(false)

// Methods
const editFatwa = (fatwa) => {
    emit('edit', fatwa)
    console.log('Edit fatwa:', fatwa)
}

const deleteFatwa = (fatwa) => {
    selectedFatwa.value = fatwa
    showDeleteModal.value = true
}

const confirmDelete = async () => {
    if (!selectedFatwa.value) return

    isDeleting.value = true

    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Remove fatwa from local array
        const index = localFatwas.value.findIndex(fatwa => fatwa.id === selectedFatwa.value.id)
        if (index > -1) {
            localFatwas.value.splice(index, 1)
        }

        // Emit delete event to parent component with the fatwa ID
        emit('delete', selectedFatwa.value.id)

        // Close modal and reset state
        showDeleteModal.value = false
        selectedFatwa.value = null

        console.log('Fatwa deleted successfully:', selectedFatwa.value?.id)
    } catch (error) {
        console.error('Error deleting fatwa:', error)
        // You can add a toast notification here for error handling
    } finally {
        isDeleting.value = false
    }
}

const cancelDelete = () => {
    showDeleteModal.value = false
    selectedFatwa.value = null
}
</script>
