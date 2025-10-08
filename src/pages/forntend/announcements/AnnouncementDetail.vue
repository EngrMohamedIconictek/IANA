<template>
  <PageHeader :title="announcement ? announcement.title : 'Announcement Details'" class="capitalize" />
  <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="announcement">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div class="md:col-span-8">
            <h1 class="text-3xl text-[#3F642E] font-semibold dark:text-[#99B88B] mb-4">
              {{ announcement.title }}
            </h1>
            <h3 class="text-xl text-[#C2692B] font-semibold dark:text-[#C2692B] mb-2">
              {{ announcement.subtitle }}
            </h3>
            <div class="mb-4 prose max-w-none dark:prose-invert space-y-2" v-html="announcement.description">
              
            </div>
            <img :src="announcement.detailsImage" class="w-full h-auto rounded shadow-sm">


          </div>
          <div class="md:col-span-4">
            <div
              class="border-2 rounded border-[#99B88B] bg-white dark:bg-slate-900 p-2 space-y-3 transition-all duration-500 hover:scale-105 cursor-pointer">
              <div class="mb-4">
                <img :src="announcement.image" :alt="announcement.title" class="w-full h-auto rounded">
              </div>
              <div>
                <ul class="space-y-1 list-disc ml-5">
                  <li><span class="text-sm">Posted Date: {{ announcement.date }}</span></li>
                  <li><span class="text-sm">Posted Time: {{ announcement.time }}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-10">
        <p class="text-xl">Announcement not found</p>
        <router-link to="/"
          class="inline-block mt-4 px-6 py-2 bg-[#3F642E] text-white rounded-md hover:bg-[#99B88B] transition-colors">
          Back to Home
        </router-link>
      </div>
      <div class="mt-10 bg-amber-50 dark:bg-slate-950 p-6 rounded-lg shadow-md border-2 border-green-800 ">
        <CommentForm />
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PageHeader from '@/layouts/PageHeader.vue';
import CommentForm from '@/components/forntend/announcements/CoomentFrom.vue';


const route = useRoute();
const announcement = ref(null);

// Sample announcements data (in a real app, this would come from an API or store)
const announcements = [
  {
    id: 1,
    image: "/images/news-1.png",
    date: "08-13-2025",
    time: "Tuesday, 03:33 PM",
    title: "Crescent of Ramadan announcement (IANA) 1446",
    subtitle: "Ramadan",
    description: `
      <p>February 28, 2025, Statement of the Islamic Association of North America (IANA) regarding the beginning of Ramadan in the year 1446 AH</p>
    `,
    detailsImage: "/images/news-1-details.png",
  },
  {
    id: 2,
    image: "/images/news-2.png",
    date: "08-15-2025",
    time: "Tuesday, 03:33 PM",
    title: "IANA General Assembly 2024: Electing New Leadership to Drive Reform and Progress",
    subtitle: "IANA General Assembly",
    description: `
    <p>Columbus, Ohio – November 23, 2024 – The Islamic Association of North America (IANA) held its annual General Assembly in Columbus, Ohio, from November 22-23, welcoming representatives from 39 Islamic centers across the United States. This year's theme, “Unity in Times of Trials,” resonated throughout the event, which attracted a diverse gathering of Imams, scholars, community leaders, and representatives from humanitarian organizations, all dedicated to fostering collaboration and addressing pressing challenges within Muslim communities.</p>
    <p>Keynote speakers underscored the vital importance of unity, emphasizing that collaboration is essential to advancing shared interests and maintaining relevance in a diverse society. They warned against division, which can undermine their collective effectiveness.</p>
    <p>IANA's leadership provided a comprehensive overview of the organization's accomplishments over the past six years, highlighting efforts in youth and family support, civic engagement, humanitarian aid, and social services. They also pointed out significant challenges, particularly financial constraints, and stressed the urgent need for investing in endowments to secure sustainable funding for future initiatives.</p>
    <p>“The challenges we face require us to stand together and support one another,” remarked Sheikh Mohamed Mursal, the outgoing Board Chair. “Unity is not just a theme; it is essential for our survival and growth as a community.”</p>
    <p>The executive team presented an in-depth annual report detailing IANA’s notable achievements, including updates on youth services, social and humanitarian initiatives, and the establishment of the IANA Sharia Advisory Board.</p>
    <p>The assembly's significance was further enhanced by an address from the Somali Ambassador to the U.S., who commended IANA for its unwavering commitment over the past 23 years. He called for support in establishing a Somali consulate in Minneapolis, emphasizing the need for increased representation and services for the Somali community.</p>
    <p>Overall, the IANA General Assembly served as a powerful reminder of the strength found in unity, highlighting the ongoing efforts to uplift and support Muslim communities across the nation.</p>
    <p>Explore more event pictures by visiting our Facebook page here: <a href="https://www.facebook.com/IANA.org" class="text-[#4A4A4A] dark:text-white underline">Event Photos</a>.</p>
  `,
    detailsImage: "",
  },
  {
    id: 3,
    image: "/images/news-3.png",
    category: "Eid Al-adha",
    date: "08-18-2025",
    time: "Tuesday, 03:33 PM",
    title: "EID MUBARAK",
    subtitle: "Eid Mubarak to you and your Families!",
    description:`
    <p>The Islamic Association of North America (AINA) wishes to congratulate all Muslims in the United States and around the word on this joyous occassion of Eid Al-Adha.</p>
    `,
    detailsImage: "/images/news-3-details.png",
  },
];

onMounted(() => {
  // Get the announcement ID from the route params
  const id = parseInt(route.params.id);

  // Find the announcement with the matching ID
  announcement.value = announcements.find(item => item.id === id);
});
</script>