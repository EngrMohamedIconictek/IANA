<template>
    <aside ref="sidebarRef" :class="[
        'fixed z-40 top-0 left-0 h-full bg-green-900 dark:bg-gray-800 shadow-md transition-all duration-400 ease-in-out',
        collapsed ? 'w-[70px] md:w-[70px]' : 'w-[280px] md:w-[280px]',
        mobileOpen ? 'translate-x-0' : '-translate-x-full',
        'md:static md:translate-x-0',
        'md:block',
        'md:h-auto',
    ]" @click.self="closeMobile">
        <div class="flex py-3 px-3 border-b border-gray-300 dark:border-gray-700 items-center justify-between"
            :class="collapsed ? 'py-4 px-5' : ''">
            <img v-if="!collapsed" :src="'/footer-logo.png'" class="h-10" alt="" />
            <button
                class="hidden md:inline-flex items-center justify-center w-8 h-8 text-white rounded bg-green-500/20 hover:bg-green-300/20 dark:hover:bg-gray-700"
                @click="toggleCollapse" :aria-label="collapsed ? 'Expand sidebar' : 'Collapse sidebar'">
                <i :class="collapsed ? 'pi pi-angle-right text-3xl' : 'pi pi-angle-left text-3xl'"></i>
            </button>
            <button
                class="md:hidden inline-flex items-center justify-center w-8 h-8 text-white bg-green-500/20 hover:bg-green-300/20 dark:hover:bg-gray-700"
                @click="closeMobile" aria-label="Close sidebar">
                <i class="pi pi-times"></i>
            </button>
        </div>
        <nav :class="['overflow-y-auto max-h-[calc(100vh-4rem)] space-y-1.5', collapsed ? 'p-2' : 'p-3']" >
            <template v-for="item in menu" :key="item.label">
                <router-link v-if="item.type === 'link'" :to="item.to"
                    @click="handleMenuClick"
                    @mouseenter="handleMenuMouseEnter(item.label)"
                    @mouseleave="handleMenuMouseLeave"
                    class="flex items-center gap-3 py-1.5 px-3  rounded hover:bg-green-200 hover:text-green-700 dark:hover:bg-gray-900 active:text-green-800 text-white"
                    :class="{
                        'bg-[#C2692A] dark:bg-gray-900 hover:bg-green-200 hover:text-green-700 text-white': $route.path === item.to,
                        'justify-center': collapsed,
                    }">
                    <i :class="[item.icon, $route.path === item.to ? 'text-green-700 dark:text-white' : 'text-green-500 hover:text-green-600']"
                        class="text-xl"></i>
                    <span v-if="!collapsed || mobileOpen" class="whitespace-nowrap">{{ item.label }}</span>
                </router-link>
                <div v-else-if="item.type === 'submenu'" class="relative"
                    @mouseenter="handleMenuMouseEnter(item.label)"
                    @mouseleave="handleMenuMouseLeave">
                    <button @click="toggleSubmenu(item.label)"
                        class="flex items-center gap-3 py-1.5 px-3 rounded w-full hover:bg-green-200 dark:hover:bg-gray-700 text-white hover:text-green-800"
                        :class="[
                            collapsed ? 'justify-center' : '',
                            item.children.some(child => $route.path === child.to)
                                ? 'bg-[#C2692A] dark:bg-gray-900 hover:text-green-700 text-white'
                                : ''
                        ]">
                        <i
                            :class="[item.icon, 'text-xl', item.children.some(child => $route.path === child.to) ? 'text-white hover:text-green-700 dark:text-white' : 'text-green-500 hover:text-green-600']"></i>
                        <span v-if="!collapsed || mobileOpen" class="whitespace-nowrap">{{ item.label }}</span>
                        <i v-if="!collapsed || mobileOpen" :class="['pi', openSubmenu === item.label ? 'pi-angle-down' : 'pi-angle-right']"
                            class="ml-auto"></i>
                    </button>

                    <div v-if="openSubmenu === item.label" class=" mt-1 rounded bg-white dark:bg-gray-900"
                        v-show="!collapsed || mobileOpen">
                        <router-link v-for="child in item.children" :key="child.label" :to="child.to"
                            @click="handleMenuClick"
                            class="flex items-center gap-2 py-1.5 pl-5 px-3   hover:bg-green-200 hover:text-green-800 dark:hover:bg-gray-950 rounded text-green-700"
                            :class="{ 'bg-[#C2692A] dark:bg-gray-950 hover:text-green-700 rounded text-white': $route.path === child.to }">
                            <i
                                :class="[child.icon, $route.path === child.to ? 'text-white hover:text-green-700 dark:text-white' : 'text-green-500 hover:text-green-600']" class="text-xl"></i>
                            <span>{{ child.label }}</span>
                        </router-link>
                    </div>
                </div>

                <button v-else-if="item.type === 'button'" @click="() => { item.action(); handleMenuClick(); }"
                    @mouseenter="handleMenuMouseEnter(item.label)"
                    @mouseleave="handleMenuMouseLeave"
                    class="flex items-center gap-3 py-1.5 px-3 rounded w-full text-left hover:bg-red-100 dark:hover:bg-red-800 text-white hover:text-red-400 dark:text-red-400"
                    :class="{ 'justify-center': collapsed }">
                    <i :class="item.icon"></i>
                    <span v-if="!collapsed || mobileOpen" class="whitespace-nowrap">{{ item.label }}</span>
                </button>
            </template>
        </nav>
    </aside>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Iconoir } from '@iconoir/vue';

const props = defineProps({
    mobileOpen: Boolean,
})
const emit = defineEmits(['update:mobileOpen'])

const collapsed = ref(false)
const openSubmenu = ref(null)
const hoveredMenu = ref(null) 
const router = useRouter()

const sidebarRef = ref(null)

const toggleCollapse = () => {
    collapsed.value = !collapsed.value
}

const toggleSubmenu = (label) => {
    openSubmenu.value = openSubmenu.value === label ? null : label
}

const closeMobile = () => {
    emit('update:mobileOpen', false)
}

const logout = () => {
    localStorage.removeItem('auth')
    router.push('/auth/login')
}

const handleMenuClick = () => {
    openSubmenu.value = null
    // Close mobile sidebar when menu item is clicked
    if (window.innerWidth < 768) { // md breakpoint
        closeMobile()
    }
}

const handleClickOutside = (event) => {
    if (sidebarRef.value && !sidebarRef.value.contains(event.target)) {
        openSubmenu.value = null
    }
}

// --- Hover logic ---
const handleMenuMouseEnter = (label) => {
    if (collapsed.value) {
        hoveredMenu.value = label
        collapsed.value = false
    }
}
const handleMenuMouseLeave = () => {
    if (hoveredMenu.value) {
        hoveredMenu.value = null
        collapsed.value = true
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})
onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})

const menu = [
    {
        type: 'link',
        to: '/dashboard',
        label: 'Dashboard',
        icon: 'pi pi-home',
    },
    {
        type: 'submenu',
        label: 'Events',
        icon: 'iconoir-calendar',
        children: [
            {
                type: 'link',
                label: 'Create Events',
                to: '/dashboard/create',
                icon: 'iconoir-calendar',
            },
            {
                type: 'link',
                label: 'Upcoming Events',
                to: '/dashboard/events',
                icon: 'iconoir-calendar',
            }
        ]
    },
    {
        type: 'submenu',
        label: 'Services',
        icon: 'iconoir-settings',
        children: [
            {
                type: 'link',
                label: 'Add Services',
                to: '/dashboard/services/create',
                icon: 'iconoir-settings',
            },
            {
                type: 'link',
                label: 'Services List',
                to: '/dashboard/services',
                icon: 'iconoir-settings',
            },
            {
                type: 'link',
                label: 'Add Category',
                to: '/dashboard/services/create_category',
                icon: 'iconoir-settings',
            },
            {
                type: 'link',
                label: 'Category List',
                to: '/dashboard/services/category',
                icon: 'iconoir-settings',
            }
        ]
    },
    {
        type: 'submenu',
        label: 'Fatwa',
        icon: 'iconoir-book',
        children: [
            {
                type: 'link',
                label: 'Fatwa List',
                to: '/dashboard/fatwas',
                icon: 'iconoir-book',
            },
            {
                type: 'link',
                label: 'Fatwa Categories',
                to: '/dashboard/fatwas/categories',
                icon: 'iconoir-book',
            },
            {
                type: 'link',
                label: 'Fatwa Hotline',
                to: '/dashboard/fatwas/hotline',
                icon: 'iconoir-book',
            }
        ]
    },
    {
        type: 'submenu',
        label: 'Sponsors',
        icon: 'pi pi-chart-bar',
        children: [
            {
                type: 'link',
                label: 'Add Sponsors',
                to: '/dashboard/sponsors/create',
                icon: 'pi pi-chart-bar',
            },
            {
                type: 'link',
                label: 'Sponsors List',
                to: '/dashboard/sponsors',
                icon: 'pi pi-chart-bar',
            },
            {
                type: 'link',
                label: 'Sponsor Types',
                to: '/dashboard/sponsors/types',
                icon: 'pi pi-chart-bar',
            },
            {
                type: 'link',
                label: 'Sponsor Form ',
                to: '/dashboard/sponsors/form',
                icon: 'pi pi-chart-bar',
            },
            
        ]
    },
    {
        type: 'submenu',
        label: 'Islam',
        icon: 'pi pi-th-large',
        children: [
            {
                type: 'link',
                label: '5 Pillar List',
                to: '/dashboard/islam/5_pillar_islam',
                icon: 'pi pi-list-check',
            },
            {
                type: 'link',
                label: '6 Pillar List',
                to: '/dashboard/islam/6_pillar_islam',
                icon: 'pi pi-list-check',
            }
        ]
    },
    {
        type: 'submenu',
        label: 'News',
        icon: 'pi pi-copy',
        children: [
            {
                type: 'link',
                label: 'News List',
                to: '/dashboard/news',
                icon: 'pi pi-copy',
            },
            {
                type: 'link',
                label: 'Add List',
                to: '/dashboard/news/create',
                icon: 'pi pi-copy',
            }
        ]
    },
    
    {
        type: 'button',
        label: 'Logout',
        icon: 'pi pi-sign-out',
        action: logout,
    },
]
</script>