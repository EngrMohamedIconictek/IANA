<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto space-y-5 px-4 sm:px-6 lg:px-8">
            <div class="space-y-3">
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#3F642E] font-semibold">PRESS RELEASE/PRESS
                    CONFERENCE</h2>
                <p class="leading-relaxed mb-2">Press Releases: IANA strives to show representation for our people and
                    give a voice to our community when we can do so through our actions and our platform. IANA works
                    heavily on community advocacy and social justice. It is vital for IANA to give a voice to those we
                    represent.</p>
                <p class="leading-relaxed">This is both on a local level and on a national level. IANA also fights to
                    reject Islamophobia, a mass issue that translates into the mistreatment of Muslims. IANA also
                    rejects radical ideology and extremism while promoting tolerance and understanding. The most recent
                    press release IANA took part in was on December 9th, 2020 when the judge found the man that attacked
                    the Dar-al-Farooq mosque in 2017 guilty on all accounts. IANA condemns the attack and celebrated
                    justice being showing through this ruling. IANA always pushes for justice in every aspect.</p>
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
    image: "/images/presimg-1.png",
    title: "IANA General Assembly 2024: Electing New Leadership to Drive Reform and Progress"
  },
  {
    image: "/images/presimg-2.png",
    title: "IANA Press Release"
  },
  {
    image: "/images/presimg-3.png",
    title: "PRESS RELEASE November 25, 2023"
  },
  {
    image: "/images/presimg-4.png",
    title: "The Call of the Somali Scholars of America on The Recent Political Situation in Somalia"
  },
  {
    image: "/images/presimg-5.png",
    title: "IANA Relief"
  }
]
</script>