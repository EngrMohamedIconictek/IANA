<template>
    <div class="min-h-screen transition-colors duration-300">
        <!-- Welcome Section -->
        <div
            class="bg-gradient-to-r from-green-600 to-green-800 dark:from-green-700 dark:to-green-900 text-white p-6 rounded-lg mb-6 shadow-lg">
            <h1 class="text-3xl font-bold mb-2">Welcome to IANA Dashboard</h1>
            <p class="text-green-100">Islamic Association of North America - Admin Panel</p>
        </div>

        <!-- Statistics Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <!-- News Card -->
            <div
                class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">News</p>
                        <p class="text-3xl font-bold text-gray-900 dark:text-white">80</p>
                        <p class="text-green-600 text-sm mt-1">
                            <i class="iconoir-book-stack text-xs"></i> +12% from last month
                        </p>
                    </div>
                    <div class="bg-blue-100 dark:bg-blue-900 p-3 px-4 rounded-full">
                        <i class="pi pi-book text-2xl text-blue-600 dark:text-blue-400"></i>
                    </div>
                </div>
            </div>

            <!-- Organizations Card -->
            <div
                class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Organizations</p>
                        <p class="text-3xl font-bold text-gray-900 dark:text-white">20</p>
                        <p class="text-green-600 text-sm mt-1">
                            <i class="pi pi-arrow-up text-xs"></i> +5% from last month
                        </p>
                    </div>
                    <div class="bg-purple-100 dark:bg-purple-900 p-3 px-4 rounded-full">
                        <i class="iconoir-city text-2xl text-purple-600 dark:text-purple-400"></i>
                    </div>
                </div>
            </div>

            <!-- Events Card -->
            <div
                class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Events</p>
                        <p class="text-3xl font-bold text-gray-900 dark:text-white">88</p>
                        <p class="text-green-600 text-sm mt-1">
                            <i class="pi pi-arrow-up text-xs"></i> +18% from last month
                        </p>
                    </div>
                    <div class="bg-orange-100 dark:bg-orange-900 p-3 px-4 rounded-full">
                        <i class="iconoir-calendar-plus text-2xl text-orange-600 dark:text-orange-400"></i>
                    </div>
                </div>
            </div>

            <!-- Volunteers Card -->
            <div
                class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-600 dark:text-gray-400 text-sm font-medium">Volunteers</p>
                        <p class="text-3xl font-bold text-gray-900 dark:text-white">568</p>
                        <p class="text-green-600 text-sm mt-1">
                            <i class="pi pi-arrow-up text-xs"></i> +25% from last month
                        </p>
                    </div>
                    <div class="bg-green-100 dark:bg-green-900 p-3 px-4 rounded-full">
                        <i class="pi pi-users text-2xl text-green-600 dark:text-green-400"></i>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Left Column - News Table -->
            <div class="lg:col-span-2">
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div class="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                        <h2 class="text-xl font-semibold text-white flex items-center">
                            <i class="pi pi-newspaper mr-2"></i>
                            Latest News
                        </h2>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Image</th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Title</th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Total Read</th>
                                    <th
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Comments</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                <tr v-for="news in newsData" :key="news.id"
                                    class="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <img :src="news.image" :alt="news.title"
                                            class="w-12 h-12 rounded-lg object-cover">
                                    </td>
                                    <td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{{
                                        news.title }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{{
                                        news.totalRead.toLocaleString() }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{{
                                        news.comments }} <span class="mx-2"><i class="pi pi-comments text-green-600 mr-2"></i> ( New 0 )</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Paginator -->
                    <div class="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"
                            class="dark:bg-gray-800">
                            <template #start="slotProps">
                                <div class="text-sm text-gray-600 dark:text-gray-400">
                                    Page: {{ slotProps.state.page }} |
                                    First: {{ slotProps.state.first }} |
                                    Rows: {{ slotProps.state.rows }}
                                </div>
                            </template>
                            <template #end>
                                <Button type="button" icon="pi pi-search" class="p-button-sm" />
                            </template>
                        </Paginator>
                    </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="space-y-6">
                <!-- Weather Widget -->
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div class="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                        <h2 class="text-xl font-semibold text-white flex items-center">
                            <i class="pi pi-sun mr-2"></i>
                            Weather
                        </h2>
                    </div>
                    <div class="p-6">
                        <div class="text-center">
                            <div class="text-4xl mb-2">☀️</div>
                            <div class="text-3xl font-bold text-gray-900 dark:text-white mb-1">24°C</div>
                            <div class="text-gray-600 dark:text-gray-400 mb-4">Sunny</div>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div class="text-center">
                                    <div class="text-gray-500 dark:text-gray-400">Humidity</div>
                                    <div class="font-semibold text-gray-900 dark:text-white">65%</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-gray-500 dark:text-gray-400">Wind</div>
                                    <div class="font-semibold text-gray-900 dark:text-white">12 km/h</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- COVID-19 Vaccination Banner -->
                <div class="bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-lg overflow-hidden">
                    <div class="p-6 text-white">
                        <div class="flex items-center mb-4">
                            <div class="bg-white bg-opacity-20 p-2 px-3 rounded-full mr-3">
                                <i class="pi pi-shield text-xl text-red-500"></i>
                            </div>
                            <h3 class="text-lg font-semibold">COVID-19 Vaccination</h3>
                        </div>
                        <p class="text-red-100 mb-4">Stay protected and help protect your community. Get vaccinated
                            today!</p>
                        <div class="flex items-center justify-between">
                            <div class="text-sm">
                                <div class="text-red-100">Next Vaccination Drive:</div>
                                <div class="font-semibold">Jan 25, 2024</div>
                            </div>
                            <button
                                class="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Paginator from 'primevue/paginator'

const weatherData = ref({
    temperature: 24,
    condition: 'Sunny',
    humidity: 65,
    windSpeed: 12
})

const newsData = ref([
    {
        id: 1,
        image: '/public/images/news-1.png',
        title: 'Community Health Awareness Program',
        totalRead: 1245,
        comments: 23
    },
    {
        id: 2,
        image: '/public/images/news-2.png',
        title: 'Annual Conference 2024',
        totalRead: 2156,
        comments: 45
    },
    {
        id: 3,
        image: '/public/images/news-3.png',
        title: 'Ramadan Guidelines 2024',
        totalRead: 3789,
        comments: 67
    },
    {
        id: 4,
        image: '/public/images/events-1.png',
        title: 'Youth Program Registration',
        totalRead: 892,
        comments: 12
    },
])

onMounted(() => {
    console.log('Dashboard mounted')
})
</script>