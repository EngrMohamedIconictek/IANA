<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-900">
        <div class="container mx-auto ">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(image, index) in images" :key="index">
                    <img :src="image" alt="" class="w-full rounded-lg shadow" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  "/images/ianavideo-1.png",
  "/images/ianavideo-2.png",
  "/images/ianavideo-3.png",
  "/images/ianavideo-1.png",
  "/images/ianavideo-2.png",
  "/images/ianavideo-3.png",
  "/images/ianavideo-1.png",
  "/images/ianavideo-2.png",
  "/images/ianavideo-3.png",
]);
</script>