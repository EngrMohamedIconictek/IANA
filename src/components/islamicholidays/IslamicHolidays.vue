<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto space-y-5">
            <div class="space-y-3">
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#3F642E] font-semibold">Islamic Holidays</h2>
                <p class="leading-relaxed mb-2">As a faith organization part of our job is to keep the public informed and updated on things such as holiday announcements. After the scholars meet together and come to a unanimous decision, using accurate Islamic guidelines, they will then issue an announcement via Facebook, mass emailing and mass phone calling. For example, when the moon is spotted and Ramadan is completed, we will send out flyers such as the one down below to let the people know that we are no longer fasting and will be celebrating Eid.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in cards" :key="index"
                    class="border-2 border-[#3F642E] rounded-md p-3 bg-[#FBFBFB] dark:bg-slate-950 space-y-3">
                    <img :src="item.image" class="w-full object-cover" alt="">
                    <h3 class="text-xl font-semibold text-[#3F642E]">{{ item.title }}</h3>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const cards = [
    {
        image: "/images/IslamicHolidays1.png",
        title: "Monday, May 2nd, 2022 will be the first day of Shawwal and Eid al-Fitr."
    },
    {
        image: "/images/IslamicHolidays2.png",
        title: "Announcing Eid Al-Fitr - 2021!"
    },
    {
        image: "/images/IslamicHolidays3.png",
        title: "Ramadan Officially Starts Tomorrow April 13th, 2021!"
    },
    {
        image: "/images/IslamicHolidays4.png",
        title: "IANA is pleased to announce Eid Al- Fitr to be on Saturday, May 23rd, 2020"
    },
    {
        image: "/images/IslamicHolidays5.png",
        title: "Last 10 Days Of Ramadan"
    },
    {
        image: "/images/IslamicHolidays6.png",
        title: "Ramadan Kariim! - April 24th, 2020"
    },
    {
        image: "/images/IslamicHolidays7.png",
        title: "Eid Mubarak - June 25th, 2017"
    },
    {
        image: "/images/IslamicHolidays8.png",
        title: "Eid al-Fitr - June 25th, 2017"
    },
    {
        image: "/images/IslamicHolidays9.png",
        title: "IANA’s Official Ramadan Announcement - May 27th, 2017"
    },
    {
        image: "/images/IslamicHolidays10.png",
        title: "Ramadan Mubarak - June 6, 2016"
    },
    {
        image: "/images/IslamicHolidays11.png",
        title: "Islamic Association of North America (IANA) is pleased to announce Eid al-Fitr to be on Wednesday July 6th, 2016"
    },
]
</script>