<template>
    <div class="w-full px-2 py-5 sm:py-10 bg-[#EBF8E5] dark:bg-slate-900 mb-3">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-5">
                <h2 class="text-2xl sm:text-4xl font-semibold text-[#3F642E]">Services</h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
                <div v-for="service in services" :key="service.id" class="bg-white text-center shadow-md p-3 rounded dark:bg-slate-950 space-y-5 transition-all duration-500 hover:scale-110 cursor-pointer w-full flex flex-col items-center justify-center">
                    <img :src="service.image" class="mx-auto w-14" :alt="service.title">
                    <h3 class="text-base font-medium text-[#3F642E]">{{ service.title }}</h3>
                </div>
            </div>
            <div class="text-center">
                <button class="btn bg-[#3F642E] hover:bg-[#B35C2E] px-10 py-1 text-white rounded-full transition-all duration-500 hover:scale-110 cursor-pointer">View More</button>
            </div>
        </div>
    </div>
    <div class="w-full px-2 py-5 sm:py-10 bg-[#EBF8E5] dark:bg-slate-900 mb-3">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5 items-center">
                <div class="space-y-3">
                    <h2 class="text-2xl sm:text-4xl font-semibold text-[#3F642E]">Ramadan Mubarak!</h2>
                    <p class="text-[#C2692B] font-semibold">Assalamu Alaykum Warahmatullahi Wabarakatuh.</p>
                    <p>Allah (swt) has gifted us the opportunity to experience another Ramadan. Alhamdulillah! Now is the time to make the most of the blessing of this special month by renewing the bonds of our Ummah. The Messenger of Allah (saw) said:</p>
                    <p class="text-[#C2692B] font-semibold text-center">“None of you (truly) believes until he loves for his brother that which he loves for himself”.</p>
                    <p>Here are a number of things you can do this Ramadan. Get Involved!</p>
                    <button class="btn bg-[#3F642E] hover:bg-[#B35C2E] px-10 py-1 text-white rounded-full transition-all duration-500 hover:scale-110 cursor-pointer">Watch More Videos</button>
                </div>
                <div class="relative">
                    <img :src="'images/playicon.png'" class="absolute w-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="">
                    <img :src="'images/video-1.png'" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const services = [
    {
        id: 1,
        title: "Da'wa Activity",
        image: "/images/services-2.png"
    },
    {
        id: 2,
        title: "IANA Youth Services",
        image: "/images/services-9.png"
    },
    {
        id: 3,
        title: "Health Awareness",
        image: "/images/services-8.png"
    },
    
    {
        id: 4,
        title: "IANA General Assembly",
        image: "/images/services-4.png"
    },
    {
        id: 5,
        title: "Family & Business Counseling",
        image: "/images/services-7.png"
    },
    {
        id: 6,
        title: "IANA Banquet",
        image: "/images/services-10.png"
    },
    {
        id: 7,
        title: "Civics Engagement",
        image: "/images/services-6.png"
    },
    {
        id: 8,
        title: "Press Release",
        image: "/images/services-1.png"
    },
        
]
</script>