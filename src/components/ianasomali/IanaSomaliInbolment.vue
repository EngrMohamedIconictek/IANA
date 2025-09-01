<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto space-y-5">
            <div class="space-y-3">
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#3F642E] font-semibold">IANA SOMALI INVOLVEMENT</h2>
                <p class="leading-relaxed mb-2">IANA Welcomes The Ambassador to the OIC</p>
                <p class="leading-relaxed">IANA welcomed the permanent representative of Somalia to the Organization of Islamic Cooperation (OIC), H. E. Ambassador Abdirazak Siyad Abdi to Minnesota. IANA Board chair Sh. Mohamed Mursal, IANA General Assembly and fatwa committee member Dr. Waleed Al-Maneese, Sh. Ahmed Anshur member of IANA Advisory Committee, Sh. Mohamed Omar, a member of IANA General assembly received and welcome at the MSP international airport.</p>
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
    image: "/images/ianasomali.png",
    title: "Somali Ambassador of the Federal Republic of Somalia"
  },
  {
    image: "/images/ianasomali-1.png",
    title: "Former Minister of Fisheries and Marine Resources of Somalia"
  },
  {
    image: "/images/ianasomali-2.png",
    title: "Former Minister of Fisheries and Marine Resources of Somalia"
  }
]
</script>