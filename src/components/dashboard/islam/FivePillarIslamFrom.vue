<template>
    <div class="w-full py-2">
        <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div>
                    <FloatLabel variant="on">
                        <InputText id="name" v-model="formData.name"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.name }]"
                            @blur="validateField('name')" />
                        <label for="name">Pillar Name *</label>
                    </FloatLabel>
                    <small v-if="errors.name" class="text-red-500 text-sm mt-1 block">{{ errors.name }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <InputText id="arabicName" v-model="formData.arabicName"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.arabicName }]"
                            @blur="validateField('arabicName')" />
                        <label for="arabicName">Arabic Name *</label>
                    </FloatLabel>
                    <small v-if="errors.arabicName" class="text-red-500 text-sm mt-1 block">{{ errors.arabicName }}</small>
                </div>
                <div class="md:col-span-2">
                    <FloatLabel variant="on">
                        <Textarea id="description" v-model="formData.description" rows="4"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.description }]"
                            @blur="validateField('description')" />
                        <label for="description">Description *</label>
                    </FloatLabel>
                    <small v-if="errors.description" class="text-red-500 text-sm mt-1 block">{{ errors.description }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <Select id="status" v-model="formData.status" fluid
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.status }"
                            @blur="validateField('status')" 
                            :options="statusOptions" 
                            optionLabel="label" 
                            optionValue="value" />
                        <label for="status">Status *</label>
                    </FloatLabel>
                    <small v-if="errors.status" class="text-red-500 text-sm mt-1 block">{{ errors.status }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <InputText id="order" v-model="formData.order" type="number"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.order }]"
                            @blur="validateField('order')" />
                        <label for="order">Display Order *</label>
                    </FloatLabel>
                    <small v-if="errors.order" class="text-red-500 text-sm mt-1 block">{{ errors.order }}</small>
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
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';

const props = defineProps({
    fivePillarIslamData: {
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
    name: '',
    arabicName: '',
    description: '',
    status: null,
    order: ''
});

// Form state
const isSubmitting = ref(false);
const errors = reactive({});

// Options for status dropdown
const statusOptions = ref([
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' }
]);

// Validation rules
const validationRules = {
    name: {
        required: true,
        minLength: 2,
        maxLength: 100,
        message: 'Pillar name is required and must be between 2-100 characters'
    },
    arabicName: {
        required: true,
        minLength: 2,
        maxLength: 100,
        message: 'Arabic name is required and must be between 2-100 characters'
    },
    description: {
        required: true,
        minLength: 10,
        maxLength: 500,
        message: 'Description is required and must be between 10-500 characters'
    },
    status: {
        required: true,
        message: 'Status is required'
    },
    order: {
        required: true,
        min: 1,
        message: 'Display order is required and must be greater than 0'
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

    // Number validation
    if (isValid && fieldName === 'order' && value) {
        const numValue = parseFloat(value);
        if (isNaN(numValue) || numValue < rule.min) {
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
const populateForm = (pillar) => {
    if (pillar) {
        formData.name = pillar.name || ''
        formData.arabicName = pillar.arabicName || ''
        formData.description = pillar.description || ''
        formData.status = pillar.status || null
        formData.order = pillar.order || ''
    }
}

// Watch for changes in fivePillarIslamData prop
watch(() => props.fivePillarIslamData, (newData) => {
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
        emit('save', { ...formData, id: props.fivePillarIslamData?.id })

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

        console.log(props.isEditMode ? 'Pillar updated successfully!' : 'Pillar created successfully!');

    } catch (error) {
        console.error('Error saving pillar:', error);
    } finally {
        isSubmitting.value = false;
    }
};
</script>