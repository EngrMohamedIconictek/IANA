<template>
    <div class="w-full bg-[#3F642E] dark:bg-slate-900 overflow-hidden">
        <div class="relative">
            <div class="flex transition-transform duration-700 ease-in-out"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
                    <div class="relative">
                        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between h-full">
                            <div
                                class="px-6 md:px-15 lg:px-20 py-4 md:py-6 lg:py-16 w-full lg:w-1/2 space-y-2 lg:space-y-6">
                                <h3
                                    class="text-3xl md:text-2xl lg:text-4xl xl:text-6xl leading-normal font-semibold text-[#FFCD45] dark:text-yellow-100">
                                    {{ slide.title }}
                                </h3>
                                <div class="flex items-center">
                                    <div class="border-t-2 border-white w-4/5"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white -ml-[10px]"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <p class="text-white text-sm lg:text-xl xl:text-2xl font-medium leading-relaxed">
                                    {{ slide.description }}
                                </p>
                            </div>
                            <div class="w-full lg:w-2/3 px-6 md:px-0 lg:px-0">
                                <img :src="slide.image" :alt="slide.alt"
                                    class="w-full h-full object-cover rounded-lg lg:rounded-none">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button @click="previousSlide" :disabled="currentSlide === 0" class="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 
                       bg-green-500/50 bg-opacity-20 hover:bg-opacity-30 text-white 
                       h-8 w-8 items-center justify-center rounded-sm transition-all duration-300 z-20
                       disabled:opacity-40 disabled:cursor-not-allowed">
                <i class="pi pi-angle-left text-xl"></i>
            </button>

            <button @click="nextSlide" :disabled="currentSlide === slides.length - 1" class="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 
                       bg-green-500/50 bg-opacity-20 hover:bg-opacity-30 text-white 
                       h-8 w-8 items-center justify-center rounded-sm transition-all duration-300 z-20
                       disabled:opacity-40 disabled:cursor-not-allowed">
                <i class="pi pi-angle-right text-xl"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = ref([
    {
        title: "Rooted in Faith, Rising Together",
        description: "Building stronger Muslim communities through unity and service.",
        image: "/images/slider-1.png",
        alt: "Community Unity"
    },
    {
        title: "Your Peace, Our Purpose",
        description: "Empowering families with faith, support, and justice.",
        image: "/images/slider-2.png",
        alt: "Youth Education"
    },
    {
        title: "Together in Faith",
        description: "Strengthening Muslim voices and values nationwide.",
        image: "/images/slider-3.png",
        alt: "Community Service"
    }
])

const currentSlide = ref(0)
let autoPlayInterval = null

const nextSlide = () => {
    if (currentSlide.value < slides.value.length - 1) {
        currentSlide.value++
    } else {
        currentSlide.value = 0
    }
}

const previousSlide = () => {
    if (currentSlide.value > 0) {
        currentSlide.value--
    } else {
        currentSlide.value = slides.value.length - 1
    }
}

const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
        nextSlide()
    }, 5000)
}

const stopAutoPlay = () => {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval)
        autoPlayInterval = null
    }
}

onMounted(() => {
    startAutoPlay()
})

onUnmounted(() => {
    stopAutoPlay()
})
</script>