<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto space-y-5 px-4 sm:px-6 lg:px-8">
            <div class="space-y-3">
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#3F642E] font-semibold">Health Awareness</h2>
                <p class="leading-relaxed mb-2">The Islamic Association of North America (IANA) is a non-profit organization that provides Religious, social justice, support services, education, and youth development to a network of mosques nationally. We are a nationwide umbrella organization with over thirty-five centers and organizations. In Minnesota alone, we have about 15 Islamic organizations.</p>                
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in cards" :key="index"
                    class="border-2 border-[#3F642E] rounded-md p-3 bg-[#FBFBFB] dark:bg-slate-950 space-y-3">
                    <img :src="item.image" class="w-full object-cover" alt="">
                    <h3 class="text-xl font-semibold text-[#3F642E]">{{ item.title }}</h3>
                </div>
            </div>
            <div class="space-y-3">
                <p class="leading-relaxed mb-2">The IANA Board of Directors identifies annual priorities for the non-profit organization based on a strategic plan. Members of the Board of Directors bring needs identified from their respective communities. Current and past priorities include increasing health and mental health awareness, education on drug and violence prevention, best practices in religious education, youth leadership development, and civic engagement. Each participating mosque has a Council of its members who provide similar advice and engagement to best guide activities of the mosques in every community.</p>
                <p class="leading-relaxed mb-2">IANA has worked with the following past and current partners for education, health, and mental health care outreach, civic engagement and youth leadership development projects</p>
                <p>Recent examples of IANA’s experience in partnering with local public health, governmental agencies, and/or community health clinics to help community members navigate health systems and secure resources include the following. </p>
                <ul class="list-disc list-inside pl-3 space-y-2 mt-2">
                    <li>In 2020, IANA partnered with the Minnesota Department of Health to provide education on COVID-19 during and after Ramadan to the IANA network of ___Minnesota mosques located in the metro and suburban Minnesota, St. Cloud, Willmar, Owatonna, Rochester, Faribault, Mankato and Morehead, MN. Partners also included the East African Health Project, Briva Health, Somali Medical Association of America. In addition to education on Covid, information on accessing testing and health care resources was provided.</li>
                </ul>
                <p class="leading-relaxed mb-2">With each of these recent collaborations, IANA and its partnering Minnesota mosques strive to engage community members, leaders and community partners by providing information in native languages presented by community members and allies with a comment on the religious context for improving health, reducing violence, seeking mental health care, and other actions.</p>
            </div>
        </div>

    </div>
</template>

<script setup>
const cards = [
    {
        image: "/images/ianahealtawearness.png",
        title: "IANA Faith-Medicine Project and Willmar child and family health Event"
    },
]
</script>