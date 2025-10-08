<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div v-for="(item, index) in news" :key="index"
                    class="border-2 rounded border-[#99B88B] bg-white dark:bg-slate-950 p-2 space-y-3 transition-all duration-500 hover:scale-105 cursor-pointer">
                    <img :src="item.image" alt="">

                    <div class="flex justify-between">
                        <div class="flex gap-2">
                            <div
                                class="w-5 h-7 bg-[#3F642E] dark:bg-[#99B88B] [clip-path:polygon(0_0,100%_0,100%_100%,50%_75%,0_100%)]">
                            </div>
                            <h1 class="font-semibold text-[#3F642E] dark:text-[#99B88B]">
                                {{ item.category }}
                            </h1>
                        </div>
                        <div>
                            <span class="text-sm">{{ item.date }}</span>
                        </div>
                    </div>

                    <h3 class="text-2xl text-[#C2692B] font-semibold dark:text-[#99B88B]">
                        {{ item.title }}
                    </h3>

                    <p>{{ item.description }}</p>

                    <router-link :to="`/announcement/${item.id}`"
                        class="btn text-[#3F642E] hover:text-[#99B88B] dark:text-[#99B88B] underline font-semibold">
                        Read More
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const news = ref([
    {
        id: 1,
        image: "/images/news-1.png",
        category: "Ramadan",
        date: "08-13-2025",
        title: "Crescent of Ramadan announcement (IANA) 1446",
        description:
            "February 28, 2025, Statement of the Islamic Association of North America (IANA) regarding the beginning of Ramadan in the year 1446 AH..",
    },
    {
        id: 2,
        image: "/images/news-2.png",
        category: "Electing New Leadership",
        date: "08-15-2025",
        title: "IANA General Assembly 2024: Electing New Leadership to Drive Reform and Progress",
        description:
            "Columbus, Ohio – November 23, 2024 – The Islamic Association of North America (IANA) held..",
    },
    {
        id: 3,
        image: "/images/news-3.png",
        category: "Eid Al-adha",
        date: "08-18-2025",
        title: "EID MUBARAK",
        description:
            "Eid Mubarak to you and your Families! The Islamic Association of North America (AINA) wishes to congratulate all Muslims in the United States and around the word on this joyous occassion of...",
    },
    {
        id: 1,
        image: "/images/news-1.png",
        category: "Ramadan",
        date: "08-13-2025",
        title: "Crescent of Ramadan announcement (IANA) 1446",
        description:
            "February 28, 2025, Statement of the Islamic Association of North America (IANA) regarding the beginning of Ramadan in the year 1446 AH..",
    },
    {
        id: 2,
        image: "/images/news-2.png",
        category: "Electing New Leadership",
        date: "08-15-2025",
        title: "IANA General Assembly 2024: Electing New Leadership to Drive Reform and Progress",
        description:
            "Columbus, Ohio – November 23, 2024 – The Islamic Association of North America (IANA) held..",
    },
    {
        id: 3,
        image: "/images/news-3.png",
        category: "Eid Al-adha",
        date: "08-18-2025",
        title: "EID MUBARAK",
        description:
            "Eid Mubarak to you and your Families! The Islamic Association of North America (AINA) wishes to congratulate all Muslims in the United States and around the word on this joyous occassion of...",
    },
    {
        id: 1,
        image: "/images/news-1.png",
        category: "Ramadan",
        date: "08-13-2025",
        title: "Crescent of Ramadan announcement (IANA) 1446",
        description:
            "February 28, 2025, Statement of the Islamic Association of North America (IANA) regarding the beginning of Ramadan in the year 1446 AH..",
    },
    {
        id: 2,
        image: "/images/news-2.png",
        category: "Electing New Leadership",
        date: "08-15-2025",
        title: "IANA General Assembly 2024: Electing New Leadership to Drive Reform and Progress",
        description:
            "Columbus, Ohio – November 23, 2024 – The Islamic Association of North America (IANA) held..",
    },
    {
        id: 3,
        image: "/images/news-3.png",
        category: "Eid Al-adha",
        date: "08-18-2025",
        title: "EID MUBARAK",
        description:
            "Eid Mubarak to you and your Families! The Islamic Association of North America (AINA) wishes to congratulate all Muslims in the United States and around the word on this joyous occassion of...",
    },
    
]);
</script>