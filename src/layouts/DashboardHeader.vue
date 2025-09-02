<template>
    <header class="sticky top-0 bg-white dark:bg-gray-800 shadow px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
            <!-- Mobile hamburger button -->
            <button class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-gray-200 dark:hover:bg-gray-700 mr-2"
                @click="$emit('toggle-mobile-sidebar')" aria-label="Open sidebar">
                <i class="pi pi-bars text-2xl"></i>
            </button>
        <h1 class="hidden md:block text-xl font-semibold text-gray-800 dark:text-white">
            Dashboard
        </h1>
        </div>
        <div class="flex items-center space-x-5 relative">
            <DarkModeToggle />
            <!-- <button class="relative text-gray-600 dark:text-gray-300 hover:text-blue-500">
                <i class="pi pi-bell text-xl"></i>
            </button> -->
            <div class="relative cursor-pointer select-none" @click="toggleDropdown">
                <div class="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                    <img src="https://ui-avatars.com/api/?name=AD&background=10b981&color=ffffff&bold=true" alt="Admin"
                        class="w-8 h-8 rounded-full border border-green-500 dark:border-green-600" />
                    <span>Admin</span>
                    <i class="pi pi-angle-down text-xs"></i>
                </div>
                <div v-if="dropdownOpen"
                    class="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-700 rounded shadow-md z-50">
                    <ul class="py-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                        <!-- <li>
                            <a href="#"
                                class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                <i class="pi pi-user"></i>
                                <span>Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                <i class="pi pi-cog"></i>
                                <span>Settings</span>
                            </a>
                        </li> -->
                        <li>
                            <button @click="logout"
                                class="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-red-100 dark:hover:bg-red-600 text-red-600 dark:text-red-300">
                                <i class="pi pi-sign-out"></i>
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import DarkModeToggle from './DarkModeToggle.vue'

const dropdownOpen = ref(false)
const router = useRouter()

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
}

const logout = () => {
    localStorage.removeItem('auth')
    router.push('/auth/login')
}
</script>
