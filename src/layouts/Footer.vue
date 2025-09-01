<template>
    <footer class="bg-[#3F642E] dark:bg-gray-950 text-white pt-10 pb-5 px-6 md:px-20">
        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-4">
                <router-link to="/" class="flex items-center gap-3 mb-2">
                    <img :src="'/footer-logo.png'" alt="IANA Logo" class="w-4/5 " @contextmenu.prevent
                        @dragstart.prevent />
                </router-link>
                <p>The Islamic Association of North America is a non-profit organization based in minneapolis that was
                    founded in the year of 2001.</p>
                <div class="flex items-center gap-3 mt-3">
                    <a href="#"
                        class="w-7 h-7 text-base flex items-center justify-center hover:opacity-80 bg-white text-[#3F642E] rounded">
                        <i class="pi pi-facebook"></i>
                    </a>
                    <a href="#"
                        class="w-7 h-7 text-base flex items-center justify-center hover:opacity-80 bg-white text-[#3F642E] rounded">
                        <i class="pi pi-twitter"></i>
                    </a>
                    <a href="#"
                        class="w-7 h-7 text-base flex items-center justify-center hover:opacity-80 bg-white text-[#3F642E] rounded">
                        <i class="pi pi-linkedin"></i>
                    </a>
                    <a href="#"
                        class="w-7 h-7 text-base flex items-center justify-center hover:opacity-80 bg-white text-[#3F642E] rounded">
                        <i class="pi pi-instagram"></i>
                    </a>
                </div>

            </div>
            <div class="lg:col-span-2">
                <h2 class="font-semibold mb-2 text-xl text-white dark:text-gray-100">
                    Useful Links
                </h2>
                <ul class="space-y-2 text-lg">
                    <li v-for="(item, index) in UsefulLinks" :key="index">
                        <router-link :to="item.path"
                            class="group flex items-center gap-3 text-white dark:text-gray-100 hover:text-green-500">
                            <i
                                class="pi pi-arrow-right text-xs transform transition-transform duration-200 group-hover:scale-125"></i>
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>
            </div>

            <div class="lg:col-span-3">
                <h2 class="font-semibold mb-2 text-xl text-white dark:text-gray-100">
                    Quick Links
                </h2>
                <ul class="space-y-2 text-lg">
                    <li v-for="(item, index) in quickLinks" :key="index">
                        <router-link :to="item.path"
                            class="group flex items-center gap-3 text-white dark:text-gray-100 hover:text-green-500">
                            <i
                                class="pi pi-arrow-right text-xs transform transition-transform duration-200 group-hover:scale-125"></i>
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>
                
            </div>

            <div class="lg:col-span-3">
                <h2 class="font-semibold mb-2 text-xl text-white dark:text-gray-100">
                    Contacts
                </h2>
                <ul class="space-y-2 text-lg">
                    <li>
                        <a class="group flex items-center gap-3 text-white dark:text-gray-100 hover:text-green-500">
                            <i
                                class="pi pi-phone text-lg transform transition-transform duration-200 group-hover:scale-125"></i>
                            + 612-874-0665
                        </a>
                    </li>
                    <li>
                        <a class="group flex items-center gap-3 text-white dark:text-gray-100 hover:text-green-500">
                            <i
                                class="pi pi-envelope text-lg transform transition-transform duration-200 group-hover:scale-125"></i>
                            info@ianaonline.org
                        </a>
                    </li>
                    <li>
                        <a class="group flex items-center gap-3 text-white dark:text-gray-100 hover:text-green-500">
                            <i
                                class="pi pi-map-marker text-lg transform transition-transform duration-200 group-hover:scale-125"></i>
                            3355 Hiawatha Ave South Suite # 202 Minneapolis, MN 55406
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    <div class=" text-center py-4 px-5">
        <p>© Copyright 2025 IANA. All rights reserved.</p>
    </div>
</template>

<script setup>

const UsefulLinks = [
    { name: 'Member Center', path: '/' },
    { name: 'Newsletter', path: '/' },
    { name: 'Ask For Muslim', path: '/' },
    { name: 'Press Release', path: '/' },
    { name: 'Islam', path: '/' },
    { name: 'Workshops', path: '/' }
]

const quickLinks = [
    { name: 'Photos', path: '/' },
    { name: 'Videos', path: '/' },
    { name: 'Sexual Misconduct Policy', path: '/' },
    { name: 'Zakat Calculation', path: '/' },
    { name: 'Sponsor', path: '/' },
    { name: 'Fatwas', path: '/' }
]
</script>