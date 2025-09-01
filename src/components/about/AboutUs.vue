<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-950">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <h2 class="text-xl font-semibold text-[#3F642E] sm:text-3xl ">Background and History</h2>
                    <p>Islamic Association of North America (IANA) was founded in the year of 2001 to meet the religious
                        and social needs of Muslim societies in North America. As a response to the changing realities
                        of Muslim communities, IANA re-positions itself to effectively reach diverse Muslim communities
                        across the country. We are a nationwide umbrella organization with over thirty five centers and
                        organizations. In Minnesota alone, we have about 15 Islamic organizations.</p>
                    <h3 class="text-xl font-semibold text-[#C2692B] sm:text-2xl ">Strategic Goals</h3>
                    <ul class="list-disc pl-6 space-y-2 ">
                        <li>To develop and maintain advocacy platforms to advance the goals and agenda of IANA.</li>
                        <li>Developing next cadre of leaders with strong ethics, morals and citizenship.</li>
                        <li>Helping bridge the understanding gap of Islam and Muslims within the society at large by
                            presenting the true face of Islam.</li>
                        <li>Strengthening the human and financial capacities of member organizations.</li>
                        <li>Representing Muslim communities on national levels and speaking on behalf of member
                            organizations on all matters concerning Muslims.</li>
                    </ul>
                    <h2 class="text-xl font-semibold text-[#3F642E] sm:text-3xl ">Our Mission</h2>
                    <p>To transform Islamic Association of North America into an effective grassroots organization that
                        builds its capacity, enhance strong collaboration with key stakeholders, and better serve and
                        represent Islam and its universal values through quality community services.</p>
                    <h2 class="text-xl font-semibold text-[#3F642E] sm:text-3xl ">Our Vision</h2>
                    <p>A united and vibrant Muslim community that upholds the universal Islamic values of unity,
                        collaboration and community service.</p>
                </div>
                <div class="space-y-4 bg-[#E0F2D8] dark:bg-slate-900 p-5 rounded">
                    <div class="text-center bg-[#C2692B] rounded-md py-2">
                        <h3 class="text-white font-medium text-2xl">Our Board Of Director</h3>
                    </div>
                    <div class="grid grid-cols-2 gap-5">
                        <div v-for="member in teamMembers" :key="member.id"
                            @click="member.isClickable ? openModal(member) : null" :class="[
                                'bg-white rounded-3xl p-4 dark:bg-slate-950 space-y-1 text-center',
                                member.isClickable ? 'cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105' : 'cursor-default'
                            ]">
                            <img :src="member.image" :alt="member.name" class="w-full h-auto mx-auto object-cover">
                            <h3 class="text-[#3F642E] font-medium">{{ member.name }}</h3>
                            <span class="text-gray-500 dark:text-white">{{ member.position }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-semibold text-[#3F642E]">{{ selectedMember?.name }}</h3>
                    <button @click="closeModal"
                        class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100 text-2xl font-bold">
                        <i class="pi pi-times"></i>
                    </button>
                </div>

                <div class="text-center space-y-4">
                    <img :src="selectedMember?.image" :alt="selectedMember?.name"
                        class="w-full h-auto mx-auto object-cover">
                    <div>
                        <h4 class="text-lg font-medium text-[#C2692B]">{{ selectedMember?.position }}</h4>
                        <p class="text-sm leading-relaxed mt-2">{{ selectedMember?.description }}</p>
                    </div>
                    <div v-if="selectedMember?.contact" class="pt-4 border-t border-gray-200 dark:border-gray-600">
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                            <strong>Contact:</strong> {{ selectedMember?.contact }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
const selectedMember = ref(null);

const teamMembers = ref([
    {
        id: 1,
        name: "Imam Abdirizak Nur",
        position: "Chairman",
        image: "/images/team-1.png",
        description: "Imam Abdulle is the executive director of Islamic Association of North America (IANA). He served as the secretary of the Shura Council of IANA 2012-2018 and worked at Boston Islamic Center 2005-2017 in different Roels including being an Imam at the center from 2009-2017. Imam Abdulle completed the Quran at a young age and studied Islamic education at the hands of various Somali Scholars. His Islamic studies focused on Quran and the sciences of Quran, Hadith and its sciences, Fiqh and its sciences, Arabic language and its grammar. Imam Yusuf Abdulle earned a bachelor’s degree of science in Operations Management from the University of Massachusetts, Boston, MA, and is about to finish his master’s degree in Business Analytics from the University of Saint Thomas, Minneapolis, MN.",
        contact: "chairman@iana.org",
        isClickable: true
    },
    {
        id: 2,
        name: "Nasir Warsama",
        position: "Vice Chair",
        image: "/images/team-2.png",
        description: "Nasir Warsama, a dedicated community leader based in Atlanta, Georgia, is a successful small business owner with a strong commitment to social impact. Actively engaged in faith community leadership, Nasir is a passionate advocate for community development initiatives. He is deeply involved in mentoring and counseling youth, striving to empower the next generation and promote positive growth within his community.",
        contact: "vicechair@iana.org",
        isClickable: true
    },
    {
        id: 3,
        name: "Ahmed Anshur",
        position: "Treasurer",
        image: "/images/team-3.png",
        description: "",
        contact: "secretary@iana.org",
        isClickable: false
    },
    {
        id: 4,
        name: "Abshir Haji",
        position: "Secretary",
        image: "/images/team-4.png",
        description: "",
        contact: "treasurer@iana.org",
        isClickable: false
    },
    {
        id: 5,
        name: "Dr. Yahya Suufi",
        position: "Public Relations",
        image: "/images/team-5.png",
        description: "",
        contact: "treasurer@iana.org",
        isClickable: false
    },
    {
        id: 6,
        name: "Imam Yussuf Abdulle",
        position: "Executive Director",
        image: "/images/team-6.png",
        description: "Imam Abdulle is the executive director of Islamic Association of North America (IANA). He served as the secretary of the Shura Council of IANA 2012-2018 and worked at Boston Islamic Center 2005-2017 in different Roels including being an Imam at the center from 2009-2017. Imam Abdulle completed the Quran at a young age and studied Islamic education at the hands of various Somali Scholars. His Islamic studies focused on Quran and the sciences of Quran, Hadith and its sciences, Fiqh and its sciences, Arabic language and its grammar. Imam Yusuf Abdulle earned a bachelor’s degree of science in Operations Management from the University of Massachusetts, Boston, MA, and is about to finish his master’s degree in Business Analytics from the University of Saint Thomas, Minneapolis, MN.",
        contact: "treasurer@iana.org",
        isClickable: true
    }
]);

const openModal = (member) => {
    selectedMember.value = member;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    selectedMember.value = null;
};
</script>