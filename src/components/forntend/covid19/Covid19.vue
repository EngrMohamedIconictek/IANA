<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto space-y-5">
            <div class="space-y-3">
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#3F642E] font-semibold">COVID-19</h2>
                <p class="leading-relaxed mb-2">COVID-19:  During the COVID-19 pandemic IANA has raised awareness and delivered detailed information regarding the virus and resources for those who have been affected by it. IANA partnered with MDH to best serve the Somali and Muslim community at large. By partnering with MDH, IANA has set up a COVID-19 hotline where the community can call and ask questions pertaining to finding a COVID-19 testing site, rental and food assistance, and any other resources. Mosques and Islamic organizations were closed during the peak of COVID-19 to ensure everyone’s safety.</p>
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
    image: "/images/covid-1.png",
    title: "Free Pfizer Vaccine at Al-Ihsan Islamic Center"
  },
  {
    image: "/images/covid-2.png",
    title: "COVID-19 Vaccine Eligibility Expanded to 16 and up!"
  },
  {
    image: "/images/covid-3.png",
    title: "Minnesota COVID-19 Vaccination Progress"
  },
  {
    image: "/images/covid-4.png",
    title: "Minnesota Vaccine Timeline: Seniors now, all Minnesotans this summer"
  },
  {
    image: "/images/covid-5.png",
    title: "IANA Weekly COVID-19 Updates - 2-19-2021"
  },
  {
    image: "/images/covid-6.png",
    title: "IANA Weekly COVID-19 Updates - 2-19-2021"
  },
]
</script>