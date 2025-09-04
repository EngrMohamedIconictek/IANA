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
                                Language
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
                        <tr v-for="category in displayCategories" :key="category.id"
                            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <!-- Category Name -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900 dark:text-white">
                                    {{ category.name }}
                                </div>
                            </td>

                            <!-- Language -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900 dark:text-white">
                                    {{ category.language === 'english' ? 'English' : 'Arabic' }}
                                </div>
                            </td>

                            <!-- Status -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                                    :class="category.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'">
                                    {{ category.status === 'active' ? 'Active' : 'In-Active' }}
                                </span>
                            </td>

                            <!-- Actions -->
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center justify-center space-x-2">
                                    <button @click="viewCategory(category)"
                                        class="flex items-center justify-center w-8 h-8 text-green-600 bg-green-50 border-2 border-green-200 rounded-sm hover:bg-green-100 hover:border-green-300 dark:bg-green-900/20 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/30 dark:hover:border-green-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="View Category">
                                        <i class="iconoir-eye text-lg"></i>
                                    </button>
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
                            <td colspan="4" class="px-6 py-12 text-center">
                                <div class="text-gray-400 dark:text-gray-500">
                                    <i class="iconoir-category text-4xl mb-4"></i>
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
            <div v-for="category in displayCategories" :key="category.id" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                <!-- Category Header with Actions -->
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                            {{ category.name }}
                        </h3>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button @click="viewCategory(category)"
                            class="flex items-center justify-center w-8 h-8 text-green-600 bg-green-50 border-2 border-green-200 rounded-sm hover:bg-green-100 hover:border-green-300 dark:bg-green-900/20 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/30 dark:hover:border-green-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="View Category">
                            <i class="iconoir-eye text-lg"></i>
                        </button>
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

                <!-- Category Details -->
                <div class="space-y-2">
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Language:</span>
                        <span class="text-sm text-gray-900 dark:text-white">{{ category.language === 'english' ? 'English' : 'Arabic' }}</span>
                    </div>

                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Status:</span>
                        <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                            :class="category.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'">
                            {{ category.status === 'active' ? 'Active' : 'In-Active' }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Empty State -->
        <div v-if="displayCategories.length === 0" class="md:hidden">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                <div class="text-gray-400 dark:text-gray-500">
                    <i class="iconoir-category text-4xl mb-4"></i>
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

// Default dummy data
const defaultCategories = [
    {
        id: 1,
        name: "Fiqh (Jurisprudence)",
        language: "english",
        status: "active",
        description: "Islamic jurisprudence and legal rulings covering various aspects of daily life, worship, and social interactions.",
        createdAt: "2024-01-15",
        updatedAt: "2024-01-20"
    },
    {
        id: 2,
        name: "Aqeedah (Creed)",
        language: "arabic",
        status: "active",
        description: "Islamic creed and theology covering fundamental beliefs, articles of faith, and theological principles.",
        createdAt: "2024-01-10",
        updatedAt: "2024-01-18"
    },
    {
        id: 3,
        name: "Tafseer (Quran Commentary)",
        language: "english",
        status: "inactive",
        description: "Quranic exegesis and commentary providing detailed explanations and interpretations of Quranic verses.",
        createdAt: "2024-01-05",
        updatedAt: "2024-01-12"
    },
    {
        id: 4,
        name: "Hadith",
        language: "arabic",
        status: "active",
        description: "Prophetic traditions and sayings of Prophet Muhammad (PBUH) covering various aspects of Islamic teachings.",
        createdAt: "2024-01-08",
        updatedAt: "2024-01-22"
    },
    {
        id: 5,
        name: "Family Issues",
        language: "english",
        status: "inactive",
        description: "Islamic guidance on family matters, marriage, divorce, parenting, and family relationships.",
        createdAt: "2024-01-12",
        updatedAt: "2024-01-15"
    }
]

const props = defineProps({
    categories: {
        type: Array,
        default: () => []
    }
})

// Local reactive data for managing categories
const localCategories = ref([...defaultCategories])

// Use computed to return either props data or local data
const displayCategories = computed(() => {
    return props.categories && props.categories.length > 0 ? props.categories : localCategories.value
})

// Emits
const emit = defineEmits(['view', 'edit', 'delete'])

// Modal state management
const showDeleteModal = ref(false)
const selectedCategory = ref(null)
const isDeleting = ref(false)

// Methods
const viewCategory = (category) => {
    emit('view', category)
    console.log('View category:', category)
}

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

        // Remove category from local array
        const index = localCategories.value.findIndex(category => category.id === selectedCategory.value.id)
        if (index > -1) {
            localCategories.value.splice(index, 1)
        }

        // Emit delete event to parent component with the category ID
        emit('delete', selectedCategory.value.id)

        // Close modal and reset state
        showDeleteModal.value = false
        selectedCategory.value = null

        console.log('Category deleted successfully:', selectedCategory.value?.id)
    } catch (error) {
        console.error('Error deleting category:', error)
        // You can add a toast notification here for error handling
    } finally {
        isDeleting.value = false
    }
}

const cancelDelete = () => {
    showDeleteModal.value = false
    selectedCategory.value = null
}
</script>
