<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div class="text-center space-y-4">
                    <div class="flex gap-5 justify-center">
                        <button class="bg-[#3E5E31] text-white px-5 py-2 rounded-full text-base hover:opacity-90 dark:bg-[#2B4724]">Fatwa Bank (English)</button>
                        <button class="bg-[#3E5E31] text-white px-5 py-2 rounded-full text-base hover:opacity-90 dark:bg-[#2B4724]">Fatwa Bank (Arabic)</button>
                    </div>
                    <p class="text-center text-xl leading-relaxed text-[#C2692B] font-medium">You can call one of our scholars over the phone if you need to get more explanation. This service is free of charge. Below is the schedule of availability.</p>
                    <h2 class="text-2xl sm:text-3xl font-semibold text-[#3F642E]">Fatwa Hotline</h2>
                    <p class="text-lg font-semibold">+ 612-874-0665</p>
                </div>
                <div>
                    <FatwaFrom />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import FatwaFrom from './FatwaFrom.vue';


</script>