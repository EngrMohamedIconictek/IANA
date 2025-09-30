<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto space-y-5 px-4 sm:px-6 lg:px-8">
            <div class="space-y-3">
                <h2 class="text-xl sm:text-3xl leading-relaxed text-[#3F642E] font-semibold">Member Centers</h2>
                <p class="leading-relaxed mb-2">Islamic Association of North America (IANA) was founded in the year of
                    2001 to meet the religious and social needs of Muslim societies in North America. As a response to
                    the changing realities of Muslim communities</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in cards" :key="index"
                    class="border-2 border-[#3F642E] rounded-md p-3 bg-[#FBFBFB] dark:bg-slate-950 space-y-3">
                    <img :src="item.image" class="w-full object-cover" alt="">
                    <h3 class="text-xl font-semibold text-[#3F642E]">{{ item.title }}</h3>
                </div>
            </div>
            <div class="space-y-3">
                <p class="leading-relaxed mb-2">
                    Islamic Association of North America (IANA) was founded in the year of 2001 to meet the religious
                    and social needs of Muslim societies in North America. As a response to the changing realities of
                    Muslim communities, IANA re-positions itself to effectively reach diverse Muslim communities across
                    the country. We are a nationwide umbrella organization with over thirty-five centers and
                    organizations. In Minnesota alone, we have more than a dozen Islamic organizations.
                </p>
                <h3 class="text-xl font-semibold text-[#3F642E]">Members of IANA:</h3>
                <ol class="list-decimal list-inside space-y-2 ">
                    <li>Abu Bakr Islamic Center of Washington</li>
                    <li>Abu Huraira Islamic Center, Rochester, MN</li>
                    <li>Abubakar As-Saddique Islamic Center of Faribault</li>
                    <li>Abubakar As-Saddique Islamic Center, Minneapolis, MN</li>
                    <li>Al Huda Islamic Center, Salt Lake City, UT</li>
                    <li>Al-Farooq Islamic Center, Nashville, TN</li>
                    <li>Al-Ihsan Islamic Center St. Paul, MN</li>
                    <li>Barron Islamic Center, Barron, WI</li>
                    <li>Boston Islamic Center, MA</li>
                    <li>Irshad Islamic Center, MN</li>
                    <li>Ibn Taymiyyah Masjid and Islamic Center, Columbus</li>
                    <li>Islamic Cultural Center of Louisville, Kentucky</li>
                    <li>Lewiston and Auburn Islamic Center, Lewiston, ME</li>
                    <li>Maine Muslim Community Center (Bilal Mosque) Portland, MA</li>
                    <li>Masjid Abu Bakar, Portland, OR</li>
                    <li>Masjid Abu Hurairah, Columbus, OH</li>
                    <li>Abubakar Islamic Center of Seattle, WA</li>
                    <li>Masjid al-Ansar San Diego, CA</li>
                    <li>Al-Rahma Mosque of Phoenix, AZ</li>
                    <li>Al-Rahmah Mosque and Muslim Society of Owatonna, MN</li>
                    <li>Masjid As-Sunnah and Islamic Center St. Paul, MN</li>
                    <li>Masjid As-Sunnah & Dawah Center, Atlanta GA</li>
                    <li>Tawbah Islamic Center, Des Moines, IA</li>
                    <li>Masjid Dar-us-Salam, Burnsville, MN</li>
                    <li>Shafie Islamic Center, Omaha, NE</li>
                    <li>Al-Taqwa Islamic Center of Kansas City, MO</li>
                    <li>Dar Al-Farooq Islamic Center, Bloomington, MN</li>
                    <li>Al-Huda Islamic Center - East Grand Forks, MN</li>
                    <li>Masjid Shaafici Cultural Center, Minneapolis, MN</li>
                    <li>Towhid Islamic Center Seattle, WA</li>
                    <li>Minnesota Muslim Community (Ibadur Rahman)</li>
                    <li>Al-Huda Islamic Center of Nashville, Nashville, TN</li>
                    <li>Ask-A-Muslim, Columbus, Ohio</li>
                    <li>Iqra Islamic Center St.Cloud, MN</li>
                </ol>
                <h3 class="text-xl font-semibold text-[#3F642E]">IANA’s Dawah Activities include:</h3>
                <ol class="list-decimal list-inside space-y-2 ">
                    <li>Professional development activities for Imams, organizational leaders, and Islamic Studies
                        instructors.</li>
                    <li>Further advancement of Islamic Da’wah in the light of the Qur’an and Sunnah.</li>
                    <li>Promote the sustainability and well-being of Muslim families by providing counseling and
                        conflict resolution services.</li>
                    <li>Facilitate national Islamic conferences to revive the spirit of Islam in the conscience of
                        Muslims.</li>
                    <li>Create youth programs and activities to promote Islamic values, leadership skills, and
                        commitment to community service.</li>
                </ol>

            </div>
        </div>

    </div>
</template>

<script setup>
const cards = [
    {
        image: "/images/member.png",
        title: "IANA GENERAL ASSEMBLY 2022 IN PHOENIX ARIZONA."
    },
]
</script>