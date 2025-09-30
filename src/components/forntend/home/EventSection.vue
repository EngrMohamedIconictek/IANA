<template>
    <div class="w-full px-2 py-5 sm:py-10 dark:bg-slate-950">
        <div class="container mx-auto mb-10 px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-5">
                <h2 class="text-2xl sm:text-4xl font-semibold text-[#3F642E]">Events</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div v-for="(item, index) in newsList" :key="index"
                    class="p-2 border-2 rounded-md border-[#99B88B] dark:bg-slate-900 space-y-3 transition-all duration-500 hover:scale-105 cursor-pointer">
                    <img :src="item.image" class="text-center w-full" alt="" />

                    <div class="flex gap-4 flex-wrap">
                        <span class="text-sm text-[#C2692B] font-medium">{{ item.date }}</span>
                        <span class="text-sm text-[#C2692B] font-medium">{{ item.time }}</span>
                    </div>

                    <h3 class="text-2xl font-semibold text-[#3F642E]">
                        {{ item.title }}
                    </h3>

                    <p class="text-lg">
                        {{ item.description }}
                    </p>

                    <a :href="item.link" class="text-base text-[#3F642E] underline font-medium">
                        Read More
                    </a>
                </div>
            </div>
        </div>
        <div class="container mx-auto mb-10  px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-[#EBF8E5]  text-center space-y-3 dark:bg-slate-900 p-8 rounded">
                    <h3 class="text-2xl font-semibold  text-[#3F642E]">{{ testimonial.center }}</h3>
                    <p class="leading-relaxed">{{ testimonial.quote }}</p>
                </div>
            </div>
        </div>
        <div class="container mx-auto ">
            <div class="text-center mb-5">
                <h2 class="text-2xl sm:text-4xl font-semibold text-[#3F642E]">Our Member Centers</h2>
            </div>
            <div class="slider-container overflow-x-auto relative" ref="sliderContainer" @mousedown="onMouseDown"
                @mouseleave="onMouseLeave" @mouseup="onMouseUp" @mousemove="onMouseMove" @touchstart="onTouchStart"
                @touchmove="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd"
                style="cursor: grab; user-select: none;">
                <div class="slider-track flex">
                    <div v-for="(partner, index) in partners" :key="`first-${partner.id}`"
                        class="slider-item flex-shrink-0 w-48 sm:w-56 md:w-48 lg:w-64 mx-2 sm:mx-3 md:mx-4 bg-white dark:bg-slate-900 rounded-lg shadow-md p-4 sm:p-4 md:p-3 transition-all duration-300 hover:scale-105">
                        <div class="">
                            <div class="w-52 h-auto  mb-3 sm:mb-4 flex items-center justify-center">
                                <img :src="partner.logo" :alt="partner.name"
                                    class="my-auto h-full object-contain dark:brightness-200 dark:invert transition-transform duration-300 hover:scale-110">
                            </div>
                        </div>
                    </div>
                    <div v-for="(partner, index) in partners" :key="`second-${partner.id}`"
                        class="slider-item flex-shrink-0 w-48 sm:w-56 md:w-48 lg:w-64 mx-2 sm:mx-3 md:mx-4 bg-white dark:bg-slate-900 rounded-lg shadow-md p-4 sm:p-4 md:p-3 transition-all duration-300 hover:scale-105">
                        <div class="">
                            <div class="w-52 h-auto  mb-3 sm:mb-4 flex items-center justify-center">
                                <img :src="partner.logo" :alt="partner.name"
                                    class="my-auto h-full object-contain dark:brightness-200 dark:invert transition-transform duration-300 hover:scale-110">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const newsList = [
    {
        image: "/images/events-1.png",
        date: "27-Feb-2025",
        time: "06:30 PM to 08:00 PM",
        title: "Health Through Knowledge - Immunization & the Islamic Perspective",
        description:
            "Health Through Knowledge Immunization & the Islamic Perspective Guest Speakers...",
        link: "#"
    },
    {
        image: "/images/events-2.png",
        date: "05-Mar-2025",
        time: "02:00 PM to 03:30 PM",
        title: "Healthy Ramadan, Healthy you",
        description:
            "Healthy Ramadan, Healthy you A guide to health and Nutrition in Ramadan! Nurse Abdirahman Abdi",
        link: "#"
    },
    {
        image: "/images/events-3.png",
        date: "05-Mar-2025",
        time: "02:00 PM to 03:30 PM",
        title: "Family Vaccine Clinic- FEB 22",
        description:
            "Family Vaccine Clinic Mobile Health Clinic is back to service you: Blood pressure and diabetes testing. Many other over-the-counter medications, such pain relievers and acid reflux medications...",
        link: "#"
    }
];

const testimonials = [
    {
        id: 1,
        center: "Boston Islamic Center",
        quote: "“We are extremely grateful to the IANA team for their powerful insight and for the shared experience and best practices that have been result of the process they have undertaken on behalf of our community. Their efforts permit all of us do our best work, they matter to who we are and what we contribute to the world.”"
    },
    {
        id: 2,
        center: "Dar-us-Salam",
        quote: "“Ever since IANA has recalibrated for Islamic centers, organization, and the general public that it serves, IANA has been making strides in social programs, activities, and engagements. IANA has done impressive and exemplary work in uniting tens of Islamic centers and organizations around the nation under one umbrella with common objectives. Dar-us-Salam is a proud member of IANA and we are extremely appreciative of the services and unity that we enjoy under IANA.”"
    }
];

const partners = [
    { id: 1, logo: '/images/logos/Logo-1.webp' },
    { id: 2, logo: '/images/logos/Logo-2.webp' },
    { id: 3, logo: '/images/logos/Logo-4.webp' },
    { id: 4, logo: '/images/logos/Logo-5.webp' },
    { id: 5, logo: '/images/logos/Logo-6.webp' },
    { id: 6, logo: '/images/logos/Logo-7.webp' },
    { id: 7, logo: '/images/logos/Logo-8.webp' },
    { id: 8, logo: '/images/logos/Logo-9.webp' },
    { id: 9, logo: '/images/logos/Logo-10.webp' },
    { id: 10, logo: '/images/logos/Logo-11.webp' },
    { id: 11, logo: '/images/logos/Logo-12.webp' },
    { id: 12, logo: '/images/logos/Logo-13.webp' },
    { id: 13, logo: '/images/logos/Logo-14.webp' }
];

const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const sliderContainer = ref(null);
let autoSlideInterval = null;

// Touch support
const touchStartX = ref(0);
const touchScrollLeft = ref(0);

const onTouchStart = (e) => {
    isDragging.value = true;
    stopAutoSlide();
    touchStartX.value = e.touches[0].pageX - sliderContainer.value.offsetLeft;
    touchScrollLeft.value = sliderContainer.value.scrollLeft;
};
const onTouchMove = (e) => {
    if (!isDragging.value) return;
    const x = e.touches[0].pageX - sliderContainer.value.offsetLeft;
    const walk = (x - touchStartX.value) * 1.5;
    sliderContainer.value.scrollLeft = touchScrollLeft.value - walk;
};
const onTouchEnd = () => {
    isDragging.value = false;
    startAutoSlide();
};

const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
        if (sliderContainer.value && !isDragging.value) {
            sliderContainer.value.scrollLeft += 1;
            if (
                sliderContainer.value.scrollLeft + sliderContainer.value.offsetWidth >=
                sliderContainer.value.scrollWidth
            ) {
                sliderContainer.value.scrollLeft = 0;
            }
        }
    }, 10);
};

const stopAutoSlide = () => {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
};

const onMouseDown = (e) => {
    isDragging.value = true;
    stopAutoSlide();
    startX.value = e.pageX - sliderContainer.value.offsetLeft;
    scrollLeft.value = sliderContainer.value.scrollLeft;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
};
const onMouseLeave = () => {
    isDragging.value = false;
    startAutoSlide();
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
};
const onMouseUp = () => {
    isDragging.value = false;
    startAutoSlide();
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
};
const onMouseMove = (e) => {
    if (!isDragging.value) return;
    e.preventDefault();
    const x = e.pageX - sliderContainer.value.offsetLeft;
    const walk = (x - startX.value) * 1.5;
    sliderContainer.value.scrollLeft = scrollLeft.value - walk;
};

onMounted(() => {
    startAutoSlide();
});
onBeforeUnmount(() => {
    stopAutoSlide();
});

</script>

<style scoped>
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out both;
}

.animate-title-slide-in {
    animation: titleSlideIn 1s ease-out 0.2s both;
}

.slider-container {
    position: relative;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    border-radius: 20px;
    padding: 20px 0;
}

.slider-container::-webkit-scrollbar {
    display: none;
}

.slider-track {
    display: flex;
    width: max-content;
    gap: 16px;
}

.slider-item {
    position: relative;
    overflow: hidden;
}

.slider-item:hover::before {
    left: 100%;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes titleSlideIn {
    from {
        opacity: 0;
        transform: translateX(-30px) scale(0.9);
    }

    to {
        opacity: 1;
        transform: translateX(0) scale(1);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

.slider-item:hover {
    animation: float 2s ease-in-out infinite;
}

/* Enhanced shadows and transitions */
.slider-item {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slider-item:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Smooth image transitions */
img {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced button hover effects */
a:hover {
    transform: translateX(5px);
    transition: all 0.3s ease;
}

/* Gradient text effect for titles */
h2 {
    background: linear-gradient(135deg, #3F642E 0%, #99B88B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Responsive improvements */
@media (max-width: 768px) {
    .slider-container {
        padding: 15px 0;
    }
    
    .slider-item {
        margin: 0 8px;
    }
}
</style>