<template>
    <div class="w-full bg-white p-6 dark:bg-slate-800 rounded-md shadow">
        <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
                <div class="md:col-span-3">
                    <FloatLabel variant="on">
                        <InputText id="event_title" v-model="formData.eventTitle"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.eventTitle }]"
                            @blur="validateField('eventTitle')" />
                        <label for="event_title">Event Title *</label>
                    </FloatLabel>
                    <small v-if="errors.eventTitle" class="text-red-500 text-sm mt-1 block">{{ errors.eventTitle
                        }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <DatePicker v-model="formData.eventDate" showIcon fluid iconDisplay="input"
                            inputId="icondisplay"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.eventDate }"
                            @blur="validateField('eventDate')" />
                        <label for="icondisplay">Event Date *</label>
                    </FloatLabel>
                    <small v-if="errors.eventDate" class="text-red-500 text-sm mt-1 block">{{ errors.eventDate
                        }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <DatePicker id="event_timings" v-model="formData.eventTimeing" timeOnly fluid
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.eventTimeing }"
                            @blur="validateField('eventTimeing')" />
                        <label for="event_timings">Event Timings *</label>
                    </FloatLabel>
                    <small v-if="errors.eventTimeing" class="text-red-500 text-sm mt-1 block">{{ errors.eventTimeing
                        }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <DatePicker id="event_Time_to" v-model="formData.timingTo" timeOnly fluid
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.timingTo }"
                            @blur="validateField('timingTo')" />
                        <label for="event_Time_to">To *</label>
                    </FloatLabel>
                    <small v-if="errors.timingTo" class="text-red-500 text-sm mt-1 block">{{ errors.timingTo }}</small>
                </div>
                <div class="md:col-span-3">
                    <FloatLabel variant="on">
                        <InputText id="event_address" v-model="formData.eventAddress"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.eventAddress }]"
                            @blur="validateField('eventAddress')" />
                        <label for="event_address">Event's Address *</label>
                    </FloatLabel>
                    <small v-if="errors.eventAddress" class="text-red-500 text-sm mt-1 block">{{ errors.eventAddress
                        }}</small>
                </div>
                <div class="md:col-span-3">
                    <label for="event_image">Event Cover</label>
                    <div class="mt-2">
                        <FileUpload name="event_image" url="/api/upload" @upload="onAdvancedUpload($event)"
                            :multiple="false" accept="image/*" :maxFileSize="1000000"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.eventImage }">
                            <template #empty>
                                <span>Drag and drop files to here to upload.</span>
                            </template>
                        </FileUpload>
                    </div>
                    <small v-if="errors.eventImage" class="text-red-500 text-sm mt-1 block">{{ errors.eventImage
                        }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <Select v-model="formData.showButton" :options="buttonType" optionLabel="name" placeholder=""
                            class="w-full"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.showButton }"
                            @blur="validateField('showButton')" />
                        <label for="show_button">Show Button</label>
                    </FloatLabel>
                    <small v-if="errors.showButton" class="text-red-500 text-sm mt-1 block">{{ errors.showButton
                        }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <InputText id="button_name" v-model="formData.buttonName"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.buttonName }]"
                            @blur="validateField('buttonName')" />
                        <label for="button_name">Button Name</label>
                    </FloatLabel>
                    <small v-if="errors.buttonName" class="text-red-500 text-sm mt-1 block">{{ errors.buttonName
                        }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <Select v-model="formData.pageRedirection" :options="pageredic" optionLabel="name"
                            placeholder="" class="w-full"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.pageRedirection }"
                            @blur="validateField('pageRedirection')" />
                        <label for="page_redirection">Page Redirection</label>
                    </FloatLabel>
                    <small v-if="errors.pageRedirection" class="text-red-500 text-sm mt-1 block">{{
                        errors.pageRedirection }}</small>
                </div>
                <div class="md:col-span-3">
                    <FloatLabel variant="on">
                        <Textarea v-model="formData.eventDescription" rows="5" cols="30"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.eventDescription }]"
                            @blur="validateField('eventDescription')" />
                        <label for="event_description">Event Description *</label>
                    </FloatLabel>
                    <small v-if="errors.eventDescription" class="text-red-500 text-sm mt-1 block">{{
                        errors.eventDescription }}</small>
                </div>
                <div class="md:col-span-3">
                    <label for="long_description">Long Description</label>
                    <div class="mt-3">
                        <Editor v-model="formData.longDescription" editorStyle="height: 220px"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.longDescription }" />
                    </div>
                    <small v-if="errors.longDescription" class="text-red-500 text-sm mt-1 block">{{
                        errors.longDescription }}</small>
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
import { ref, reactive } from "vue";

const formData = reactive({
    eventTitle: '',
    eventDate: null,
    eventTimeing: null,
    timingTo: null,
    eventAddress: '',
    eventImage: null,
    showButton: null,
    buttonName: '',
    pageRedirection: null,
    eventDescription: '',
    longDescription: ''
});

// Form state
const isSubmitting = ref(false);
const errors = reactive({});

// Options for dropdowns
const buttonType = ref([
    { name: 'Hide', code: 'HD' },
    { name: 'Show', code: 'SW' }
]);

const pageredic = ref([
    { name: 'WorkShop', code: 'WS' }
]);

// Validation rules
const validationRules = {
    eventTitle: {
        required: true,
        minLength: 3,
        maxLength: 100,
        message: 'Event title is required and must be between 3-100 characters'
    },
    eventDate: {
        required: true,
        message: 'Event date is required'
    },
    eventTimeing: {
        required: true,
        message: 'Event Timings is required'
    },
    timingTo: {
        required: true,
        message: 'End time is required'
    },
    eventAddress: {
        required: true,
        minLength: 5,
        maxLength: 200,
        message: 'Event address is required and must be between 5-200 characters'
    },
    eventDescription: {
        required: true,
        minLength: 10,
        maxLength: 500,
        message: 'Event description is required and must be between 10-500 characters'
    },
    buttonName: {
        conditional: true,
        dependsOn: 'showButton',
        condition: (value) => formData.showButton?.code === 'SW',
        message: 'Button name is required when show button is enabled'
    }
};

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

    // Date validation
    if (isValid && (fieldName === 'eventDate' || fieldName === 'eventTimeing' || fieldName === 'timingTo')) {
        if (!value) {
            isValid = false;
            errorMessage = rule.message;
        }
    }

    // Time comparison validation
    if (isValid && fieldName === 'timingTo' && formData.eventTimeing && formData.timingTo) {
        const eventTimeing = new Date(`2000-01-01 ${formData.eventTimeing.toTimeString().split(' ')[0]}`);
        const timingTo = new Date(`2000-01-01 ${formData.timingTo.toTimeString().split(' ')[0]}`);

        if (timingTo <= eventTimeing) {
            isValid = false;
            errorMessage = 'End time must be after start time';
        }
    }

    // Date not in past validation
    if (isValid && fieldName === 'eventDate' && value) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (value < today) {
            isValid = false;
            errorMessage = 'Event date cannot be in the past';
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

// File upload handler
const onAdvancedUpload = (event) => {
    const files = event.files;
    if (files && files.length > 0) {
        formData.eventImage = files[0];
        validateField('eventImage');
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
        Object.keys(formData).forEach(key => {
            if (typeof formData[key] === 'string') {
                formData[key] = '';
            } else {
                formData[key] = null;
            }
        });

        // Clear errors
        Object.keys(errors).forEach(key => delete errors[key]);

        console.log('Event created successfully!');

    } catch (error) {
        console.error('Error creating event:', error);
    } finally {
        isSubmitting.value = false;
    }
};

// Watch for changes in showButton to validate buttonName
import { watch } from 'vue';
watch(() => formData.showButton, () => {
    if (formData.showButton?.code === 'SW') {
        validateField('buttonName');
    } else {
        delete errors.buttonName;
    }
});

</script>