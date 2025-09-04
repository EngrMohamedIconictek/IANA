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
                                Categories
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Service Title
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Short Description
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Comments
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr v-for="service in displayServices" :key="service.id"
                            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <!-- Service Category -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="">
                                    <div class="text-sm font-medium text-gray-900 dark:text-white">
                                        {{ service.category }}
                                    </div>
                                </div>
                            </td>

                            <!-- Service Title -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900 dark:text-white">
                                    {{ service.title }}
                                </div>
                            </td>

                            <!-- Short Description -->
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900 dark:text-white max-w-xs truncate">
                                    {{ service.description }}
                                </div>
                            </td>

                            <!-- Comments -->
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900 dark:text-white max-w-xs truncate">
                                    {{ service.comments || 'No comments' }} <span class="mx-2"><i class="pi pi-comments text-green-600 mr-2"></i> ( New 0 )</span>
                                </div>
                            </td>

                            <!-- Actions -->
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center justify-center space-x-2">
                                    <button @click="editService(service)"
                                        class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Edit Service">
                                        <i class="iconoir-edit-pencil text-lg"></i>
                                    </button>
                                    <button @click="deleteService(service)"
                                        class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Delete Service">
                                        <i class="iconoir-trash text-lg"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <!-- Empty state row when no services -->
                        <tr v-if="displayServices.length === 0">
                            <td colspan="6" class="px-6 py-12 text-center">
                                <div class="text-gray-400 dark:text-gray-500">
                                    <i class="iconoir-settings text-4xl mb-4"></i>
                                    <p class="text-lg font-medium">No services found</p>
                                    <p class="text-sm">Start by adding your first service</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Mobile Card View -->
        <div class="md:hidden space-y-4">
            <div v-for="service in displayServices" :key="service.id"
                class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                <!-- Service Header with Image and Actions -->
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center">
                        <div>
                            <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                                {{ service.title }}
                            </h3>
                            <p class="text-xs text-gray-500 dark:text-gray-400">{{ service.category }}</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button @click="editService(service)"
                            class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Edit Service">
                            <i class="iconoir-edit-pencil text-lg"></i>
                        </button>
                        <button @click="deleteService(service)"
                            class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Delete Service">
                            <i class="iconoir-trash text-lg"></i>
                        </button>
                    </div>
                </div>

                <!-- Service Details -->
                <div class="space-y-2">
                    <div class="flex justify-between items-start">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Description:</span>
                        <span class="text-sm text-gray-900 dark:text-white text-right max-w-48">{{ service.description
                            }}</span>
                    </div>

                    <div class="flex justify-between items-start">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Comments:</span>
                        <span class="text-sm text-gray-900 dark:text-white text-right max-w-48">{{ service.comments ||
                            'No comments' }} <span class="mx-2"><i class="pi pi-comments text-green-600 mr-2"></i> ( New 0 )</span></span>
                    </div>

                </div>
            </div>
        </div>

        <!-- Mobile Empty State -->
        <div v-if="displayServices.length === 0" class="md:hidden">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                <div class="text-gray-400 dark:text-gray-500">
                    <i class="iconoir-settings text-4xl mb-4"></i>
                    <p class="text-lg font-medium">No services found</p>
                    <p class="text-sm">Start by adding your first service</p>
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

// Sample services data
const sampleServices = [
    {
        id: 1,
        category: "Religious Services",
        title: "Friday Prayer Services",
        description: "Weekly Friday congregational prayers with sermon and community gathering",
        comments: "0",
    },
    {
        id: 2,
        category: "Educational Services",
        title: "Quran Classes for Children",
        description: "Comprehensive Quran learning program for children aged 6-16",
        comments: "0",
    },
    {
        id: 3,
        category: "Community Services",
        title: "Food Distribution Program",
        description: "Monthly food distribution for families in need within the community",
        comments: "1",
    },
    {
        id: 4,
        category: "Health Services",
        title: "Health Awareness Workshops",
        description: "Regular health education sessions covering various wellness topics",
        comments: "0",
    },
    {
        id: 5,
        category: "Youth Services",
        title: "Youth Leadership Program",
        description: "Leadership development program for Muslim youth aged 16-25",
        comments: "1",
    },
    {
        id: 6,
        category: "Family Services",
        title: "Marriage Counseling Services",
        description: "Professional counseling services for couples and families",
        comments: "0",
    }
]

const props = defineProps({
    services: {
        type: Array,
        default: () => []
    }
})

// Local services state for managing data
const localServices = ref([...sampleServices])

// Computed property to determine which services to display
const displayServices = computed(() => {
    return props.services.length > 0 ? props.services : localServices.value
})

// Emits
const emit = defineEmits(['edit', 'delete'])

// Modal state management
const showDeleteModal = ref(false)
const selectedService = ref(null)
const isDeleting = ref(false)

// Methods
const editService = (service) => {
    emit('edit', service)
    console.log('Edit service:', service)
}

const deleteService = (service) => {
    selectedService.value = service
    showDeleteModal.value = true
}

const confirmDelete = async () => {
    if (!selectedService.value) return

    isDeleting.value = true

    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Remove service from local array if using local data
        if (props.services.length === 0) {
            const index = localServices.value.findIndex(service => service.id === selectedService.value.id)
            if (index > -1) {
                localServices.value.splice(index, 1)
            }
        }

        // Emit delete event to parent component with the service ID
        emit('delete', selectedService.value.id)

        // Close modal and reset state
        showDeleteModal.value = false
        selectedService.value = null

        console.log('Service deleted successfully:', selectedService.value)
    } catch (error) {
        console.error('Error deleting service:', error)
    } finally {
        isDeleting.value = false
    }
}

const cancelDelete = () => {
    showDeleteModal.value = false
    selectedService.value = null
}
</script>
