<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto mb-10 px-4 sm:px-6 lg:px-8">
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in newsList" :key="index"
                    class="p-2 border-2 rounded-md border-[#99B88B] dark:bg-slate-950 space-y-3 transition-all duration-500 hover:scale-105 cursor-pointer">
                    <img :src="item.image" class="text-center w-full" alt="" />

                    <div class="flex gap-4 flex-wrap">
                        <span class="text-sm text-[#C2692B] font-medium">{{ item.date }}</span>
                        <span class="text-sm text-[#C2692B] font-medium">{{ item.time }}</span>
                    </div>

                    <h3 class="text-2xl font-semibold text-[#3F642E]">
                        {{ item.title }}
                    </h3>

                    <p class="text-lg">
                        {{ item.description }}
                    </p>

                    <router-link :to="`/events/${item.id}`" class="text-base text-[#3F642E] underline font-medium">
                        Read More
                    </router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

const newsList = [
    {
        id: 1,
        image: "/images/events-1.png",
        date: "27-Feb-2025",
        time: "06:30 PM to 08:00 PM",
        title: "Health Through Knowledge - Immunization & the Islamic Perspective",
        description:
            "Health Through Knowledge Immunization & the Islamic Perspective Guest Speakers...",
    },
    {
        id: 2,
        image: "/images/events-2.png",
        date: "05-Mar-2025",
        time: "02:00 PM to 03:30 PM",
        title: "Healthy Ramadan, Healthy you",
        description:
            "Healthy Ramadan, Healthy you A guide to health and Nutrition in Ramadan! Nurse Abdirahman Abdi",
    },
    {
        id: 3,
        image: "/images/events-3.png",
        date: "05-Mar-2025",
        time: "02:00 PM to 03:30 PM",
        title: "Family Vaccine Clinic- FEB 22",
        description:
            "Family Vaccine Clinic Mobile Health Clinic is back to service you: Blood pressure and diabetes testing. Many other over-the-counter medications, such pain relievers and acid reflux medications...",
    },
    {
        id: 1,
        image: "/images/events-1.png",
        date: "27-Feb-2025",
        time: "06:30 PM to 08:00 PM",
        title: "Health Through Knowledge - Immunization & the Islamic Perspective",
        description:
            "Health Through Knowledge Immunization & the Islamic Perspective Guest Speakers...",
    },
    {
        id: 2,
        image: "/images/events-2.png",
        date: "05-Mar-2025",
        time: "02:00 PM to 03:30 PM",
        title: "Healthy Ramadan, Healthy you",
        description:
            "Healthy Ramadan, Healthy you A guide to health and Nutrition in Ramadan! Nurse Abdirahman Abdi",
    },
    {
        id: 3,
        image: "/images/events-3.png",
        date: "05-Mar-2025",
        time: "02:00 PM to 03:30 PM",
        title: "Family Vaccine Clinic- FEB 22",
        description:
            "Family Vaccine Clinic Mobile Health Clinic is back to service you: Blood pressure and diabetes testing. Many other over-the-counter medications, such pain relievers and acid reflux medications...",
    },
    {
        id: 1,
        image: "/images/events-1.png",
        date: "27-Feb-2025",
        time: "06:30 PM to 08:00 PM",
        title: "Health Through Knowledge - Immunization & the Islamic Perspective",
        description:
            "Health Through Knowledge Immunization & the Islamic Perspective Guest Speakers...",
    },
    {
        id: 2,
        image: "/images/events-2.png",
        date: "05-Mar-2025",
        time: "02:00 PM to 03:30 PM",
        title: "Healthy Ramadan, Healthy you",
        description:
            "Healthy Ramadan, Healthy you A guide to health and Nutrition in Ramadan! Nurse Abdirahman Abdi",
    },
    {
        id: 3,
        image: "/images/events-3.png",
        date: "05-Mar-2025",
        time: "02:00 PM to 03:30 PM",
        title: "Family Vaccine Clinic- FEB 22",
        description:
            "Family Vaccine Clinic Mobile Health Clinic is back to service you: Blood pressure and diabetes testing. Many other over-the-counter medications, such pain relievers and acid reflux medications...",
    },
];

</script>

