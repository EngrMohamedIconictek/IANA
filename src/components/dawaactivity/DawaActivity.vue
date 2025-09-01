<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto space-y-5">
            <div class="space-y-3">
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#3F642E] font-semibold">Da'wa Activity</h2>
                <p class="leading-relaxed mb-2">Da'wah: IANA Islamic Association of North America (IANA) was founded in the year of 2001 to meet the religious and social needs of Muslim societies in North America. As a response to the changing realities of Muslim communities, IANA re-positions itself to effectively reach diverse Muslim communities across the country.</p>
                <p class="leading-relaxed">During Ramadan, IANA held many Da’wah events to connect our Muslim community to the masjid since the masaajid are closed due to COVID-19 guidelines. IANA also holds many webinars regarding defending the Prophet</p>
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
    image: "/images/dawa.png",
    title: "Ummul Mu’minina Hind al-Makhzumiyah - Part Two"
  },
  {
    image: "/images/dawa-1.png",
    title: "Ummul Mu’minina Hind al-Makhzumiyah | Part 5"
  },
  {
    image: "/images/dawa-1.png",
    title: "Ummul Mu’miniin Zaynab Bint Khuzaymah| Part 4"
  },
  {
    image: "/images/dawa-1.png",
    title: "BIOGRAPHY OF PROPHET MUHAMMAD (PBUH)"
  }
]
</script>