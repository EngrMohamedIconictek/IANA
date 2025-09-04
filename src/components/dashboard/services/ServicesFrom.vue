<template>
    <div class="w-full bg-white p-6 dark:bg-slate-800 rounded-md shadow">
        <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div class="md:col-span-2">
                    <FloatLabel variant="on">
                        <InputText id="service_title" v-model="formData.servicesTitle"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.servicesTitle }]"
                            @blur="validateField('servicesTitle')" />
                        <label for="service_title">Service Title *</label>
                    </FloatLabel>
                    <small v-if="errors.servicesTitle" class="text-red-500 text-sm mt-1 block">{{ errors.servicesTitle
                        }}</small>
                    <small v-else class="text-gray-500 text-sm mt-1 block">
                        {{ formData.servicesTitle ? formData.servicesTitle.length : 0 }}/100 characters
                    </small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <DatePicker v-model="formData.serviceDate" showIcon fluid iconDisplay="input"
                            inputId="icondisplay"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.serviceDate }"
                            @blur="validateField('serviceDate')" />
                        <label for="icondisplay">Service Date *</label>
                    </FloatLabel>
                    <small v-if="errors.serviceDate" class="text-red-500 text-sm mt-1 block">{{ errors.serviceDate
                        }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <DatePicker id="service_time" v-model="formData.eventTimeing" timeOnly fluid
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.eventTimeing }"
                            @blur="validateField('eventTimeing')" />
                        <label for="service_time">Service Time *</label>
                    </FloatLabel>
                    <small v-if="errors.eventTimeing" class="text-red-500 text-sm mt-1 block">{{ errors.eventTimeing
                        }}</small>
                </div>

                <div>
                    <label for="event_image">Feature Image</label>
                    <div class="mt-2">
                        <FileUpload name="event_image" url="/api/upload" @upload="onAdvancedUpload($event)"
                            :multiple="false" accept="image/*" :maxFileSize="1000000"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.eventImage }">
                            <template #empty>
                                <span>Drag and drop Square Image to here to upload.</span>
                            </template>
                        </FileUpload>
                    </div>
                    <small v-if="errors.eventImage" class="text-red-500 text-sm mt-1 block">{{ errors.eventImage
                        }}</small>
                </div>
                <div>
                    <label for="inner_image">Inner Image</label>
                    <div class="mt-2">
                        <FileUpload name="inner_image" url="/api/upload" @upload="onInnerImageUpload($event)"
                            :multiple="false" accept="image/*" :maxFileSize="1000000"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.innerImage }">
                            <template #empty>
                                <span>leaving empty will use related category image if exist</span>
                            </template>
                        </FileUpload>
                    </div>
                    <small v-if="errors.innerImage" class="text-red-500 text-sm mt-1 block">{{ errors.innerImage
                        }}</small>
                </div>
                <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Select Services
                        *</label>
                    <div class="flex flex-wrap gap-4">
                        <div v-for="category of categories" :key="category.key" class="flex items-center gap-2">
                            <Checkbox v-model="formData.selectedServices" :inputId="category.key" name="category"
                                :value="category.name" @change="validateField('selectedServices')" />
                            <label :for="category.key">{{ category.name }}</label>
                        </div>
                    </div>
                    <small v-if="errors.selectedServices" class="text-red-500 text-sm mt-1 block">{{ errors.selectedServices
                        }}</small>
                </div>

                <div class="md:col-span-2">
                    <FloatLabel variant="on">
                        <Textarea v-model="formData.shortDescription" rows="5" cols="30"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.shortDescription }]"
                            @blur="validateField('shortDescription')" />
                        <label for="short_description">Short Description *</label>
                    </FloatLabel>
                    <small v-if="errors.shortDescription" class="text-red-500 text-sm mt-1 block">{{
                        errors.shortDescription }}</small>
                    <small v-else class="text-gray-500 text-sm mt-1 block">
                        {{ formData.shortDescription ? formData.shortDescription.length : 0 }}/500 characters
                    </small>
                </div>
                <div class="md:col-span-2">
                    <label for="long_description">Long Description</label>
                    <div class="mt-3">
                        <Editor v-model="formData.longDescription" editorStyle="height: 220px"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.longDescription }"
                            @input="validateField('longDescription')" />
                    </div>
                    <small v-if="errors.longDescription" class="text-red-500 text-sm mt-1 block">{{
                        errors.longDescription }}</small>
                    <small v-else class="text-gray-500 text-sm mt-1 block">
                        {{ formData.longDescription ? formData.longDescription.length : 0 }}/5000 characters
                    </small>
                </div>
            </div>
            <div>
                <button type="submit" :disabled="isSubmitting"
                    class="flex items-center gap-2 rounded-full bg-green-700 text-white dark:bg-gray-950 dark:text-gray-100 hover:opacity-90 px-6 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-900/20 dark:focus:ring-gray-50/20 disabled:opacity-50 disabled:cursor-not-allowed">
                    <i class="pi pi-save h-4 w-4" aria-hidden="true"></i>
                    <span>{{ isSubmitting ? 'Publishing...' : 'Publish' }}</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

const formData = reactive({
    servicesTitle: '',
    serviceDate: null,
    eventTimeing: null,
    eventImage: null,
    innerImage: null,
    shortDescription: '',
    longDescription: '',
    selectedServices: []
});

// Form state
const isSubmitting = ref(false);
const errors = reactive({});

// Removed unused dropdown options

// Validation rules
const validationRules = {
    servicesTitle: {
        required: true,
        minLength: 3,
        maxLength: 100,
        message: 'Service Title is required and must be between 3-100 characters'
    },
    serviceDate: {
        required: true,
        message: 'Service date is required'
    },
    eventTimeing: {
        required: true,
        message: 'Service Time is required'
    },
    eventImage: {
        required: true,
        message: 'Feature image is required'
    },
    innerImage: {
        required: false,
        message: 'Inner image is optional'
    },
    shortDescription: {
        required: true,
        minLength: 10,
        maxLength: 500,
        message: 'Short description is required and must be between 10-500 characters'
    },
    longDescription: {
        required: false,
        maxLength: 5000,
        message: 'Long description must not exceed 5000 characters'
    },
    selectedServices: {
        required: true,
        minLength: 1,
        message: 'Please select at least one service'
    }
};

// Removed unused selectedCategories ref

const categories = ref([
  { key: "member-centers", name: "Member Centers" },
  { key: "islamic-holidays", name: "Islamic Holidays" },
  { key: "annual-conference", name: "IANA Annual Conference" },
  { key: "civics-engagement", name: "Civics Engagement" },
  { key: "youth-family", name: "Youth and Family" },
  { key: "annual-banquet", name: "IANA Annual Banquet" },
  { key: "health-awareness", name: "Health Awareness" },
  { key: "covid-19", name: "COVID-19" },
  { key: "family-business-counseling", name: "Family & Business Counseling" },
  { key: "advocacy-involvement", name: "IANA Advocacy involvement" },
  { key: "waqf-initiative", name: "“WAQF” INITIATIVE" },
  { key: "press-release", name: "PRESS RELEASE/PRESS CONFERENCE" },
  { key: "dawa-activity", name: "Da'wa Activity" },
  { key: "relief", name: "IANA RELIEF" },
  { key: "somali-involvement", name: "IANA SOMALI INVOLVEMENT" }
]);

// Validation functions
const validateField = (fieldName) => {
    const rule = validationRules[fieldName];
    if (!rule) return;

    const value = formData[fieldName];
    let isValid = true;
    let errorMessage = '';

    // Required validation
    if (rule.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
        isValid = false;
        errorMessage = rule.message;
    }

    // Conditional validation
    if (rule.conditional && rule.condition && rule.condition(value)) {
        if (!value || (typeof value === 'string' && value.trim() === '')) {
            isValid = false;
            errorMessage = rule.message;
        }
    }

    // String length validation
    if (isValid && value && typeof value === 'string') {
        if (rule.minLength && value.length < rule.minLength) {
            isValid = false;
            errorMessage = rule.message;
        }
        if (rule.maxLength && value.length > rule.maxLength) {
            isValid = false;
            errorMessage = rule.message;
        }
    }

    // Array validation (for selectedServices)
    if (isValid && Array.isArray(value)) {
        if (rule.minLength && value.length < rule.minLength) {
            isValid = false;
            errorMessage = rule.message;
        }
    }

    // Date validation
    if (isValid && (fieldName === 'serviceDate' || fieldName === 'eventTimeing')) {
        if (!value) {
            isValid = false;
            errorMessage = rule.message;
        }
    }

    // Date not in past validation
    if (isValid && fieldName === 'serviceDate' && value) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (value < today) {
            isValid = false;
            errorMessage = 'Service date cannot be in the past';
        }
    }

    // File validation
    if (isValid && (fieldName === 'eventImage' || fieldName === 'innerImage')) {
        if (rule.required && !value) {
            isValid = false;
            errorMessage = rule.message;
        }
        // File type validation
        if (value && value.type && !value.type.startsWith('image/')) {
            isValid = false;
            errorMessage = 'Please upload a valid image file';
        }
        // File size validation (1MB = 1000000 bytes)
        if (value && value.size && value.size > 1000000) {
            isValid = false;
            errorMessage = 'Image size must be less than 1MB';
        }
    }

    if (isValid) {
        delete errors[fieldName];
    } else {
        errors[fieldName] = errorMessage;
    }
};

const validateForm = () => {
    // Clear previous errors
    Object.keys(errors).forEach(key => delete errors[key]);

    // Validate all fields
    Object.keys(validationRules).forEach(fieldName => {
        validateField(fieldName);
    });

    // Check if form is valid
    return Object.keys(errors).length === 0;
};

// File upload handlers
const onAdvancedUpload = (event) => {
    const files = event.files;
    if (files && files.length > 0) {
        formData.eventImage = files[0];
        validateField('eventImage');
    }
};

const onInnerImageUpload = (event) => {
    const files = event.files;
    if (files && files.length > 0) {
        formData.innerImage = files[0];
        validateField('innerImage');
    }
};

// Form submission handler
const handleSubmit = async () => {
    if (!validateForm()) {
        console.log('Form validation failed:', errors);
        return;
    }

    isSubmitting.value = true;

    try {
        // Here you would typically send the data to your API
        console.log('Form data:', formData);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Reset form after successful submission
        formData.servicesTitle = '';
        formData.serviceDate = null;
        formData.eventTimeing = null;
        formData.eventImage = null;
        formData.innerImage = null;
        formData.shortDescription = '';
        formData.longDescription = '';
        formData.selectedServices = [];

        // Clear errors
        Object.keys(errors).forEach(key => delete errors[key]);

        console.log('Event created successfully!');

    } catch (error) {
        console.error('Error creating event:', error);
    } finally {
        isSubmitting.value = false;
    }
};

// Watch for changes in selectedServices to validate
watch(() => formData.selectedServices, () => {
    validateField('selectedServices');
}, { deep: true });

</script>