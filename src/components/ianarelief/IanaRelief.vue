<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto space-y-5">
            <div class="space-y-3">
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#3F642E] font-semibold">IANA RELIEF</h2>
                <p class="leading-relaxed mb-2">IANA Relief: IANA pushes for not only supporting the local community but the communities we have back home. In any case of relief and aid, IANA is willing to help support our people when they need it most. In the past decade, IANA has raised over 5 million dollars in aid and funding.</p>
                <p class="leading-relaxed">It is not only relief that funds are raised for, but for development and sustainability. Partnering with relief organizations such as HARO (Humanitarian African Relief Organization) to support Somalia during times of emergency and East Africa at large.</p>
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
    image: "/images/ianarelief.png",
    title: "IANA Relief Djibouti"
  },
  {
    image: "/images/ianarelief-1.png",
    title: "IANA Relief Hiiraan"
  }
]
</script>