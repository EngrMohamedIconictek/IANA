<template>
    <div class="w-full py-2">
        <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
                <div class="md:col-span-3">
                    <FloatLabel variant="on">
                        <InputText id="title" v-model="formData.fatwaTitle"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.fatwaTitle }]"
                            @blur="validateField('fatwaTitle')" />
                        <label for="title">Title *</label>
                    </FloatLabel>
                    <small v-if="errors.fatwaTitle" class="text-red-500 text-sm mt-1 block">{{ errors.fatwaTitle
                        }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <Select id="category" v-model="formData.category" fluid
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.category }"
                            @blur="validateField('category')" 
                            :options="categoryOptions" 
                            optionLabel="label" 
                            optionValue="value" />
                        <label for="category">Category *</label>
                    </FloatLabel>
                    <small v-if="errors.category" class="text-red-500 text-sm mt-1 block">{{ errors.category }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <InputText id="scholar_name" v-model="formData.scholarName" fluid
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.scholarName }"
                            @blur="validateField('scholarName')" />
                        <label for="scholar_name">Scholar Name *</label>
                    </FloatLabel>
                    <small v-if="errors.scholarName" class="text-red-500 text-sm mt-1 block">{{ errors.scholarName }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <DatePicker v-model="formData.fatwaDate" showIcon fluid iconDisplay="input"
                            inputId="icondisplay"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.fatwaDate }"
                            @blur="validateField('fatwaDate')" />
                        <label for="icondisplay">Date *</label>
                    </FloatLabel>
                    <small v-if="errors.fatwaDate" class="text-red-500 text-sm mt-1 block">{{ errors.fatwaDate
                        }}</small>
                </div>
                <div class="md:col-span-3">
                    <FloatLabel variant="on">
                        <InputText id="question" v-model="formData.question"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.question }]"
                            @blur="validateField('question')" />
                        <label for="question">Question *</label>
                    </FloatLabel>
                    <small v-if="errors.question" class="text-red-500 text-sm mt-1 block">{{ errors.question
                        }}</small>
                </div>
                <div class="md:col-span-3">
                    <label for="long_description">Answere</label>
                    <div class="mt-3">
                        <Editor v-model="formData.answer" editorStyle="height: 220px"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.answer }" />
                    </div>
                    <small v-if="errors.answer" class="text-red-500 text-sm mt-1 block">{{
                        errors.answer }}</small>
                </div>
            </div>
            <div class="justify-end flex">
                <button type="submit" :disabled="isSubmitting"
                    class="flex items-center gap-2 rounded-full bg-green-700 text-white dark:bg-gray-950 dark:text-gray-100 hover:opacity-90 px-6 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-900/20 dark:focus:ring-gray-50/20 disabled:opacity-50 disabled:cursor-not-allowed">
                    <i class="pi pi-save h-4 w-4" aria-hidden="true"></i>
                    <span>{{ isSubmitting ? (isEditMode ? 'Updating...' : 'Creating...') : (isEditMode ? 'Update' : 'Create') }}</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";

const props = defineProps({
    fatwaData: {
        type: Object,
        default: null
    },
    isEditMode: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['close', 'save'])

const formData = reactive({
    fatwaTitle: '',
    fatwaDate: null,
    category: null,
    scholarName: '',
    question: '',
    answer: ''
});

// Form state
const isSubmitting = ref(false);
const errors = reactive({});

// Options for dropdowns
const categoryOptions = ref([
    { label: 'Fiqh (Jurisprudence)', value: 'fiqh' },
    { label: 'Aqeedah (Creed)', value: 'aqeedah' },
    { label: 'Tafseer (Quran Commentary)', value: 'tafseer' },
    { label: 'Hadith', value: 'hadith' },
    { label: 'Family Issues', value: 'family' },
    { label: 'Business & Finance', value: 'business' },
    { label: 'Social Issues', value: 'social' },
    { label: 'Worship', value: 'worship' },
    { label: 'Other', value: 'other' }
]);


// Validation rules
const validationRules = {
    fatwaTitle: {
        required: true,
        minLength: 3,
        maxLength: 100,
        message: 'Title is required and must be between 3-100 characters'
    },
    fatwaDate: {
        required: true,
        message: 'Date is required'
    },
    category: {
        required: true,
        message: 'Category is required'
    },
    scholarName: {
        required: true,
        minLength: 2,
        maxLength: 100,
        message: 'Scholar name is required and must be between 2-100 characters'
    },
    question: {
        required: true,
        minLength: 10,
        maxLength: 500,
        message: 'Question is required and must be between 10-500 characters'
    },
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
    if (isValid && fieldName === 'fatwaDate') {
        if (!value) {
            isValid = false;
            errorMessage = rule.message;
        }
    }

    // Date not in past validation
    if (isValid && fieldName === 'fatwaDate' && value) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (value < today) {
            isValid = false;
            errorMessage = 'Date cannot be in the past';
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


// Populate form when editing
const populateForm = (fatwa) => {
    if (fatwa) {
        formData.fatwaTitle = fatwa.title || ''
        formData.category = fatwa.category || null
        formData.scholarName = fatwa.scholar || ''
        formData.question = fatwa.question || ''
        formData.answer = fatwa.answer || ''
        formData.fatwaDate = fatwa.date ? new Date(fatwa.date) : null
    }
}

// Watch for changes in fatwaData prop
watch(() => props.fatwaData, (newData) => {
    if (newData && props.isEditMode) {
        populateForm(newData)
    }
}, { immediate: true })

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

        // Emit save event to parent
        emit('save', { ...formData, id: props.fatwaData?.id })

        // Reset form after successful submission
        if (!props.isEditMode) {
            Object.keys(formData).forEach(key => {
                if (typeof formData[key] === 'string') {
                    formData[key] = '';
                } else {
                    formData[key] = null;
                }
            });
        }

        // Clear errors
        Object.keys(errors).forEach(key => delete errors[key]);

        console.log(props.isEditMode ? 'Fatwa updated successfully!' : 'Fatwa created successfully!');

    } catch (error) {
        console.error('Error saving fatwa:', error);
    } finally {
        isSubmitting.value = false;
    }
};


</script>