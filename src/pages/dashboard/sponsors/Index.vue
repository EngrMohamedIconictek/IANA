<template>
    <PageToolbar title="Sponsors List" v-model:modelValue="search" :showSearch="true" :showView="false" :showExcel="true"
        createRoute="/dashboard/sponsors/create" />

    <SponsorsRowCard :sponsors="sponsors" @delete="handleDeleteSponsor" @edit="handleEditSponsor" />

</template>

<script setup>
import { ref } from 'vue'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import SponsorsRowCard from '@/components/dashboard/sponsors/SponsorsRowCard.vue';

const search = ref('')

// Sponsors data
const sponsors = ref([
    {
        id: 1,
        name: "Microsoft Corporation",
        phone: "+1 (555) 123-4567",
        level: "Platinum",
        attendees: 250,
        image: "/images/events-1.png"
    },
    {
        id: 2,
        name: "Google LLC",
        phone: "+1 (555) 234-5678",
        level: "Gold",
        attendees: 180,
        image: "/images/events-2.png"
    },
    {
        id: 3,
        name: "Apple Inc.",
        phone: "+1 (555) 345-6789",
        level: "Platinum",
        attendees: 320,
        image: "/images/events-3.png"
    },
    {
        id: 4,
        name: "Amazon Web Services",
        phone: "+1 (555) 456-7890",
        level: "Silver",
        attendees: 150,
        image: "/images/events-1.png"
    },
    {
        id: 5,
        name: "Meta Platforms",
        phone: "+1 (555) 567-8901",
        level: "Gold",
        attendees: 200,
        image: "/images/events-2.png"
    }
])

// Handle delete sponsor
const handleDeleteSponsor = (sponsorId) => {
    const index = sponsors.value.findIndex(sponsor => sponsor.id === sponsorId)
    if (index > -1) {
        sponsors.value.splice(index, 1)
        console.log('Sponsor deleted from list:', sponsorId)
    }
}

// Handle edit sponsor
const handleEditSponsor = (sponsor) => {
    console.log('Edit sponsor:', sponsor)
}

</script>