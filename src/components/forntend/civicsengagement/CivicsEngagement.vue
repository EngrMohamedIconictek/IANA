<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto space-y-5 px-4 sm:px-6 lg:px-8">
            <div class="space-y-3">
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#3F642E] font-semibold">Civics Engagement</h2>
                <p class="leading-relaxed mb-2">IANA partnered with Faith in MN in order to engage the local community
                    and member mosques to complete their civic duties and claim their voices around the issues that
                    matter. Some of those issues include ending islamophobia, mass incarceration, immigration reform,
                    economy, and climate justice. We also conducted several training programs and mobilized many of our
                    members to become senate district and state delegates. We have participated in many forums with
                    candidates to build powerful public relationships and start a co-creative relationship to shape the
                    future we need in Minnesota. We created campaigns to do pledge drives at our mosques during Fridays
                    and contacted thousands of Muslims through phone and text banks. We also hired, trained, and
                    developed Muslim and Somali canvassers to do door knocking and help get people to the polls. We had
                    several of our Imams hold a press conferences on the importance of engagement and standing for our
                    issues and values. We continue to partner up with community partners in order to ensure a more just
                    and equitable society.</p>
                <p class="leading-relaxed mb-2">IANA cohosted a press conference and rally for Minnesotans to stand
                    together against fear and divisive attacks on Somali community and Immigrants.</p>
                <p class="leading-relaxed mb-2">On behalf of IANA and Muslim Community Imam Hassan shared a uniting
                    message through the rally. Imam Hassan said “Every election there is a playbook used by some
                    politicians. The playbook is to use Muslims, Somalis, refugees, immigrants as scapegoat in order to
                    divide people by what they look like or where they came from instead of offering solutions that
                    could help all our families. We Minnesotans are greater than fear and together we make Minnesota”.
                    Imam Hassan emphasized on the importance of Minnesotans coming together to against hate, he added,
                    "We know that most Minnesotans know that we are better off together. That, together, we make
                    Minnesota. We, in Minnesota, are greater than fear. From Cedar-Riverside, to the Mendota Heights, to
                    Moorhead, we will call on all of us to reject this political playbook for once and for all. And we,
                    here, will play our part."</p>
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
        image: "/images/civics.png",
        title: "Civics Engagement"
    },
]
</script>