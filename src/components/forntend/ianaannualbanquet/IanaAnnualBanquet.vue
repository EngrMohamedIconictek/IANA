<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto space-y-5 px-4 sm:px-6 lg:px-8">
            <div class="space-y-3">
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#3F642E] font-semibold">IANA Annual Banquet</h2>
                <p class="leading-relaxed mb-2">IANA also holds an annual banquet in the Twin Cities to showcase the great work the organization has done with the community. IANA also awards a person and/or a business who have made an impact on the community. This is a great night for the public to know the services IANA provides and contributes. The goal of this program is to create networks for the organization from other profit and non-profit organizations including faith-based organizations, philanthropists, elected officials, business people and other dignitaries.</p>
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
        image: "/images/IANAAnnualBanquet.png",
        title: "IANA Annual Banquet 2019"
    },
]
</script>