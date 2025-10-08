<template>
  <PageHeader :title="event ? event.title : 'Event Details'" class="capitalize" />
  <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="event" class="bg-white dark:bg-slate-950 rounded-lg shadow-lg overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div class="md:col-span-8 p-6">
            <div class="flex items-center mb-4">
              <div class="bg-[#3F642E] text-white dark:bg-[#99B88B] dark:text-slate-900 rounded-lg p-3 mr-4 text-center w-20">
                <div class="text-sm font-bold">{{ event.date.split('-')[0] }}</div>
                <div class="text-xl font-bold">{{ event.date.split('-')[1] }}</div>
                <div class="text-sm">{{ event.date.split('-')[2] }}</div>
              </div>
              <h1 class="text-3xl text-[#3F642E] font-semibold dark:text-[#99B88B]">
                {{ event.title }}
              </h1>
            </div>
            
            <div class="mb-6 prose max-w-none dark:prose-invert space-y-4 border-b border-gray-200 dark:border-gray-700 pb-6" v-html="event.description"></div>
            
            <div class="flex flex-col space-y-4">
              <div class="flex items-center">
                <div class="bg-[#3F642E] dark:bg-[#99B88B] p-3 rounded-full mr-3 w-12 h-12 flex items-center justify-center">
                  <i class="pi pi-map-marker text-white dark:text-slate-900 text-lg"></i>
                </div>
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Location</div>
                  <div class="font-medium">{{ event.location }}</div>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="bg-[#3F642E] dark:bg-[#99B88B] p-3 rounded-full mr-3 w-12 h-12 flex items-center justify-center">
                  <i class="pi pi-clock text-white dark:text-slate-900 text-lg"></i>
                </div>
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">Time</div>
                  <div class="font-medium">{{ event.time }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="md:col-span-4">
            <div class="h-full">
              <div class="relative h-64 md:h-full">
                <img :src="event.image" :alt="event.title" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute top-0 right-0 p-4 text-white">
                  <div class="inline-block bg-[#3F642E]/90 border border-[#3F642E] dark:bg-[#99B88B]/90 text-white dark:text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {{ event.date }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="p-6 bg-gray-100 dark:bg-slate-950 dark:border-t dark:border-slate-500 flex justify-between items-center">
          <div class="flex items-center">
            <i class="pi pi-calendar text-[#3F642E] dark:text-[#99B88B] mr-2"></i>
            <span class="text-gray-600 dark:text-gray-300">Posted: {{ event.date }}</span>
          </div>
          <router-link to="/events" class="inline-flex items-center px-4 py-2 bg-[#3F642E] text-white rounded-md hover:bg-[#99B88B] transition-colors">
            <i class="pi pi-arrow-left mr-2"></i> Back to Events
          </router-link>
        </div>
      </div>
      
      <div v-else class="text-center py-16 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
        <div class="flex flex-col items-center">
          <div class="text-[#3F642E] dark:text-[#99B88B] mb-4">
            <i class="pi pi-exclamation-circle text-6xl"></i>
          </div>
          <h2 class="text-2xl font-bold mb-2">Event Not Found</h2>
          <p class="text-gray-600 dark:text-gray-400 mb-6">The event you're looking for doesn't exist or has been removed.</p>
          <router-link to="/events"
            class="inline-flex items-center px-6 py-3 bg-[#3F642E] text-white rounded-md hover:bg-[#99B88B] transition-colors">
            <i class="pi pi-calendar mr-2"></i> Browse All Events
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PageHeader from '@/layouts/PageHeader.vue';

const route = useRoute();
const event = ref(null);

// Sample events data (in a real app, this would come from an API or store)
const events = [
  {
    id: 1,
    image: "/images/event-1.png",
    date: "27-Feb-2025",
    time: "06:30 PM to 08:00 PM",
    title: "Health Through Knowledge - Immunization & the Islamic Perspective",
    description: `
      <p>Health Through Knowledge Immunization & the Islamic Perspective Guest Speakers Nurse Abdirahman Abdi & Imaam Moalim Barre Masjid IBADUR RAHMAN 6001 78Th Ave N, Brooklyn Park, MN 55443 Thursday, February 27, 2025 6:30pm - 8:pm</p>
    `,
    location: "Masjid IBADUR RAHMAN 6001 78Th Ave N, Brooklyn Park, MN 55443",
  },
  {
    id: 2,
    image: "/images/event-2.png",
    date: "27-Feb-2025",
    time: "06:30 PM to 08:00 PM",
    title: "Healthy Ramadan, Healthy you",
    description: `
      <p>Healthy Ramadan, Healthy you A guide to health and Nutrition in Ramadan! Nurse Abdirahman Abdi</p>
    `,
    location: "Abubakar As-Siddique Islamic Center 2824 13TH Ave S, Minneapolis, MN 55407",
  },
  {
    id: 3,
    image: "/images/event-3.png",
    date: "27-Feb-2025",
    time: "06:30 PM to 08:00 PM",
    title: "Family Vaccine Clinic- FEB 22",
    description: `
      <p>Family Vaccine Clinic Mobile Health Clinic is back to service you: Blood pressure and diabetes testing. Many other over-the-counter medications, such pain relievers and acid reflux medications. Basic skin cancer screening Dermatology service.</p>
    `,
    location: "Abubakar As-Siddique Islamic Center 2824 13TH Ave S, Minneapolis, MN 55407",
  },
  
];

onMounted(() => {
  // Get the event ID from the route params
  const id = parseInt(route.params.id);

  // Find the event with the matching ID
  event.value = events.find(item => item.id === id);
});
</script>