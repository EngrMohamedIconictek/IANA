<template>
    <div class="w-full border border-gray-300 dark:border-gray-600 rounded-lg">
        <div class=" rounded-lg overflow-hidden">
            <!-- Header Section -->
            <div class="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                            <i class="pi pi-tags text-2xl text-white"></i>
                        </div>
                        <div>
                            <h2 class="text-xl font-bold text-white">{{ categoryData.name }}</h2>
                            <p class="text-green-100 text-sm">Fatwa Category Details</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span class="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white">
                            {{ categoryData.status === 'active' ? 'Active' : 'In-Active' }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Content Section -->
            <div class="p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Category Information -->
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Category Information</h3>
                        
                        <div class="space-y-3">
                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                                    <i class="pi pi-tags text-blue-600 dark:text-blue-400"></i>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Category Name</p>
                                    <p class="font-medium text-gray-900 dark:text-white">{{ categoryData.name }}</p>
                                </div>
                            </div>

                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                                    <i class="iconoir-language text-green-600 dark:text-green-400"></i>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Language</p>
                                    <p class="font-medium text-gray-900 dark:text-white">
                                        {{ categoryData.language === 'english' ? 'English' : 'Arabic' }}
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-center space-x-3">
                                <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                                    <i class="iconoir-check-circle text-purple-600 dark:text-purple-400"></i>
                                </div>
                                <div>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Status</p>
                                    <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                                        :class="categoryData.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' : 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'">
                                        {{ categoryData.status === 'active' ? 'Active' : 'In-Active' }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Statistics Section -->
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Statistics</h3>
                        
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                                <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ totalFatwas }}</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">Total Fatwas</div>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                                <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ publishedFatwas }}</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">Published</div>
                            </div>
                        </div>

                        <!-- Recent Activity -->
                        <div class="mt-6">
                            <h4 class="text-md font-medium text-gray-900 dark:text-white mb-3">Recent Activity</h4>
                            <div class="space-y-2">
                                <div class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                    <i class="iconoir-calendar text-xs"></i>
                                    <span>Created {{ formatDate(categoryData.createdAt) }}</span>
                                </div>
                                <div class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                    <i class="iconoir-edit-pencil text-xs"></i>
                                    <span>Last updated {{ formatDate(categoryData.updatedAt) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Description Section -->
                <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {{ categoryData.description || 'This category contains fatwas related to ' + categoryData.name.toLowerCase() + ' in ' + (categoryData.language === 'english' ? 'English' : 'Arabic') + ' language.' }}
                    </p>
                </div>
            </div>

            <!-- Footer Actions -->
            <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4 flex justify-end space-x-3">
                <button @click="handleEdit" 
                    class="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                    <i class="pi pi-pencil text-sm"></i>
                    <span>Edit Category</span>
                </button>
                <button @click="handleClose" 
                    class="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
                    <i class="pi pi-times text-sm"></i>
                    <span>Close</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    categoryData: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['edit', 'close'])

// Mock statistics - in real app, these would come from API
const totalFatwas = computed(() => Math.floor(Math.random() * 50) + 10)
const publishedFatwas = computed(() => Math.floor(totalFatwas.value * 0.8))

const formatDate = (date) => {
    if (!date) return 'N/A'
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

const handleEdit = () => {
    emit('edit', props.categoryData)
}

const handleClose = () => {
    emit('close')
}
</script>
