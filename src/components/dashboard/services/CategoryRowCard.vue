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
                                Sort Number
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Icon
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Short Description
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr v-for="category in displayCategories" :key="category.id"
                            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <!-- Sort Number -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="">
                                    <div class="text-sm font-medium text-gray-900 dark:text-white">
                                        {{ category.sortNumber }}
                                    </div>
                                </div>
                            </td>

                            <!-- Icon -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-2xl text-green-600 dark:text-green-400">
                                    <i :class="category.icon"></i>
                                </div>
                            </td>

                            <!-- Short Description -->
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900 dark:text-white max-w-xs truncate">
                                    {{ category.shortDescription }}
                                </div>
                            </td>

                            <!-- Actions -->
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center justify-center space-x-2">
                                    <button @click="editCategory(category)"
                                        class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Edit Category">
                                        <i class="iconoir-edit-pencil text-lg"></i>
                                    </button>
                                    <button @click="deleteCategory(category)"
                                        class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Delete Category">
                                        <i class="iconoir-trash text-lg"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <!-- Empty state row when no categories -->
                        <tr v-if="displayCategories.length === 0">
                            <td colspan="6" class="px-6 py-12 text-center">
                                <div class="text-gray-400 dark:text-gray-500">
                                    <i class="iconoir-settings text-4xl mb-4"></i>
                                    <p class="text-lg font-medium">No categories found</p>
                                    <p class="text-sm">Start by adding your first category</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Mobile Card View -->
        <div class="md:hidden space-y-4">
            <div v-for="category in displayCategories" :key="category.id"
                class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                <!-- Service Header with Image and Actions -->
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center">
                        <div>
                            <h3 class="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                <i :class="category.icon" class="text-green-600 dark:text-green-400"></i>
                                #{{ category.sortNumber }}
                            </h3>
                            <p class="text-xs text-gray-500 dark:text-gray-400">Sort Number: {{ category.sortNumber }}</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button @click="editCategory(category)"
                            class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Edit Category">
                            <i class="iconoir-edit-pencil text-lg"></i>
                        </button>
                        <button @click="deleteCategory(category)"
                            class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Delete Category">
                            <i class="iconoir-trash text-lg"></i>
                        </button>
                    </div>
                </div>

                <!-- Service Details -->
                <div class="space-y-2">
                    <div class="flex justify-between items-start">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Description:</span>
                        <span class="text-sm text-gray-900 dark:text-white text-right max-w-48">{{ category.shortDescription
                            }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Empty State -->
        <div v-if="displayCategories.length === 0" class="md:hidden">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                <div class="text-gray-400 dark:text-gray-500">
                    <i class="iconoir-settings text-4xl mb-4"></i>
                    <p class="text-lg font-medium">No categories found</p>
                    <p class="text-sm">Start by adding your first category</p>
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

// Sample categories data
const sampleCategories = [
    {
        id: 1,
        sortNumber: 1,
        icon: "pi pi-building",
        shortDescription: "Weekly Friday congregational prayers with sermon and community gathering",
    },
    {
        id: 2,
        sortNumber: 2,
        icon: "pi pi-book",
        shortDescription: "Comprehensive Quran learning program for children aged 6-16",
    },
    {
        id: 3,
        sortNumber: 3,
        icon: "pi pi-shopping-cart",
        shortDescription: "Monthly food distribution for families in need within the community",
    },
    {
        id: 4,
        sortNumber: 4,
        icon: "pi pi-heart",
        shortDescription: "Regular health education sessions covering various wellness topics",
    },
    {
        id: 5,
        sortNumber: 5,
        icon: "pi pi-users",
        shortDescription: "Leadership development program for Muslim youth aged 16-25",
    },
    {
        id: 6,
        sortNumber: 6,
        icon: "pi pi-home",
        shortDescription: "Professional counseling services for couples and families",
    }
]

const props = defineProps({
    categories: {
        type: Array,
        default: () => []
    }
})

// Local categories state for managing data
const localCategories = ref([...sampleCategories])

// Computed property to determine which categories to display
const displayCategories = computed(() => {
    return props.categories.length > 0 ? props.categories : localCategories.value
})

// Emits
const emit = defineEmits(['edit', 'delete'])

// Modal state management
const showDeleteModal = ref(false)
const selectedCategory = ref(null)
const isDeleting = ref(false)

// Methods
const editCategory = (category) => {
    emit('edit', category)
    console.log('Edit category:', category)
}

const deleteCategory = (category) => {
    selectedCategory.value = category
    showDeleteModal.value = true
}

const confirmDelete = async () => {
    if (!selectedCategory.value) return

    isDeleting.value = true

    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Remove category from local array if using local data
        if (props.categories.length === 0) {
            const index = localCategories.value.findIndex(category => category.id === selectedCategory.value.id)
            if (index > -1) {
                localCategories.value.splice(index, 1)
            }
        }

        // Emit delete event to parent component with the category ID
        emit('delete', selectedCategory.value.id)

        // Close modal and reset state
        showDeleteModal.value = false
        selectedCategory.value = null

        console.log('Category deleted successfully:', selectedCategory.value)
    } catch (error) {
        console.error('Error deleting category:', error)
    } finally {
        isDeleting.value = false
    }
}

const cancelDelete = () => {
    showDeleteModal.value = false
    selectedCategory.value = null
}
</script>
