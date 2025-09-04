<template>
    <Dialog v-model:visible="visible" modal :closable="false" :style="{ width: '28rem' }"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" class="rounded-3xl overflow-hidden shadow-2xl">
        <div class="text-center p-2">
            <div
                class="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg shadow-red-500/30 mb-4 mx-auto">
                <i class="pi pi-exclamation-triangle text-white" style="font-size: 2rem;"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">Delete Confirmation</h3>
            <p class="text-gray-60 dark:text-white0 mb-1">Are you sure you want to delete this record?</p>
            <p class="text-sm text-gray-500 dark:text-white">This action cannot be undone.</p>
        </div>

        <template #footer>
            <div class="flex justify-center items-center gap-3 p-4">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false" outlined 
                    class="min-w-[130px] sm:min-w-[180px] h-10 sm:h-12 rounded-xl font-semibold text-sm sm:text-base hover:-translate-y-0.5 shadow-lg hover:shadow-lg transition-all duration-200" />
                <Button type="button" label="Delete" severity="danger" @click="confirmDelete" :loading="loading"
                    class="min-w-[130px] sm:min-w-[180px] h-10 sm:h-12 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-red-500 to-red-600 border-none shadow-lg shadow-red-500/30 hover:from-red-600 hover:to-red-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-200" />
            </div>
        </template>
    </Dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

// Props
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    }
})

// Emits
const emit = defineEmits(['update:modelValue', 'confirm'])

// Computed for v-model
const visible = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

// Methods
const confirmDelete = () => {
    emit('confirm')
}
</script>
