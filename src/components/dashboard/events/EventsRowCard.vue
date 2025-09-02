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
                                Event
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Date
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Time From
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Time To
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Address
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr v-for="event in events" :key="event.id"
                            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <!-- Event Name with Image -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-12 w-12">
                                        <img class="h-12 w-12 rounded-lg object-cover"
                                            :src="event.image || '/images/events-1.png'" :alt="event.name">
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900 dark:text-white">
                                            {{ event.name }}
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <!-- Date -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900 dark:text-white">
                                    {{ formatDate(event.date) }}
                                </div>
                            </td>

                            <!-- Time From -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900 dark:text-white">
                                    {{ event.timeFrom }}
                                </div>
                            </td>

                            <!-- Time To -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900 dark:text-white">
                                    {{ event.timeTo }}
                                </div>
                            </td>

                            <!-- Address -->
                            <td class="px-6 py-4">
                                <div class="text-sm text-gray-900 dark:text-white max-w-xs truncate">
                                    {{ event.address }}
                                </div>
                            </td>

                            <!-- Actions -->
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center justify-center space-x-2">
                                    <button @click="editEvent(event)"
                                        class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Edit Event">
                                        <i class="iconoir-edit-pencil text-lg"></i>
                                    </button>
                                    <button @click="deleteEvent(event)"
                                        class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Delete Event">
                                        <i class="iconoir-trash text-lg"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <!-- Empty state row when no events -->
                        <tr v-if="events.length === 0">
                            <td colspan="6" class="px-6 py-12 text-center">
                                <div class="text-gray-400 dark:text-gray-500">
                                    <i class="iconoir-calendar text-4xl mb-4"></i>
                                    <p class="text-lg font-medium">No events found</p>
                                    <p class="text-sm">Start by adding your first event</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Mobile Card View -->
        <div class="md:hidden space-y-4">
            <div v-for="event in events" :key="event.id" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                <!-- Event Header with Image and Actions -->
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center">
                        <img class="h-12 w-12 rounded-lg object-cover mr-3" :src="event.image || '/images/events-1.png'"
                            :alt="event.name">
                        <div>
                            <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                                {{ event.name }}
                            </h3>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button @click="editEvent(event)"
                            class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 roundedsm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Edit Event">
                            <i class="iconoir-edit-pencil text-lg"></i>
                        </button>
                        <button @click="deleteEvent(event)"
                            class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Delete Event">
                            <i class="iconoir-trash text-lg"></i>
                        </button>
                    </div>
                </div>

                <!-- Event Details -->
                <div class="space-y-2">
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Date:</span>
                        <span class="text-sm text-gray-900 dark:text-white">{{ formatDate(event.date) }}</span>
                    </div>

                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Time:</span>
                        <span class="text-sm text-gray-900 dark:text-white">{{ event.timeFrom }} - {{ event.timeTo
                        }}</span>
                    </div>

                    <div class="flex justify-between items-start">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Address:</span>
                        <span class="text-sm text-gray-900 dark:text-white text-right max-w-48">{{ event.address
                        }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Empty State -->
        <div v-if="events.length === 0" class="md:hidden">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                <div class="text-gray-400 dark:text-gray-500">
                    <i class="iconoir-calendar text-4xl mb-4"></i>
                    <p class="text-lg font-medium">No events found</p>
                    <p class="text-sm">Start by adding your first event</p>
                </div>
            </div>
        </div>

        <!-- Delete Confirmation Modal -->
        <DeleteRecode v-model="showDeleteModal" :loading="isDeleting" @confirm="confirmDelete"
            @update:modelValue="cancelDelete" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import DeleteRecode from '@/layouts/dashboard/DeleteRecode.vue'

const props = defineProps({
    events: {
        type: Array,
        default: () => []
    }
})

// Emits
const emit = defineEmits(['edit', 'delete'])

// Modal state management
const showDeleteModal = ref(false)
const selectedEvent = ref(null)
const isDeleting = ref(false)

// Methods
const formatDate = (date) => {
    if (!date) return ''
    const eventDate = new Date(date)
    return eventDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

const editEvent = (event) => {
    emit('edit', event)
    console.log('Edit event:', event)
}

const deleteEvent = (event) => {
    selectedEvent.value = event
    showDeleteModal.value = true
}

const confirmDelete = async () => {
    if (!selectedEvent.value) return

    isDeleting.value = true

    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Emit delete event to parent component with the event ID
        emit('delete', selectedEvent.value.id)

        // Close modal and reset state
        showDeleteModal.value = false
        selectedEvent.value = null

        console.log('Event deleted successfully:', selectedEvent.value)
    } catch (error) {
        console.error('Error deleting event:', error)
    } finally {
        isDeleting.value = false
    }
}

const cancelDelete = () => {
    showDeleteModal.value = false
    selectedEvent.value = null
}
</script>
