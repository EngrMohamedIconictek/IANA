<template>
    <PageToolbar title="Upcoming Event List" v-model:modelValue="search" :showSearch="true" :showView="false" :showExcel="true"
        createRoute="/create" />
    <EventsRowCard :events="events" @delete="handleDeleteEvent" @edit="handleEditEvent" />

</template>

<script setup>
import { ref } from 'vue'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import EventsRowCard from '@/components/dashboard/events/EventsRowCard.vue';

const search = ref('')

// Events data
const events = ref([
    {
        id: 1,
        name: "Islamic Conference 2024",
        image: "/images/events-1.png",
        date: "2024-02-15",
        timeFrom: "09:00 AM",
        timeTo: "05:00 PM",
        address: "Islamic Center, 123 Main Street, City, State 12345"
    },
    {
        id: 2,
        name: "Community Health Fair",
        image: "/images/events-2.png",
        date: "2024-02-20",
        timeFrom: "10:00 AM",
        timeTo: "03:00 PM",
        address: "Community Center, 456 Oak Avenue, City, State 12345"
    },
    {
        id: 3,
        name: "Youth Leadership Workshop",
        image: "/images/events-3.png",
        date: "2024-02-25",
        timeFrom: "02:00 PM",
        timeTo: "06:00 PM",
        address: "Youth Center, 789 Pine Street, City, State 12345"
    },
    {
        id: 4,
        name: "Annual Fundraising Dinner",
        image: "/images/events-1.png",
        date: "2024-03-01",
        timeFrom: "06:30 PM",
        timeTo: "10:00 PM",
        address: "Grand Hotel Ballroom, 321 Elm Street, City, State 12345"
    },
    {
        id: 5,
        name: "Quran Recitation Competition",
        image: "/images/events-2.png",
        date: "2024-03-05",
        timeFrom: "09:30 AM",
        timeTo: "04:00 PM",
        address: "Masjid Al-Noor, 654 Maple Drive, City, State 12345"
    }
])

// Handle delete event
const handleDeleteEvent = (eventId) => {
    const index = events.value.findIndex(event => event.id === eventId)
    if (index > -1) {
        events.value.splice(index, 1)
        console.log('Event deleted from list:', eventId)
    }
}

// Handle edit event
const handleEditEvent = (event) => {
    console.log('Edit event:', event)
    // Add navigation to edit page or open edit modal
}

</script>