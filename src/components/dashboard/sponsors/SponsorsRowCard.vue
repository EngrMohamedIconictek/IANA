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
                                Image
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Name
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Phone
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Level
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Attendees
                            </th>
                            <th
                                class="px-6 py-4 text-left text-base whitespace-nowrap font-semibold text-white dark:text-gray-300 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr v-for="sponsor in displaySponsors" :key="sponsor.id"
                            class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <!-- Image -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex-shrink-0 h-12 w-12">
                                    <img class="h-12 w-12 rounded-lg object-cover"
                                        :src="sponsor.image || '/images/events-1.png'" :alt="sponsor.name">
                                </div>
                            </td>

                            <!-- Name -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900 dark:text-white">
                                    {{ sponsor.name }}
                                </div>
                            </td>

                            <!-- Phone -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900 dark:text-white">
                                    {{ sponsor.phone }}
                                </div>
                            </td>

                            <!-- Level -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                                    :class="{
                                        'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400': sponsor.level === 'Platinum',
                                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400': sponsor.level === 'Gold',
                                        'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400': sponsor.level === 'Silver'
                                    }">
                                    {{ sponsor.level }}
                                </span>
                            </td>

                            <!-- Attendees -->
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900 dark:text-white">
                                    {{ sponsor.attendees }}
                                </div>
                            </td>

                            <!-- Actions -->
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div class="flex items-center justify-center space-x-2">
                                    <button @click="editSponsor(sponsor)"
                                        class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Edit Sponsor">
                                        <i class="iconoir-edit-pencil text-lg"></i>
                                    </button>
                                    <button @click="deleteSponsor(sponsor)"
                                        class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                                        title="Delete Sponsor">
                                        <i class="iconoir-trash text-lg"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <!-- Empty state row when no sponsors -->
                        <tr v-if="displaySponsors.length === 0">
                            <td colspan="6" class="px-6 py-12 text-center">
                                <div class="text-gray-400 dark:text-gray-500">
                                    <i class="pi pi-chart-bar text-4xl mb-4"></i>
                                    <p class="text-lg font-medium">No sponsors found</p>
                                    <p class="text-sm">Start by adding your first sponsor</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Mobile Card View -->
        <div class="md:hidden space-y-4">
            <div v-for="sponsor in displaySponsors" :key="sponsor.id" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                <!-- Sponsor Header with Image and Actions -->
                <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center">
                        <img class="h-12 w-12 rounded-lg object-cover mr-3" :src="sponsor.image || '/images/events-1.png'"
                            :alt="sponsor.name">
                        <div>
                            <h3 class="text-sm font-medium text-gray-900 dark:text-white">
                                {{ sponsor.name }}
                            </h3>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <button @click="editSponsor(sponsor)"
                            class="flex items-center justify-center w-8 h-8 text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-sm hover:bg-blue-100 hover:border-blue-300 dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/30 dark:hover:border-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Edit Sponsor">
                            <i class="iconoir-edit-pencil text-lg"></i>
                        </button>
                        <button @click="deleteSponsor(sponsor)"
                            class="flex items-center justify-center w-8 h-8 text-red-600 bg-red-50 border-2 border-red-200 rounded-sm hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:border-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
                            title="Delete Sponsor">
                            <i class="iconoir-trash text-lg"></i>
                        </button>
                    </div>
                </div>

                <!-- Sponsor Details -->
                <div class="space-y-2">
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Phone:</span>
                        <span class="text-sm text-gray-900 dark:text-white">{{ sponsor.phone }}</span>
                    </div>

                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Level:</span>
                        <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                            :class="{
                                'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400': sponsor.level === 'Platinum',
                                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400': sponsor.level === 'Gold',
                                'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400': sponsor.level === 'Silver'
                            }">
                            {{ sponsor.level }}
                        </span>
                    </div>

                    <div class="flex justify-between items-center">
                        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Attendees:</span>
                        <span class="text-sm text-gray-900 dark:text-white">{{ sponsor.attendees }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Empty State -->
        <div v-if="displaySponsors.length === 0" class="md:hidden">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                <div class="text-gray-400 dark:text-gray-500">
                    <i class="pi pi-chart-bar text-4xl mb-4"></i>
                    <p class="text-lg font-medium">No sponsors found</p>
                    <p class="text-sm">Start by adding your first sponsor</p>
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
const defaultSponsors = [
    {
        id: 1,
        name: "Microsoft Corporation",
        phone: "+1 (555) 123-4567",
        level: "Platinum",
        attendees: 250,
        image: "/images/events-1.png"
    },
    {
        id: 2,
        name: "Google LLC",
        phone: "+1 (555) 234-5678",
        level: "Gold",
        attendees: 180,
        image: "/images/events-2.png"
    },
    {
        id: 3,
        name: "Apple Inc.",
        phone: "+1 (555) 345-6789",
        level: "Platinum",
        attendees: 320,
        image: "/images/events-3.png"
    },
    {
        id: 4,
        name: "Amazon Web Services",
        phone: "+1 (555) 456-7890",
        level: "Silver",
        attendees: 150,
        image: "/images/events-1.png"
    },
    {
        id: 5,
        name: "Meta Platforms",
        phone: "+1 (555) 567-8901",
        level: "Gold",
        attendees: 200,
        image: "/images/events-2.png"
    }
]

const props = defineProps({
    sponsors: {
        type: Array,
        default: () => []
    }
})

// Emits
const emit = defineEmits(['edit', 'delete'])

// Local reactive data for managing sponsors
const localSponsors = ref([...defaultSponsors])

// Computed property to display sponsors
const displaySponsors = computed(() => {
    return props.sponsors.length > 0 ? props.sponsors : localSponsors.value
})

// Modal state management
const showDeleteModal = ref(false)
const selectedSponsor = ref(null)
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

const editSponsor = (sponsor) => {
    emit('edit', sponsor)
    console.log('Edit sponsor:', sponsor)
}

const deleteSponsor = (sponsor) => {
    selectedSponsor.value = sponsor
    showDeleteModal.value = true
}

const confirmDelete = async () => {
    if (!selectedSponsor.value) return

    isDeleting.value = true

    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        // Remove sponsor from local array
        const index = localSponsors.value.findIndex(sponsor => sponsor.id === selectedSponsor.value.id)
        if (index > -1) {
            localSponsors.value.splice(index, 1)
        }

        // Emit delete event to parent component with the sponsor ID
        emit('delete', selectedSponsor.value.id)

        // Close modal and reset state
        showDeleteModal.value = false
        selectedSponsor.value = null

        console.log('Sponsor deleted successfully:', selectedSponsor.value)
    } catch (error) {
        console.error('Error deleting sponsor:', error)
    } finally {
        isDeleting.value = false
    }
}

const cancelDelete = () => {
    showDeleteModal.value = false
    selectedSponsor.value = null
}
</script>
