<template>
    <div class="w-full p-6 rounded bg-[#EBF8E5] border-2 border-[#3F642E] dark:bg-slate-950">
        <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="">
                <InputField v-model="formData.name" label="Name" :error="errors.name" required />
            </div>
            <div class="">
                <InputField v-model="formData.email" label="Email" type="email" :error="errors.email" required />
            </div>
            <div class="">
                <InputField v-model="formData.phone" label="Phone" type="tel" :error="errors.phone" required />
            </div>
            <div class="">
                <InputField v-model="formData.subject" label="Subject" :error="errors.subject" placeholder=""
                    required />
            </div>
            <div class="md:col-span-2">
                <TextareaInput v-model="formData.message" label="Your Message" :error="errors.message" required />
            </div>
            <div class="md:col-span-2">
                <button type="submit" :disabled="isSubmitting"
                    class="btn rounded py-1.5 px-5 text-white bg-[#3F642E] hover:bg-[#2d4a22] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    <span v-if="isSubmitting" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    {{ isSubmitting ? 'Submitting...' : 'Submit' }}
                </button>
            </div>
            <div v-if="submitSuccess"
                class="md:col-span-2 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                <p class="font-medium">Thank you for your message!</p>
                <p class="text-sm">We'll get back to you as soon as possible.</p>
            </div>
            <div v-if="submitError" class="md:col-span-2 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                <p class="font-medium">Something went wrong!</p>
                <p class="text-sm">{{ submitError }}</p>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import InputField from '@/layouts/InputField.vue'
import TextareaInput from '@/layouts/TextareaInput.vue'

// Form data
const formData = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
})

// Form state
const errors = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

// Validation rules
const validationRules = {
    name: {
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s]+$/
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phone: {
        required: true,
        pattern: /^[\+]?[1-9][\d]{0,15}$/
    },
    subject: {
        required: true,
        minLength: 5,
        maxLength: 100
    },
    message: {
        required: true,
        minLength: 10,
        maxLength: 1000
    }
}

// Validation functions
const validateField = (fieldName, value) => {
    const rules = validationRules[fieldName]
    let error = ''

    if (rules.required && !value.trim()) {
        error = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`
    } else if (value.trim()) {
        if (rules.minLength && value.length < rules.minLength) {
            error = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${rules.minLength} characters`
        } else if (rules.maxLength && value.length > rules.maxLength) {
            error = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be less than ${rules.maxLength} characters`
        } else if (rules.pattern && !rules.pattern.test(value)) {
            switch (fieldName) {
                case 'email':
                    error = 'Please enter a valid email address'
                    break
                case 'phone':
                    error = 'Please enter a valid phone number'
                    break
                case 'name':
                    error = 'Name can only contain letters and spaces'
                    break
                default:
                    error = `Please enter a valid ${fieldName}`
            }
        }
    }

    errors[fieldName] = error
    return !error
}

const validateForm = () => {
    let isValid = true

    Object.keys(validationRules).forEach(fieldName => {
        if (!validateField(fieldName, formData[fieldName])) {
            isValid = false
        }
    })

    return isValid
}

// Clear all errors
const clearErrors = () => {
    Object.keys(errors).forEach(key => {
        errors[key] = ''
    })
}

// Clear success/error messages
const clearMessages = () => {
    submitSuccess.value = false
    submitError.value = ''
}

// Reset form
const resetForm = () => {
    Object.keys(formData).forEach(key => {
        formData[key] = ''
    })
    clearErrors()
    clearMessages()
}

// Handle form submission
const handleSubmit = async () => {
    clearMessages()

    if (!validateForm()) {
        return
    }

    isSubmitting.value = true

    try {
        // Simulate API call - replace with actual API endpoint
        await submitFormData()

        submitSuccess.value = true
        resetForm()

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
            submitSuccess.value = false
        }, 5000)

    } catch (error) {
        submitError.value = error.message || 'Failed to submit form. Please try again.'

        // Auto-hide error message after 5 seconds
        setTimeout(() => {
            submitError.value = ''
        }, 5000)
    } finally {
        isSubmitting.value = false
    }
}

// Simulate form submission - replace with actual API call
const submitFormData = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Simulate random failure (remove in production)
    if (Math.random() < 0.1) {
        throw new Error('Network error occurred. Please try again.')
    }

    console.log('Form submitted successfully:', formData)
}

import { watch } from 'vue'

Object.keys(formData).forEach(fieldName => {
    watch(() => formData[fieldName], (newValue) => {
        if (errors[fieldName]) {
            validateField(fieldName, newValue)
        }
    })
})
</script>