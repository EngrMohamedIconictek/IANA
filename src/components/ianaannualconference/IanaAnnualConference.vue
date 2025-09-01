<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto space-y-5">
            <div class="space-y-3">
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#3F642E] font-semibold">IANA Annual Conference</h2>
                <p class="leading-relaxed mb-2">IANA organizes Annual Conference for the past 19th years for the IANA
                    members and leaders. The conference is scheduled once a year to meet the developmental needs of the
                    organization. Theseconferences provide training/seminars for the members of IANA, reports/updates,
                    direction of the IANA general assembly, board and the members of the Islamic Association of North
                    America. These conference also provide meets together to review the policies, producers, strategic
                    plans, programs and Da’wah activities</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in cards" :key="index"
                    class="border-2 border-[#3F642E] rounded-md p-3 bg-[#FBFBFB] dark:bg-slate-950 space-y-3">
                    <img :src="item.image" class="w-full object-cover" alt="">
                    <h3 class="text-xl font-semibold text-[#3F642E]">{{ item.title }}</h3>
                </div>
            </div>
            <div class="space-y-3">
                <h2 class="text-xl  leading-relaxed text-[#3F642E] font-semibold">Theme of the conference:</h2>
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#C2692B] font-semibold">Theme of the conference:
                </h2>
                <p class="leading-relaxed mb-2">The 11th Annual NACSI conference is officially underway today at Abubakar as-Saddique Islamic Center
                    in Minneapolis. The conference was attended by representatives from all of the centers that are in
                    the organization as well as the board of the council who is led by Sheikh Abdirahman Sheikh Omar.
                    The conference was hosted by members of the umbrella organization that are located in the hosting
                    state of Minnesota.</p>

                <p class="leading-relaxed mb-2">The presence of the scholars from around the nation was felt throughout the state of Minnesota as
                    many of them delivered the Friday sermons at various locations. Members of the council were very
                    honored to have the presence of Sheikh Mohamed Idris who is one of the founders of the organization.
                </p>

                <p class="leading-relaxed mb-2">The conference was opened by Sheikh Abdirahman Sheikh Omar, the head of the board of the council. The
                    Sheikh spoke of the importance of the conference after thanking Allah for giving us the opportunity
                    to unite in this organization which was founded in the year 2000—a time when the Somali people were
                    entering the American continent in mass numbers. The opening of the conference was followed by
                    reports from member centers whose locations varied from the New England area in the east; Georgia
                    and Tennessee in the south and also from the United States heartland in the Midwest and as far as
                    California and Washington State in the west.</p>

                <p class="leading-relaxed mb-2">Among the reports was a report by Ali Haji, the head of the Horn Africa Relief Organization. Ali Haji
                    included in his report the need for religious awakening back home. He suggested that a number of
                    individuals be trained and prepared to lead a religious awakening back in Somalia. After the
                    reports, there was a break for the Friday sermon. This was followed by a report from Sheikh
                    Abdullahi Nur (Abul Fadl), the vice chairman of the executive committee of NACSI. Sheikh Abul Fadl
                    addressed the goals from the previous conference, those that were achieved and those that are still
                    on the agenda. Sheikh Abdirahman Sheikh Omar again addressed the conference attendees detailing the
                    history of the organization and the necessities that prompted the need for such an organization.</p>

                <p class="leading-relaxed mb-2">Also present at the meeting was honorable imams from local masaajid along with community leaders,
                    elders, and business leaders within the community. Sheikh Hassan Jamici, Sheikh Sa’ad Muse, Sheikh
                    Jibril Qadi, Sheikh Abdullahi Ibrahim, Sheikh Abdirisaq San’aani, and Sheikh Abdiqani Qardawi were
                    among the honorable guests.</p>

            </div>
        </div>

    </div>
</template>

<script setup>
const cards = [
    {
        image: "/images/annualcon-1.png",
        title: "11th Conference"
    },
    {
        image: "/images/annualcon-2.png",
        title: "12th Conference"
    },
    {
        image: "/images/annualcon-3.png",
        title: "14th Conference"
    },
]
</script>