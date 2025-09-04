<template>
    <div class="w-full py-2">
        <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div>
                    <FloatLabel variant="on">
                        <InputText id="sponsorTypeName" v-model="formData.sponsorTypeName"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.sponsorTypeName }]"
                            @blur="validateField('sponsorTypeName')" />
                        <label for="sponsorTypeName">Sponsor Type Name *</label>
                    </FloatLabel>
                    <small v-if="errors.sponsorTypeName" class="text-red-500 text-sm mt-1 block">{{ errors.sponsorTypeName }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <DatePicker v-model="formData.sponsorTypeDate" showIcon fluid iconDisplay="input"
                            inputId="sponsorTypeDate"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.sponsorTypeDate }"
                            @blur="validateField('sponsorTypeDate')" />
                        <label for="sponsorTypeDate">Sponsor Type Date *</label>
                    </FloatLabel>
                    <small v-if="errors.sponsorTypeDate" class="text-red-500 text-sm mt-1 block">{{ errors.sponsorTypeDate }}</small>
                </div>
                <div class="md:col-span-2">
                    <label for="longDescription">Long Description</label>
                    <div class="mt-3">
                        <Editor v-model="formData.longDescription" editorStyle="height: 220px"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.longDescription }" />
                    </div>
                    <small v-if="errors.longDescription" class="text-red-500 text-sm mt-1 block">{{ errors.longDescription }}</small>
                </div>
            </div>
            <div class="justify-end flex">
                <button type="submit" :disabled="isSubmitting"
                    class="flex items-center gap-2 rounded-full bg-green-700 text-white dark:bg-gray-950 dark:text-gray-100 hover:opacity-90 px-6 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-900/20 dark:focus:ring-gray-50/20 disabled:opacity-50 disabled:cursor-not-allowed">
                    <i class="pi pi-save h-4 w-4" aria-hidden="true"></i>
                    <span>{{ isSubmitting ? (isEditMode ? 'Updating...' : 'Submitting...') : (isEditMode ? 'Update' : 'Submit Form') }}</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from "vue";

const props = defineProps({
    sponsorTypeData: {
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
    sponsorTypeName: '',
    sponsorTypeDate: null,
    longDescription: ''
});

// Form state
const isSubmitting = ref(false);
const errors = reactive({});

// Validation rules
const validationRules = {
    sponsorTypeName: {
        required: true,
        minLength: 2,
        maxLength: 100,
        message: 'Sponsor Type Name is required and must be between 2-100 characters'
    },
    sponsorTypeDate: {
        required: true,
        message: 'Sponsor Type Date is required'
    },
    longDescription: {
        required: false,
        message: 'Long Description is optional'
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
    if (isValid && fieldName === 'sponsorTypeDate') {
        if (!value) {
            isValid = false;
            errorMessage = rule.message;
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
const populateForm = (sponsorType) => {
    if (sponsorType) {
        formData.sponsorTypeName = sponsorType.name || ''
        formData.sponsorTypeDate = sponsorType.createdAt ? new Date(sponsorType.createdAt) : null
        formData.longDescription = sponsorType.content || ''
    }
}

// Watch for changes in sponsorTypeData prop
watch(() => props.sponsorTypeData, (newData) => {
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

        // Emit save event to parent with correct data structure
        const saveData = {
            id: props.sponsorTypeData?.id,
            name: formData.sponsorTypeName,
            content: formData.longDescription,
            createdAt: formData.sponsorTypeDate ? formData.sponsorTypeDate.toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            updatedAt: new Date().toISOString().split('T')[0]
        }
        emit('save', saveData)

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

        console.log(props.isEditMode ? 'Sponsor Type updated successfully!' : 'Sponsor Type created successfully!');

    } catch (error) {
        console.error('Error saving sponsor type:', error);
    } finally {
        isSubmitting.value = false;
    }
};
</script>