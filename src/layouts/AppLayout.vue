<template>
    <div class="flex h-screen bg-gray-200 text-[#4A4A4A] dark:bg-slate-950 text-lg dark:text-white">
        <Sidebar :mobileOpen="mobileOpen" @update:mobileOpen="mobileOpen = $event" class="flex-shrink-0 h-screen z-30" />

        <div class="flex-1 flex flex-col max-w-full h-screen overflow-hidden">
            <DashboardHeader @toggle-mobile-sidebar="mobileOpen = true" class="sticky top-0 z-20" />
            <main class="flex-1 overflow-auto">
                <div class="w-full p-5">
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '@/layouts/Sidebar.vue'
import DashboardHeader from '@/layouts/DashboardHeader.vue'

const mobileOpen = ref(false)
</script>