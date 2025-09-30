<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div class="lg:col-span-5 text-center space-y-4">
                    <div >
                        <img :src="'/images/contactimg.png'" class="mx-auto w-64" alt="">
                    </div>
                    <div class="space-y-3">
                        <h2 class="text-2xl sm:text-4xl font-semibold text-[#3F642E]">Get In Touch</h2>
                        <p class="text-xl">You can contact us here</p>
                        <h2 class="text-xl sm:text-2xl font-semibold text-[#C2692B]">Phone:</h2>
                        <p class="text-xl">612-874-0665</p>
                        <h2 class="text-xl sm:text-2xl font-semibold text-[#C2692B]">Email:</h2>
                        <p class="text-xl">info@ianaonline.org</p>
                        <h2 class="text-xl sm:text-2xl font-semibold text-[#C2692B]">Address Line:</h2>
                        <p class="text-xl">3355 Hiawatha Ave South<br> Suite # 202 Minneapolis, MN 55406</p>
                    </div>
                </div>
                <div class="lg:col-span-7 space-y-5">
                    <h2 class="text-2xl sm:text-4xl font-semibold text-[#3F642E]">Feel Free To Contact</h2>
                    <ContactForm />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import ContactForm from './ContactForm.vue';


</script>