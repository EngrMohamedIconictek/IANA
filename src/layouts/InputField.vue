<template>
    <div class="">
        <label v-if="showLabel" class="block mb-1 font-medium">{{ label }} <span class="text-red-500">*</span></label>
        <input :type="type" :value="modelValue" @input="updateValue"
            class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :placeholder="placeholder || label" />
        <p v-if="error" class="text-red-600 text-sm mt-1">{{ error }}</p>
    </div>
</template>

<script setup>
defineProps({
    modelValue: [String, Number, Boolean, Date],
    label: String,
    error: String,
    type: {
        type: String,
        default: 'text',
    },
    showLabel: {
        type: Boolean,
        default: true,
    },
    placeholder: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>
