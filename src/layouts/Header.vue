<template>
    <header class="w-full sticky top-0 z-50 shadow bg-white dark:bg-gray-950 dark:text-white">
        <!-- Top Bar -->
        <div class="bg-[#B35C2E] text-white text-base dark:bg-[#8A4521]">
            <div class="container mx-auto px-4 flex items-center justify-between py-1.5">
                <div class="flex gap-3">
                    <div class="flex items-center gap-2">
                        <i class="iconoir-cloud-sunny"></i>
                        <span class="text-sm">40.5 °F</span>
                    </div>
                    <div class="hidden md:flex items-center gap-2">
                        <i class="pi pi-calendar-plus"></i>
                        <span class="text-sm">10-Apr-2025, Thursday</span>
                    </div>
                </div>
                <div class="flex items-center gap-1 ">
                  <DarkModeToggle class="hover:opacity-80 bg-[#3F642E] w-6 h-6 flex items-center justify-center text-xs rounded-sm" />
                    <a href="#"
                        class="w-6 h-6 flex items-center justify-center hover:opacity-80 bg-[#3F642E] text-xs rounded-sm">
                        <i class="pi pi-facebook"></i>
                    </a>
                    <a href="#"
                        class="w-6 h-6 flex items-center justify-center hover:opacity-80 bg-[#3F642E] text-xs rounded-sm">
                        <i class="pi pi-twitter"></i>
                    </a>
                    <a href="#"
                        class="w-6 h-6 flex items-center justify-center hover:opacity-80 bg-[#3F642E] text-xs rounded-sm">
                        <i class="pi pi-linkedin"></i>
                    </a>
                    <a href="#"
                        class="w-6 h-6 flex items-center justify-center hover:opacity-80 bg-[#3F642E] text-xs rounded-sm">
                        <i class="pi pi-instagram"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 flex items-center justify-between py-3">
            <router-link to="/" class="flex items-center gap-2">
                <img src="/logo.png" alt="IANA Logo" class="h-18">
            </router-link>
            <nav class="hidden lg:flex items-center lg:gap-5 xl:gap-7 font-medium bg-[#EBF8E5] dark:bg-slate-900 text-sm xl:text-base py-1.5 px-4 rounded-full">
                <router-link to="/" class="hover:text-[#3E5E31] dark:hover:text-[#A3D9A5]">Home</router-link>
                <div class="relative group">
                    <div class="flex items-center gap-1">
                        <router-link to="/about_us" class="hover:text-[#3E5E31] dark:hover:text-[#A3D9A5]">
                            About Us
                        </router-link>
                        <button class="flex items-center gap-1 hover:text-[#3E5E31] dark:hover:text-[#A3D9A5]">
                            <i class="pi pi-angle-down text-sm xl:text-base mt-1"></i>
                        </button>
                    </div>
                    <div
                        class="absolute left-0 top-full hidden group-hover:block bg-[#EBF8E5] dark:bg-gray-900 shadow rounded min-w-[200px]">
                        <router-link v-for="(item, index) in aboutLinks" :key="index" :to="item.path"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">{{ item.name
                            }}</router-link>
                    </div>
                </div>
                <router-link to="/fatwa" class="hover:text-[#3E5E31] dark:hover:text-[#A3D9A5]">Fatwas</router-link>
                <DropdownMenu label="Services" :items="servicesLinks" v-model="activeDropdown" class="font-normal" />
                <router-link to="/announcements" class="hover:text-[#3E5E31] dark:hover:text-[#A3D9A5]">Announcement</router-link>
                <router-link to="/events" class="hover:text-[#3E5E31] dark:hover:text-[#A3D9A5]">Events</router-link>
                <router-link to="/" class="hover:text-[#3E5E31] dark:hover:text-[#A3D9A5]">Donate</router-link>
                <router-link to="/contactus" class="hover:text-[#3E5E31] dark:hover:text-[#A3D9A5]">Contact Us</router-link>
            </nav>
            <div class="hidden lg:flex gap-2">
                <button
                    class="bg-[#3E5E31] text-white px-4 py-1 rounded-full text-sm xl:text-base hover:opacity-90 dark:bg-[#2B4724]">Get
                    Contribute</button>
                <router-link to="/auth/login" class="bg-[#3E5E31] text-white px-4 py-1 rounded-full text-sm xl:text-base hover:opacity-90 dark:bg-[#2B4724]">Sign
                    In</router-link>
            </div>
            <button class="lg:hidden" @click="toggleMobileMenu">
                <i class="pi pi-bars text-2xl"></i>
            </button>
        </div>

        <div v-if="mobileMenuOpen" class="lg:hidden bg-[#F4F9F4] dark:bg-gray-800 px-4 py-3 space-y-3">
            <router-link to="/" class="block">Home</router-link>
            <div>
                <div class="flex items-center justify-between w-full">
                    <router-link to="/about_us" class="flex-1">About Us</router-link>
                    <button @click="toggleDropdown('about')" class="flex items-center justify-center w-8">
                        <i :class="['pi', activeDropdown === 'about' ? 'pi-angle-up' : 'pi-angle-down']"></i>
                    </button>
                </div>
                <div v-if="activeDropdown === 'about'" class="pl-4">
                    <router-link v-for="(item, index) in aboutLinks" :key="index" :to="item.path"
                        class="block py-1 hover:bg-gray-100 dark:hover:bg-gray-700">{{ item.name }}</router-link>
                </div>
            </div>
            <router-link to="/fatwa" class="block">Fatwas</router-link>
            <DropdownMenu label="Services" :items="servicesLinks" v-model="activeDropdown" class="font-medium" />
            <router-link to="/announcements" class="block">Announcement</router-link>
            <router-link to="/events" class="block">Events</router-link>
            <router-link to="/" class="block">Donate</router-link>
            <router-link to="/contactus" class="block">Contact Us</router-link>
            <div class="flex flex-wrap gap-2 mt-3">
                <button class="bg-[#3E5E31] text-white px-4 py-1 rounded-full  text-base dark:bg-[#2B4724]">Get
                    Contribute</button>
                <router-link to="/auth/login" class="bg-[#3E5E31] text-white px-4 py-1 rounded-full text-sm xl:text-base hover:opacity-90 dark:bg-[#2B4724]">Sign
                    In</router-link>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import DarkModeToggle from '@/layouts/DarkModeToggle.vue'
import DropdownMenu from '@/layouts/DropdownMenu.vue'


const route = useRoute()
const mobileMenuOpen = ref(false)
const activeDropdown = ref(null)

watch(() => route.path, () => {
    mobileMenuOpen.value = false
    activeDropdown.value = null
})

function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
    if (!mobileMenuOpen.value) {
        activeDropdown.value = null
    }
}

function toggleDropdown(menu) {
    activeDropdown.value = activeDropdown.value === menu ? null : menu
}

const aboutLinks = [
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Membership', path: '/' },
    { name: 'IANA Videos', path: '/iana_videos' }
]

const servicesLinks = [
  { name: 'Dawa Activities', path: '/dawaactivity' },
  { name: 'IANA Youth Services', path: '/' },
  { name: 'Health Awareness', path: '/healthawareness' },
  { name: 'IANA General Assembly', path: '/' },
  { name: 'Family & business counseling', path: '/family-business-counseling' },
  { name: 'IANA Banquet', path: '/ianaannualbanquet' },
  { name: 'Civic Engagement', path: '/civicsengagement' },
  { name: 'Press Release', path: '/pressrelease' }
]
</script>
