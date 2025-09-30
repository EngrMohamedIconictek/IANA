<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="">
                    <h4 class="text-base font-semibold text-[#3F642E]">Volunteer with</h4>
                    <h2 class="text-2xl sm:text-5xl leading-relaxed text-[#C2692B] font-semibold">IANA</h2>
                    <p class="leading-relaxed mb-2">One of the central principles of Islam is helping others. Whatever your skills are IANA would like to hear from you. Thank you for your interest in volunteering with the Islamic Association of North America (IANA).</p>
                    <p class="leading-relaxed">Volunteers play a vital role in the communities of our centers across the nation. IANA will be holding a number of programs and events throughout a year in the Twin Cities area. Volunteers will be needed to assure that each of our event runs smoothly as planned. Volunteer will be assigned to the areas of their interest or to the areas in which support is needed. All volunteer applications are reviewed with consideration of current volunteer opportunities. We deeply appreciate your generosity with your time, skills, talent and support. Your completed form will be held securely and confidentially. Only authorized staff will have access to your information.</p>
                </div>
                <div>
                    <VolunteerForm />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import VolunteerForm from './VolunteerForm.vue';

</script>