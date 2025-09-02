<template>
    <div class="w-full p-6 rounded bg-[#EBF8E5] border-2 border-[#3F642E] dark:bg-slate-950">
        <div class="text-center pb-5">
            <h3 class="text-xl text-[#3F642E] font-semibold">Message Us</h3>
            <h2 class="text-2xl sm:text-3xl text-[#C2692B] font-semibold">Please feel free to reach us!</h2>
        </div>
        <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <InputField v-model="formData.firstName" label="First Name" type="text" :error="errors.firstName"
                    :showLabel="false" placeholder="Enter your first name" />
            </div>
            <div>
                <InputField v-model="formData.lastName" label="Last Name" type="text" :error="errors.lastName"
                    :showLabel="false" placeholder="Enter your last name" />
            </div>
            <div>
                <InputField v-model="formData.email" label="Email" type="email" :error="errors.email" :showLabel="false"
                    placeholder="Enter your email address" />
            </div>
            <div>
                <InputField v-model="formData.phone" label="Phone" type="tel" :error="errors.phone" :showLabel="false"
                    placeholder="Enter your phone number" />
            </div>
            <div class="lg:col-span-2">
                <label class="block mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Counseling
                </label>
                <div class="flex flex-wrap gap-4">
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="formData.counselingAreas.familyCounseling"
                            class="w-4 h-4 text-[#3F642E] bg-gray-100 border-gray-300 rounded focus:ring-[#3F642E] dark:focus:ring-[#3F642E] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Family Counseling</span>
                    </label>

                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="formData.counselingAreas.youthCounseling"
                            class="w-4 h-4 text-[#3F642E] bg-gray-100 border-gray-300 rounded focus:ring-[#3F642E] dark:focus:ring-[#3F642E] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Youth Counseling</span>
                    </label>

                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="formData.counselingAreas.businessDispute"
                            class="w-4 h-4 text-[#3F642E] bg-gray-100 border-gray-300 rounded focus:ring-[#3F642E] dark:focus:ring-[#3F642E] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Business Dispute</span>
                    </label>
                </div>
                <p v-if="errors.counselingAreas" class="text-red-600 text-sm mt-1">{{ errors.counselingAreas }}</p>
            </div>
            <div class="lg:col-span-2">
                <TextareaInput v-model="formData.message" label="Message" :showLabel="false" rows="3"
                    placeholder="Enter your message here..." :error="errors.message" />
            </div>



            <div class="md:col-span-2">
                <button type="submit"
                    class="btn rounded-full py-1.5 px-5 text-white bg-[#3F642E] hover:bg-[#2d4a22] transition-colors">
                    Send Message
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import InputField from '@/layouts/InputField.vue'
import TextareaInput from '@/layouts/TextareaInput.vue'

const formData = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    counselingAreas: {
        familyCounseling: false,
        youthCounseling: false,
        businessDispute: false
    }
})

const errors = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    counselingAreas: ''
})

const validateForm = () => {
    // Reset errors
    Object.keys(errors).forEach(key => errors[key] = '')

    let isValid = true

    // First Name validation
    if (!formData.firstName.trim()) {
        errors.firstName = 'First name is required'
        isValid = false
    } else if (formData.firstName.trim().length < 2) {
        errors.firstName = 'First name must be at least 2 characters long'
        isValid = false
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.firstName.trim())) {
        errors.firstName = 'First name can only contain letters, spaces, hyphens, and apostrophes'
        isValid = false
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
        errors.lastName = 'Last name is required'
        isValid = false
    } else if (formData.lastName.trim().length < 2) {
        errors.lastName = 'Last name must be at least 2 characters long'
        isValid = false
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.lastName.trim())) {
        errors.lastName = 'Last name can only contain letters, spaces, hyphens, and apostrophes'
        isValid = false
    }

    // Email validation
    if (!formData.email.trim()) {
        errors.email = 'Email is required'
        isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address'
        isValid = false
    } else if (formData.email.trim().length > 254) {
        errors.email = 'Email address is too long'
        isValid = false
    }

    // Phone validation
    if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required'
        isValid = false
    } else {
        // Remove all non-digit characters for validation
        const phoneDigits = formData.phone.replace(/\D/g, '')
        if (phoneDigits.length < 10) {
            errors.phone = 'Phone number must be at least 10 digits'
            isValid = false
        } else if (phoneDigits.length > 15) {
            errors.phone = 'Phone number is too long'
            isValid = false
        } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(phoneDigits)) {
            errors.phone = 'Please enter a valid phone number'
            isValid = false
        }
    }

    // Message validation
    if (!formData.message.trim()) {
        errors.message = 'Message is required'
        isValid = false
    } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters long'
        isValid = false
    } else if (formData.message.trim().length > 1000) {
        errors.message = 'Message must not exceed 1000 characters'
        isValid = false
    }

    // Counseling areas validation
    const hasSelectedArea = Object.values(formData.counselingAreas).some(area => area === true)
    if (!hasSelectedArea) {
        errors.counselingAreas = 'Please select at least one counseling area'
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
        formData.firstName = ''
        formData.lastName = ''
        formData.email = ''
        formData.phone = ''
        formData.message = ''
        formData.counselingAreas = {
            familyCounseling: false,
            youthCounseling: false,
            businessDispute: false
        }
    } else {
        console.log('Form validation failed')
    }
}
</script>