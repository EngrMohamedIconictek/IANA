<template>
    <div class="relative" ref="menuRef">
        <!-- Button -->
        <button class="text-gray-800 dark:text-white flex items-center gap-1.5" @click.stop="toggleDropdown">
            {{ label }}
            <i class="iconoir-nav-arrow-down-solid text-xs mt-1 font-semibold"></i>
        </button>
        <div v-if="!mobile && isOpen"
            class="absolute left-0 mt-2 w-64 bg-[#EBF8E5] dark:bg-slate-900 rounded shadow-lg py-2 z-50">
            <router-link v-for="(item, index) in items" :key="index" :to="item.path"
                class="block px-4 py-2 text-base font-normal text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                @click="closeDropdown">
                {{ item.name }}
            </router-link>
        </div>
        <div v-if="mobile && isOpen" class="mt-2 pl-4">
            <router-link v-for="(item, index) in items" :key="index" :to="item.path"
                class="block py-2 text-base font-normal text-gray-800 dark:text-white" @click="closeDropdown">
                {{ item.name }}
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    label: String,
    items: Array,
    mobile: Boolean,
    modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const isOpen = computed(() => props.modelValue === props.label)

function toggleDropdown() {
    emit('update:modelValue', isOpen.value ? null : props.label)
}

function closeDropdown() {
    emit('update:modelValue', null)
}

const menuRef = ref(null)

function handleClickOutside(event) {
    if (menuRef.value && !menuRef.value.contains(event.target)) {
        closeDropdown()
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>
