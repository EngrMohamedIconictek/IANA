<template>
    <div class="w-full p-4 rounded bg-[#EBF8E5] border-2 border-[#3F642E] dark:bg-slate-950">
        <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="md:col-span-2 text-center">
                    <h4 class="text-base font-semibold text-[#3F642E]">Please fill The Form To</h4>
                    <h2 class="text-2xl sm:text-4xl leading-relaxed text-[#C2692B] font-semibold capitalize">Become A
                        voluteer</h2>
                </div>
                <div class="">
                    <InputField v-model="formData.name" label="Name"  :error="errors.name" type="text" :showLabel="false" required />
                </div>
                <div class="">
                    <InputField v-model="formData.phone" label="Phone Number" :error="errors.phone" type="tel" :showLabel="false"
                        required />
                </div>
                <div class="">
                    <InputField v-model="formData.address" label="Home Address" type="text" :error="errors.address"
                        :showLabel="false" required />
                </div>
                <div class="">
                    <InputField v-model="formData.email" label="Email" :error="errors.email" type="email" :showLabel="false"
                        required />
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div class="">
                    <InputField v-model="formData.city" label="City" :error="errors.city" type="text" :showLabel="false" required />
                </div>
                <div class="">
                    <InputField v-model="formData.state" label="State" :error="errors.state" type="text" :showLabel="false"
                        required />
                </div>
                <div class="">
                    <InputField v-model="formData.zip" label="Zip Code" :error="errors.zip" type="text" :showLabel="false"
                        required />
                </div>
                <div class="">
                    <InputField v-model="formData.emergencyContact" label="Emergency Contact"
                        :error="errors.emergencyContact" type="text" :showLabel="false" required />
                </div>
                <div class="">
                    <InputField v-model="formData.relation" label="Relation" type="text" :error="errors.relation" :showLabel="false"
                        required />
                </div>
                <div class="">
                    <InputField v-model="formData.emergencyPhone" label="Emergency Phone" type="tel" :error="errors.emergencyPhone" :showLabel="false"
                        required />
                </div>
                <div class="md:col-span-3">
                    <label class="block mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Which areas are you most interested in volunteering for?
                    </label>
                    <div class="flex flex-wrap gap-4">
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="formData.volunteerAreas.consulting"
                                class="w-4 h-4 text-[#3F642E] bg-gray-100 border-gray-300 rounded focus:ring-[#3F642E] dark:focus:ring-[#3F642E] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Consulting</span>
                        </label>

                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="formData.volunteerAreas.fundraising"
                                class="w-4 h-4 text-[#3F642E] bg-gray-100 border-gray-300 rounded focus:ring-[#3F642E] dark:focus:ring-[#3F642E] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Fundraising</span>
                        </label>

                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="formData.volunteerAreas.marketing"
                                class="w-4 h-4 text-[#3F642E] bg-gray-100 border-gray-300 rounded focus:ring-[#3F642E] dark:focus:ring-[#3F642E] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Marketing</span>
                        </label>

                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="formData.volunteerAreas.socialMedia"
                                class="w-4 h-4 text-[#3F642E] bg-gray-100 border-gray-300 rounded focus:ring-[#3F642E] dark:focus:ring-[#3F642E] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Social Media</span>
                        </label>
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="formData.volunteerAreas.crowdControl"
                                class="w-4 h-4 text-[#3F642E] bg-gray-100 border-gray-300 rounded focus:ring-[#3F642E] dark:focus:ring-[#3F642E] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Crowd Control</span>
                        </label>
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="formData.volunteerAreas.Technology"
                                class="w-4 h-4 text-[#3F642E] bg-gray-100 border-gray-300 rounded focus:ring-[#3F642E] dark:focus:ring-[#3F642E] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Technology</span>
                        </label>
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="formData.volunteerAreas.Childcare"
                                class="w-4 h-4 text-[#3F642E] bg-gray-100 border-gray-300 rounded focus:ring-[#3F642E] dark:focus:ring-[#3F642E] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Childcare</span>
                        </label>
                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" v-model="formData.volunteerAreas.Other"
                                class="w-4 h-4 text-[#3F642E] bg-gray-100 border-gray-300 rounded focus:ring-[#3F642E] dark:focus:ring-[#3F642E] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Other</span>
                        </label>
                    </div>
                    <p v-if="errors.volunteerAreas" class="text-red-600 text-sm mt-1">{{ errors.volunteerAreas }}</p>
                </div>
                <div class="md:col-span-3">
                    <InputField v-model="formData.volunteerExperience" type="text" label="Have you or are you currently a volunteer for any organization? If yes, please name the organization." :error="errors.volunteerExperience" :showLabel="false"
                        required />
                </div>
            </div>

            <div>
                <button type="submit" :disabled="isSubmitting"
                    class="btn py-1.5 px-8 text-white bg-[#3F642E] rounded-full hover:bg-[#2d4a22] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    <span v-if="isSubmitting" class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    {{ isSubmitting ? 'Submitting...' : 'Submit' }}
                </button>
            </div>
            <div v-if="submitSuccess"
                class="md:col-span-2 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md dark:bg-green-900 dark:border-green-700 dark:text-green-200">
                <p class="font-medium">Thank you for your volunteer application!</p>
                <p class="text-sm">We'll review your application and get back to you soon.</p>
            </div>
            <div v-if="submitError"
                class="md:col-span-2 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md dark:bg-red-900 dark:border-red-700 dark:text-red-200">
                <p class="font-medium">Something went wrong!</p>
                <p class="text-sm">{{ submitError }}</p>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import InputField from '@/layouts/InputField.vue'

const formData = reactive({
    name: '',
    phone: '',
    address: '',
    email: '',
    city: '',
    state: '',
    zip: '',
    emergencyContact: '',
    emergencyPhone: '',
    relation: '',
    volunteerExperience: '',
    volunteerAreas: {
        consulting: false,
        fundraising: false,
        marketing: false,
        socialMedia: false,
        crowdControl: false,
        Technology: false,
        Childcare: false,
        Other: false
    }
})

const errors = reactive({
    name: '',
    phone: '',
    address: '',
    email: '',
    city: '',
    state: '',
    zip: '',
    emergencyContact: '',
    emergencyPhone: '',
    relation: '',
    volunteerExperience: '',
    volunteerAreas: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

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
    address: {
        required: true,
        minLength: 5,
        maxLength: 200
    },
    city: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    state: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    zip: {
        required: true,
        pattern: /^\d{5}(-\d{4})?$/
    },
    emergencyContact: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    emergencyPhone: {
        required: true,
        pattern: /^[\+]?[1-9][\d]{0,15}$/
    },
    relation: {
        required: true,
        minLength: 2,
        maxLength: 50
    },
    volunteerExperience: {
        required: true,
        minLength: 5,
        maxLength: 500
    },
    volunteerAreas: {
        required: true
    }
}

const validateField = (fieldName, value) => {
    const rules = validationRules[fieldName]
    let error = ''

    if (fieldName === 'volunteerAreas') {
        // Check if at least one volunteer area is selected
        const hasSelection = Object.values(value).some(area => area === true)
        if (rules.required && !hasSelection) {
            error = 'Please select at least one volunteer area'
        }
    } else if (rules.required && !value.trim()) {
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
                case 'emergencyPhone':
                    error = 'Please enter a valid phone number'
                    break
                case 'zip':
                    error = 'Please enter a valid ZIP code'
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

const clearMessages = () => {
    submitSuccess.value = false
    submitError.value = ''
}

// Reset form
const resetForm = () => {
    Object.keys(formData).forEach(key => {
        if (key === 'volunteerAreas') {
            Object.keys(formData[key]).forEach(area => {
                formData[key][area] = false
            })
        } else {
            formData[key] = ''
        }
    })
    clearErrors()
    clearMessages()
}

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