<template>
    <div class="w-full px-2 py-5 sm:py-10 bg-[#EBF8E5] dark:bg-slate-950 my-2">
        <div class="container mx-auto">
            <div class="text-center mb-5">
                <h2 class="text-2xl sm:text-4xl font-semibold text-[#3F642E]">Services</h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-5">
                <div v-for="service in services" :key="service.id" class="bg-white text-center shadow-md p-3 rounded dark:bg-slate-900 space-y-5 transition-all duration-500 hover:scale-110 cursor-pointer w-full flex flex-col items-center justify-center">
                    <img :src="service.image" class="mx-auto w-14" :alt="service.title">
                    <h3 class="text-base font-medium text-[#3F642E] dark:text-white">{{ service.title }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const services = [
    {
        id: 1,
        title: "Press Release",
        image: "/images/services-1.png"
    },
    {
        id: 2,
        title: "Da'wa Activity",
        image: "/images/services-2.png"
    },
    {
        id: 3,
        title: "IANA Relief",
        image: "/images/services-3.png"
    },
    {
        id: 4,
        title: "IANA Somali Involvement",
        image: "/images/services-4.png"
    },
    {
        id: 5,
        title: "Covid-19",
        image: "/images/services-5.png"
    },
    {
        id: 6,
        title: "Civics Engagement",
        image: "/images/services-6.png"
    },
    {
        id: 7,
        title: "Family & Business Counseling",
        image: "/images/services-7.png"
    },
    {
        id: 8,
        title: "Health Awareness",
        image: "/images/services-8.png"
    },
    {
        id: 9,
        title: "IANA Advocacy Involvement",
        image: "/images/services-9.png"
    },
    {
        id: 10,
        title: "IANA Annual Banquet",
        image: "/images/services-10.png"
    },
    {
        id: 11,
        title: "IANA Annual Conference",
        image: "/images/services-11.png"
    },
    {
        id: 12,
        title: "Islamic Holidays",
        image: "/images/services-12.png"
    },
    {
        id: 13,
        title: "Member Centers",
        image: "/images/services-13.png"
    },
    {
        id: 14,
        title: "Youth and Family",
        image: "/images/services-14.png"
    },
    {
        id: 15,
        title: "“WAQF” Initiative",
        image: "/images/services-15.png"
    }
]
</script>