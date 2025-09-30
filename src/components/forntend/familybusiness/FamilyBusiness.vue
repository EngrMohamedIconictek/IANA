<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                <div class="space-y-4">
                    <h2 class="text-2xl sm:text-3xl font-semibold text-[#3F642E]">Family & Business Counseling</h2>
                    <p  class="leading-relaxed mb-2">Due to the needs of the Muslim community for counseling services, IANA will provide very comprehensive counseling services for families, youth, and business people. The counseling program is designed in that a number of our renowned scholars, Imams, and professionals in that field are designated to handle each individual case according to Sharia’ and the cultural background of the community. Community members and business people contact the organization and set up a counseling session. They also provide General Fatwa to those inquiries about all aspects of the Islamic religion especially with inquiries that require further research and deep understanding of the Islamic jurisprudence.</p>
                </div>
                <div>
                    <FamilyBusinessForm />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import FamilyBusinessForm from './FamilyBusinessForm.vue';
</script>