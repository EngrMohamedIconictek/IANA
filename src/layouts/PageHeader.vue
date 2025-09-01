<template>
    <div class="relative h-32 md:h-40 flex items-center justify-center text-white text-center bg-cover bg-center"
        :style="{ backgroundImage: `url(${background})` }" @contextmenu.prevent @dragstart.prevent>
        <!-- Overlay -->
        <div class="absolute inset-0 dark:bg-slate-900/50 "></div>

        <!-- Title Text -->
        <h1 class="relative max-w-4xl mx-auto z-10 text-2xl md:text-4xl font-semibold text-[#FFCD45] dark:text-white">
            {{ title }}
        </h1>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'About Us',
    },
    background: {
        type: String,
        default: '/images/header-bg.png',
    },
});
</script>
