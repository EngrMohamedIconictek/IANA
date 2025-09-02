<template>
    <PageToolbar title="Create News Article" v-model:modelValue="search" :showSearch="false" :showView="true" :showExcel="false" :showAdd="false"
        @view="goBackToList" />
    
    <div class="max-w-2xl mx-auto">

        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <form @submit.prevent="createNews">
                <div class="space-y-6">
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Article Title
                        </label>
                        <input 
                            type="text" 
                            id="title" 
                            v-model="news.title" 
                            required 
                            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-100"
                            placeholder="Enter article title"
                        />
                    </div>

                    <div>
                        <label for="summary" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Summary
                        </label>
                        <textarea 
                            id="summary" 
                            v-model="news.summary" 
                            rows="3"
                            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-100"
                            placeholder="Enter article summary"
                        ></textarea>
                    </div>

                    <div>
                        <label for="content" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Content
                        </label>
                        <textarea 
                            id="content" 
                            v-model="news.content" 
                            rows="8"
                            required
                            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-100"
                            placeholder="Enter article content"
                        ></textarea>
                    </div>

                    <div>
                        <label for="category" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Category
                        </label>
                        <select 
                            id="category" 
                            v-model="news.category" 
                            required
                            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-100"
                        >
                            <option value="">Select a category</option>
                            <option value="community">Community</option>
                            <option value="events">Events</option>
                            <option value="announcements">Announcements</option>
                            <option value="religious">Religious</option>
                        </select>
                    </div>

                    <div>
                        <label for="publishDate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Publish Date
                        </label>
                        <input 
                            type="date" 
                            id="publishDate" 
                            v-model="news.publishDate" 
                            required
                            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-gray-100"
                        />
                    </div>

                    <div class="flex items-center">
                        <input 
                            type="checkbox" 
                            id="published" 
                            v-model="news.published"
                            class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label for="published" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                            Publish immediately
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
                        Create News Article
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

const news = ref({
    title: '',
    summary: '',
    content: '',
    category: '',
    publishDate: '',
    published: false
})

const goBackToList = () => {
    router.push('/news')
}

const createNews = () => {
    // Logic to create the news article
    console.log('News article created:', news.value)
    // You can add API call here
    // After successful creation, redirect back to news list
    router.push('/news')
}
</script>
