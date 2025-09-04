<template>
    <div class="w-full py-3">
        <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 gap-6 mb-5">
                <!-- Form Heading Field -->
                <div>
                    <FloatLabel variant="on">
                        <InputText id="formHeading" v-model="formData.formHeading"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.formHeading }]"
                            @blur="validateField('formHeading')" />
                        <label for="formHeading">Form Heading *</label>
                    </FloatLabel>
                    <small v-if="errors.formHeading" class="text-red-500 text-sm mt-1 block">{{ errors.formHeading }}</small>
                </div>

                <!-- Date Field -->
                <div>
                    <FloatLabel variant="on">
                        <DatePicker v-model="formData.date" showIcon fluid iconDisplay="input"
                            inputId="date_picker"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.date }"
                            @blur="validateField('date')" />
                        <label for="date_picker">Date *</label>
                    </FloatLabel>
                    <small v-if="errors.date" class="text-red-500 text-sm mt-1 block">{{ errors.date }}</small>
                </div>

                <!-- Publish on Website Toggle -->
                <div>
                    <label class="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Publish on Website
                    </label>
                    <ToggleButton v-model="formData.publishOnWebsite" 
                        onIcon="pi pi-check" 
                        offIcon="pi pi-times"
                        onLabel="Publish" 
                        offLabel="Unpublish" 
                        :invalid="errors.publishOnWebsite" 
                        class="w-full sm:w-40" 
                        aria-label="Publish on Website" />
                    <small v-if="errors.publishOnWebsite" class="text-red-500 text-sm mt-1 block">{{ errors.publishOnWebsite }}</small>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end">
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
    sponsorFormData: {
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
    formHeading: '',
    date: null,
    publishOnWebsite: false
});

// Form state
const isSubmitting = ref(false);
const errors = reactive({});

// Validation rules
const validationRules = {
    formHeading: {
        required: true,
        minLength: 3,
        maxLength: 100,
        message: 'Form heading is required and must be between 3-100 characters'
    },
    date: {
        required: true,
        message: 'Date is required'
    },
    publishOnWebsite: {
        required: false,
        message: 'Please specify if this should be published on website'
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
    if (isValid && fieldName === 'date' && !value) {
        isValid = false;
        errorMessage = rule.message;
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
const populateForm = (sponsorForm) => {
    if (sponsorForm) {
        formData.formHeading = sponsorForm.name || ''
        formData.date = sponsorForm.date || null
        formData.publishOnWebsite = sponsorForm.status === 'Yes' || false
    }
}

// Watch for changes in sponsorFormData prop
watch(() => props.sponsorFormData, (newData) => {
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
        emit('save', { 
            id: props.sponsorFormData?.id,
            name: formData.formHeading,
            date: formData.date,
            status: formData.publishOnWebsite ? 'Yes' : 'No'
        })

        // Reset form after successful submission
        if (!props.isEditMode) {
            Object.keys(formData).forEach(key => {
                if (typeof formData[key] === 'string') {
                    formData[key] = '';
                } else if (typeof formData[key] === 'boolean') {
                    formData[key] = false;
                } else {
                    formData[key] = null;
                }
            });
        }

        // Clear errors
        Object.keys(errors).forEach(key => delete errors[key]);

        console.log(props.isEditMode ? 'Sponsor Form updated successfully!' : 'Sponsor Form created successfully!');

    } catch (error) {
        console.error('Error saving Sponsor Form:', error);
    } finally {
        isSubmitting.value = false;
    }
};
</script>