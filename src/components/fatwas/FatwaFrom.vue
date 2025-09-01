<template>
    <div class="w-full p-6 rounded bg-[#EBF8E5] border-2 border-[#3F642E] dark:bg-slate-950">
        <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="md:col-span-2">
                <InputField v-model="formData.title" label="Title.." type="text" :error="errors.title"
                    :showLabel="false" placeholder="Enter fatwa title here..." />
            </div>
            <div>
                <Dropdown v-model="formData.category" label="Category" :options="[
                    { value: 'fw1', text: 'Fatwa 1' },
                    { value: 'fw2', text: 'Fatwa 2' },
                    { value: 'fw3', text: 'Fatwa 3' }
                ]" :error="errors.category" :showLabel="false" />
            </div>
            <div>
                <Dropdown v-model="formData.ulama" label="Ulama" :options="[
                    { value: 'fw1', text: 'Fatwa 1' },
                    { value: 'fw2', text: 'Fatwa 2' },
                    { value: 'fw3', text: 'Fatwa 3' }
                ]" :error="errors.ulama" :showLabel="false" />
            </div>
            <div class="md:col-span-2">
                <InputField v-model="formData.date" label="Date" type="date" :error="errors.date" :showLabel="false" placeholder="Select date" />
            </div>
            <div class="md:col-span-2">
                <TextareaInput v-model="formData.description" label="Your Question" :error="errors.description"
                    :showLabel="false" placeholder="Type your question or fatwa request here..." />
            </div>

            <div class="md:col-span-2">
                <button type="submit"
                    class="btn rounded-full py-1.5 px-5 text-white bg-[#3F642E] hover:bg-[#2d4a22] transition-colors">
                    Ask Question
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import InputField from '@/layouts/InputField.vue'
import Dropdown from '@/layouts/Dropdown.vue'
import TextareaInput from '@/layouts/TextareaInput.vue'

const formData = reactive({
    title: '',
    category: '',
    ulama: '',
    date: '',
    description: ''
})

const errors = reactive({
    title: '',
    category: '',
    ulama: '',
    date: '',
    description: ''
})

const validateForm = () => {
    // Reset errors
    Object.keys(errors).forEach(key => errors[key] = '')

    let isValid = true

    if (!formData.title.trim()) {
        errors.title = 'Title is required'
        isValid = false
    }

    if (!formData.category) {
        errors.category = 'Please select a category'
        isValid = false
    }

    if (!formData.ulama) {
        errors.ulama = 'Please select an ulama'
        isValid = false
    }

    if (!formData.date) {
        errors.date = 'Date is required'
        isValid = false
    }

    if (!formData.description.trim()) {
        errors.description = 'Question description is required'
        isValid = false
    }

    return isValid
}

const handleSubmit = () => {
    if (validateForm()) {
        // Form is valid, proceed with submission
        console.log('Form submitted:', formData)
        // Here you can add your API call or form submission logic
        alert('Form submitted successfully!')

        // Reset form after successful submission
        Object.keys(formData).forEach(key => formData[key] = '')
    } else {
        console.log('Form validation failed')
    }
}
</script>