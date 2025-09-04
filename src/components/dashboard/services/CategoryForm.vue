<template>
    <div class="w-full bg-white p-6 dark:bg-slate-800 rounded-md shadow">
        <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div>
                    <FloatLabel variant="on">
                        <InputText id="category_name" v-model="formData.CategoryName"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.CategoryName }]"
                            @blur="validateField('CategoryName')" />
                        <label for="category_name">Category Name *</label>
                    </FloatLabel>
                    <small v-if="errors.CategoryName" class="text-red-500 text-sm mt-1 block">{{ errors.CategoryName
                    }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <Select id="show_on_homepage" v-model="formData.showOnHomepage" :options="homepageOptions"
                            optionLabel="label" optionValue="value"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.showOnHomepage }]"
                            @blur="validateField('showOnHomepage')" />
                        <label for="show_on_homepage">Wanna show it on Home Page ? *</label>
                    </FloatLabel>
                    <small v-if="errors.showOnHomepage" class="text-red-500 text-sm mt-1 block">{{ errors.showOnHomepage
                    }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <InputText id="icon_name" v-model="formData.iconName"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.iconName }]"
                            @blur="validateField('iconName')" placeholder="e.g., pi-home, pi-user, or lucide:home" />
                        <label for="icon_name">Insert icon name *</label>
                    </FloatLabel>
                    <small v-if="errors.iconName" class="text-red-500 text-sm mt-1 block">{{ errors.iconName
                    }}</small>
                    <small v-else class="text-gray-500 text-sm mt-1 block">
                        Use PrimeVue icons (pi-*) or Iconior icons (lucide:*)
                    </small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <InputText id="videos_heading" v-model="formData.videosHeading"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.videosHeading }]"
                            @blur="validateField('videosHeading')" />
                        <label for="videos_heading">Videos Heading *</label>
                    </FloatLabel>
                    <small v-if="errors.videosHeading" class="text-red-500 text-sm mt-1 block">{{ errors.videosHeading
                    }}</small>
                </div>
                <div class="md:col-span-2">
                    <label for="event_image">Background Image</label>
                    <div class="mt-2">
                        <FileUpload name="event_image" url="/api/upload" @upload="onAdvancedUpload($event)"
                            :multiple="false" accept="image/*" :maxFileSize="1000000"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.eventImage }">
                            <template #empty>
                                <span>Drag and drop Image to here to upload.</span>
                            </template>
                        </FileUpload>
                    </div>
                    <small v-if="errors.eventImage" class="text-red-500 text-sm mt-1 block">{{ errors.eventImage
                    }}</small>
                </div>
            </div>
            <!-- Dynamic URL Sections -->
            <div v-for="(section, index) in formData.urlSections" :key="section.id"
                class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div>
                    <FloatLabel variant="on">
                        <InputText :id="`url_${section.id}`" v-model="section.url"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors[`url_${section.id}`] }]"
                            @blur="validateUrlSection(section.id)"  />
                        <label :for="`url_${section.id}`">URL *</label>
                    </FloatLabel>
                    <small v-if="errors[`url_${section.id}`]" class="text-red-500 text-sm mt-1 block">
                        {{ errors[`url_${section.id}`] }}
                    </small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <Select :id="`platform_${section.id}`" v-model="section.platform" :options="platformOptions"
                            optionLabel="label" optionValue="value"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors[`platform_${section.id}`] }]"
                            @blur="validateUrlSection(section.id)" />
                        <label :for="`platform_${section.id}`">Select Platform *</label>
                    </FloatLabel>
                    <small v-if="errors[`platform_${section.id}`]" class="text-red-500 text-sm mt-1 block">
                        {{ errors[`platform_${section.id}`] }}
                    </small>
                </div>
                <div>
                    <button type="button" @click="removeUrlSection(section.id)"
                        :disabled="formData.urlSections.length === 1"
                        :title="formData.urlSections.length === 1 ? 'At least one URL section is required' : 'Remove this URL section'"
                        class="flex items-center gap-2 rounded-full bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 px-6 py-2 text-sm font-semibold transition-colors duration-200 shadow-md hover:shadow-lg disabled:bg-red-400 disabled:cursor-not-allowed">
                        <i class="pi pi-trash h-4 w-4" aria-hidden="true"></i>
                        <span>Remove</span>
                    </button>
                </div>
            </div>
            <div class="my-3">
                <button type="button" @click="addUrlSection"
                    class="flex items-center gap-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 px-6 py-2 text-sm font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
                    <i class="pi pi-plus h-4 w-4" aria-hidden="true"></i>
                    <span>Add More Url</span>
                </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    <span>{{ isSubmitting ? 'Submitting...' : 'Submit' }}</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

const formData = reactive({
    CategoryName: '',
    iconName: '',
    showOnHomepage: null,
    videosHeading: '',
    serviceDate: null,
    eventTimeing: null,
    eventImage: null,
    innerImage: null,
    shortDescription: '',
    longDescription: '',
    selectedServices: [],
    urlSections: [
        {
            id: 1,
            url: '',
            platform: null
        }
    ]
});

// Form state
const isSubmitting = ref(false);
const errors = reactive({});

// Removed unused dropdown options

// Validation rules
const validationRules = {
    CategoryName: {
        required: true,
        minLength: 3,
        maxLength: 100,
        message: 'Category Name is required and must be between 3-100 characters'
    },
    iconName: {
        required: true,
        minLength: 3,
        maxLength: 50,
        message: 'Icon name is required and must be between 3-50 characters'
    },
    showOnHomepage: {
        required: true,
        message: 'Please select whether to show on homepage'
    },
    videosHeading: {
        required: true,
        minLength: 3,
        maxLength: 100,
        message: 'Videos Heading is required and must be between 3-100 characters'
    },
    urlSections: {
        required: true,
        minLength: 1,
        message: 'At least one URL section is required'
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
    { key: "waqf-initiative", name: "\"WAQF\" INITIATIVE" },
    { key: "press-release", name: "PRESS RELEASE/PRESS CONFERENCE" },
    { key: "dawa-activity", name: "Da'wa Activity" },
    { key: "relief", name: "IANA RELIEF" },
    { key: "somali-involvement", name: "IANA SOMALI INVOLVEMENT" }
]);

const homepageOptions = ref([
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
    { label: "MAX 3 ALLOWED", value: "max_3" }
]);

const platformOptions = ref([
    { label: "Facebook", value: "facebook" },
    { label: "Youtube/Out-Source", value: "youtube_outsource" }
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

    // Validate URL sections
    formData.urlSections.forEach(section => {
        validateUrlSection(section.id);
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
        formData.CategoryName = '';
        formData.iconName = '';
        formData.showOnHomepage = null;
        formData.videosHeading = '';
        formData.serviceDate = null;
        formData.eventTimeing = null;
        formData.eventImage = null;
        formData.innerImage = null;
        formData.shortDescription = '';
        formData.longDescription = '';
        formData.selectedServices = [];
        formData.urlSections = [
            {
                id: 1,
                url: '',
                platform: null
            }
        ];
        nextUrlSectionId = 2;

        // Clear errors
        Object.keys(errors).forEach(key => delete errors[key]);

        console.log('Event created successfully!');

    } catch (error) {
        console.error('Error creating event:', error);
    } finally {
        isSubmitting.value = false;
    }
};

// URL Section management
let nextUrlSectionId = 2;

const addUrlSection = () => {
    formData.urlSections.push({
        id: nextUrlSectionId++,
        url: '',
        platform: null
    });
};

const removeUrlSection = (sectionId) => {
    if (formData.urlSections.length > 1) {
        const index = formData.urlSections.findIndex(section => section.id === sectionId);
        if (index > -1) {
            formData.urlSections.splice(index, 1);
        }
    }
};

const validateUrlSection = (sectionId) => {
    const section = formData.urlSections.find(s => s.id === sectionId);
    if (!section) return;

    const urlErrorKey = `url_${sectionId}`;
    const platformErrorKey = `platform_${sectionId}`;

    // Validate URL
    if (!section.url || section.url.trim() === '') {
        errors[urlErrorKey] = 'URL is required';
    } else if (!isValidUrl(section.url)) {
        errors[urlErrorKey] = 'Please enter a valid URL';
    } else {
        delete errors[urlErrorKey];
    }

    // Validate Platform
    if (!section.platform) {
        errors[platformErrorKey] = 'Please select a platform';
    } else {
        delete errors[platformErrorKey];
    }
};

const isValidUrl = (string) => {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
};

// Watch for changes in selectedServices to validate
watch(() => formData.selectedServices, () => {
    validateField('selectedServices');
}, { deep: true });

// Watch for changes in urlSections to validate
watch(() => formData.urlSections, () => {
    formData.urlSections.forEach(section => {
        validateUrlSection(section.id);
    });
}, { deep: true });

</script>