<template>
    <PageHeader title="Board of Directors" />
    <div class="container mx-auto px-4">
        <BoardRowCard />
    </div>
</template>

<script setup>
import PageHeader from '@/layouts/PageHeader.vue';
import BoardRowCard from '@/components/forntend/board/BoardRowCard.vue'
</script>