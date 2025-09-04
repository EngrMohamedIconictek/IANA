<template>
    <div class="w-full py-2">
        <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div class="md:col-span-2">
                    <FloatLabel variant="on">
                        <InputText id="categoryName" v-model="formData.categoryName"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.categoryName }]"
                            :readonly="isViewMode"
                            @blur="validateField('categoryName')" />
                        <label for="categoryName">Category Name *</label>
                    </FloatLabel>
                    <small v-if="errors.categoryName" class="text-red-500 text-sm mt-1 block">{{ errors.categoryName
                        }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <Select id="language" v-model="formData.language" fluid
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.language }"
                            :disabled="isViewMode"
                            @blur="validateField('language')" 
                            :options="languageOptions" 
                            optionLabel="label" 
                            optionValue="value" />
                        <label for="language">Language *</label>
                    </FloatLabel>
                    <small v-if="errors.language" class="text-red-500 text-sm mt-1 block">{{ errors.language }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <Select id="status" v-model="formData.status" fluid
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.status }"
                            :disabled="isViewMode"
                            @blur="validateField('status')" 
                            :options="statusOptions" 
                            optionLabel="label" 
                            optionValue="value" />
                        <label for="status">Status *</label>
                    </FloatLabel>
                    <small v-if="errors.status" class="text-red-500 text-sm mt-1 block">{{ errors.status }}</small>
                </div>
               
            </div>
            <div class="justify-end flex gap-3">
                <button v-if="isViewMode" type="button" @click="emit('close')"
                    class="flex items-center gap-2 rounded-full bg-gray-600 text-white dark:bg-gray-700 dark:text-gray-100 hover:opacity-90 px-6 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-900/20 dark:focus:ring-gray-50/20">
                    <i class="pi pi-times h-4 w-4" aria-hidden="true"></i>
                    <span>Close</span>
                </button>
                <button v-else type="submit" :disabled="isSubmitting"
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
    },
    isViewMode: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['close', 'save'])

const formData = reactive({
    categoryName: '',
    language: null,
    status: null
});

// Form state
const isSubmitting = ref(false);
const errors = reactive({});

// Options for dropdowns
const languageOptions = ref([
    { label: 'English', value: 'english' },
    { label: 'Arabic', value: 'arabic' }
]);

const statusOptions = ref([
    { label: 'Active', value: 'active' },
    { label: 'In-Active', value: 'inactive' }
]);

// Validation rules
const validationRules = {
    categoryName: {
        required: true,
        minLength: 2,
        maxLength: 100,
        message: 'Category name is required and must be between 2-100 characters'
    },
    language: {
        required: true,
        message: 'Language is required'
    },
    status: {
        required: true,
        message: 'Status is required'
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
    if (isValid && fieldName === 'fatwaDate') {
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


// Populate form when editing or viewing
const populateForm = (category) => {
    if (category) {
        formData.categoryName = category.name || ''
        formData.language = category.language || null
        formData.status = category.status || null
    }
}

// Watch for changes in fatwaData prop
watch(() => props.fatwaData, (newData) => {
    if (newData && (props.isEditMode || props.isViewMode)) {
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

        console.log(props.isEditMode ? 'Category updated successfully!' : 'Category created successfully!');

    } catch (error) {
        console.error('Error saving category:', error);
    } finally {
        isSubmitting.value = false;
    }
};


</script>