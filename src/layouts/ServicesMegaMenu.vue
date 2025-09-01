<template>
    <div class="services-mega-menu">
        <!-- Desktop Mega Menu -->
        <div
            class="hidden md:block fixed left-0 right-0 top-[90px] bg-[#EBF8E5] dark:bg-gray-900 shadow-xl p-4 md:p-6 w-full z-1">
            <div class="container mx-auto">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    <div v-for="(column, columnIndex) in servicesColumns" :key="columnIndex"
                        class="space-y-3 col-span-1">
                        <router-link v-for="(link, linkIndex) in column.links" :key="linkIndex" :to="link.url"
                            class="block text-gray-700 dark:text-gray-300 hover:text-[#3E5E31] dark:hover:text-[#A3D9A5] text-sm xl:text-base py-1">
                            {{ link.text }}
                        </router-link>
                        <router-link v-if="column.specialButton" :to="column.specialButton.url"
                            class="block bg-[#3E5E31] rounded-full text-white px-4 py-2 mt-3 text-sm hover:bg-[#2B4724] text-center">
                            {{ column.specialButton.text }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Services Menu -->
        <div class="md:hidden space-y-4">
            <div v-for="(column, columnIndex) in servicesColumns" :key="columnIndex">
                <div class="space-y-1">
                    <router-link v-for="(link, linkIndex) in column.links" :key="linkIndex" :to="link.url"
                        class="block py-1 text-gray-700 dark:text-gray-300">
                        {{ link.text }}
                    </router-link>
                    <router-link v-if="column.specialButton" :to="column.specialButton.url"
                        class="block bg-[#3E5E31] text-white px-4 py-2 rounded-lg text-sm xl:text-base text-center">
                        {{ column.specialButton.text }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const servicesColumns = [
    {
        links: [
            { text: "Press Release", url: "/pressrelease" },
            { text: "Da'wa Activity", url: "/dawaactivity" },
            { text: "IANA RELIEF", url: "/ianarelief" },
            { text: "IANA SOMALI INVOLVEMENT", url: "/iana-somali-involvement" }
        ]
    },
    {
        links: [
            { text: "COVID-19", url: "/covid19" },
            { text: "Civics Engagement", url: "/civicsengagement" },
            { text: "Family & Business Counseling", url: "/family-business-counseling" },
            { text: "Health Awareness", url: "/healthawareness" }
        ]
    },
    {
        links: [
            { text: "IANA Advocacy Involvement", url: "/ianaadvocacy" },
            { text: "IANA Annual Banquet", url: "/ianaannualbanquet" },
            { text: "IANA Annual Conference", url: "/ianacnnualconference" },
            { text: "Islamic Holidays", url: "/islamic-holidays" }
        ]
    },
    {
        links: [
            { text: "Member Centers", url: "/member-centers" },
            { text: "Youth and Family", url: "/youth-family" },
            { text: '"WAQF" INITIATIVE', url: "/waqf-initiative" }
        ]
    },
    {
        links: [],
        specialButton: { text: "Zakat Calculation", url: "/zakat-calculation" }
    }
];
</script>
