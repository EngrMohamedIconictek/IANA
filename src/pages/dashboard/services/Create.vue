<template>
    <PageToolbar title="Create Service" v-model:modelValue="search" :showSearch="false" :showView="true" :showExcel="false" :showAdd="false"
        @view="goBackToList" />
    
    <div class="max-w-2xl mx-auto">

        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <form @submit.prevent="createService">
                <div class="space-y-6">
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Service Title
                        </label>
                        <input 
                            type="text" 
                            id="title" 
                            v-model="service.title" 
                            required 
                            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-100"
                            placeholder="Enter service title"
                        />
                    </div>

                    <div>
                        <label for="description" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Description
                        </label>
                        <textarea 
                            id="description" 
                            v-model="service.description" 
                            rows="4"
                            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-100"
                            placeholder="Enter service description"
                        ></textarea>
                    </div>

                    <div>
                        <label for="category" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Category
                        </label>
                        <select 
                            id="category" 
                            v-model="service.category" 
                            required
                            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-100"
                        >
                            <option value="">Select a category</option>
                            <option value="education">Education</option>
                            <option value="health">Health</option>
                            <option value="community">Community</option>
                            <option value="religious">Religious</option>
                        </select>
                    </div>

                    <div class="flex items-center">
                        <input 
                            type="checkbox" 
                            id="active" 
                            v-model="service.active"
                            class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label for="active" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Active Service
                        </label>
                    </div>
                </div>

                <div class="mt-8 flex justify-end space-x-3">
                    <button 
                        type="button" 
                        @click="$router.back()"
                        class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit"
                        class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Create Service
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'

const router = useRouter()
const search = ref('')

const service = ref({
    title: '',
    description: '',
    category: '',
    active: true
})

const goBackToList = () => {
    router.push('/services')
}

const createService = () => {
    // Logic to create the service
    console.log('Service created:', service.value)
    // You can add API call here
    // After successful creation, redirect back to services list
    router.push('/services')
}
</script>
