<template>
    <PageToolbar title="Fatwa Hotline" v-model:modelValue="search" :showSearch="true" :showView="false"
        :showExcel="true" :showAdd="false" :useModal="false"  />
    <div>
        <FatwaHotlineRowCard />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageToolbar from '@/layouts/dashboard/PageToolbar.vue'
import FatwaHotlineRowCard from '@/components/dashboard/fatwas/FatwaHotlineRowCard.vue';

</script>