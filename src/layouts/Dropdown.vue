<template>
    <div class="relative">
        <label v-if="showLabel" class="block mb-1 font-medium">
            {{ label }} <span class="text-red-500">*</span>
        </label>
        <div class="relative">
            <!-- Dropdown -->
            <select :value="modelValue" @change="updateValue" class="w-full appearance-none pr-10 pl-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
               bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="" disabled selected hidden class="">
                    Select {{ label }}
                </option>
                <option v-for="(option, index) in options" :key="index" :value="option.value">
                    {{ option.text }}
                </option>
            </select>

            <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
        </div>

        <p v-if="error" class="text-red-600 text-sm mt-1">{{ error }}</p>
    </div>
</template>

<script setup>
defineProps({
    modelValue: [String, Number],
    label: String,
    error: String,
    options: {
        type: Array,
        default: () => [],
    },
    showLabel: {
        type: Boolean,
        default: true,
    },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>
