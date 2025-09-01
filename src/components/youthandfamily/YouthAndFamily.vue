<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto space-y-5">
            <div class="space-y-3">
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#3F642E] font-semibold">Youth and Family</h2>
                <p class="leading-relaxed mb-2">YOUTH LEADERSHIP PROGRAM</p>
                <p class="leading-relaxed mb-2">The Islamic Association of North America is committed to working with member centers and local communities to develop youth programs that enhance the wellbeing of Somali and Muslim youth in America.</p>
                <p class="leading-relaxed mb-2">IANA conducts training and workshops for local organizations on how to develop youth programs that build the religious knowledge and confidence of the youth.</p>
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
        image: "/images/youth-2.png",
        title: "Youth and Family"
    },
    {
        image: "/images/youth-1.png",
        title: "IANA Sponsors Soccer Tournament"
    },
]
</script>