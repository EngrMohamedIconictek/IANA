<template>
    <div class="w-full bg-white p-6 dark:bg-slate-800 rounded-md shadow">
        <form @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div>
                    <FloatLabel variant="on">
                        <Select id="ianaAnnualBanquet" v-model="formData.ianaAnnualBanquet" fluid
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.ianaAnnualBanquet }"
                            @blur="validateField('ianaAnnualBanquet')" 
                            :options="ianaAnnualBanquetOptions" 
                            optionLabel="label" 
                            optionValue="value" />
                        <label for="ianaAnnualBanquet">Select Sponsorship *</label>
                    </FloatLabel>
                    <small v-if="errors.ianaAnnualBanquet" class="text-red-500 text-sm mt-1 block">{{ errors.ianaAnnualBanquet }}</small>
                </div>
                <div class="">
                    <FloatLabel variant="on">
                        <InputText id="businessName" v-model="formData.businessName"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.businessName }]"
                            @blur="validateField('businessName')" />
                        <label for="businessName">Business / Organization Name *</label>
                    </FloatLabel>
                    <small v-if="errors.businessName" class="text-red-500 text-sm mt-1 block">{{ errors.businessName }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <InputText id="email" v-model="formData.email" type="email"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.email }]"
                            @blur="validateField('email')" />
                        <label for="email">Email *</label>
                    </FloatLabel>
                    <small v-if="errors.email" class="text-red-500 text-sm mt-1 block">{{ errors.email }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <InputText id="website" v-model="formData.website" type="url"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.website }]"
                            @blur="validateField('website')" />
                        <label for="website">Website</label>
                    </FloatLabel>
                    <small v-if="errors.website" class="text-red-500 text-sm mt-1 block">{{ errors.website }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <InputText id="phone" v-model="formData.phone"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.phone }]"
                            @blur="validateField('phone')" />
                        <label for="phone">Phone *</label>
                    </FloatLabel>
                    <small v-if="errors.phone" class="text-red-500 text-sm mt-1 block">{{ errors.phone }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <InputText id="sponsorshipAmount" v-model="formData.sponsorshipAmount" type="number"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.sponsorshipAmount }]"
                            @blur="validateField('sponsorshipAmount')" />
                        <label for="sponsorshipAmount">Sponsorship Amount *</label>
                    </FloatLabel>
                    <small v-if="errors.sponsorshipAmount" class="text-red-500 text-sm mt-1 block">{{ errors.sponsorshipAmount }}</small>
                </div>
                <div >
                    <FloatLabel variant="on">
                        <InputText id="address" v-model="formData.address"
                            :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.address }]"
                            @blur="validateField('address')" />
                        <label for="address">Address *</label>
                    </FloatLabel>
                    <small v-if="errors.address" class="text-red-500 text-sm mt-1 block">{{ errors.address }}</small>
                </div>
                <div>
                    <FloatLabel variant="on">
                        <Select id="sponsorshipLevel" v-model="formData.sponsorshipLevel" fluid
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.sponsorshipLevel }"
                            @blur="validateField('sponsorshipLevel')" 
                            :options="sponsorshipLevelOptions" 
                            optionLabel="label" 
                            optionValue="value" />
                        <label for="sponsorshipLevel">Select Sponsorship Level *</label>
                    </FloatLabel>
                    <small v-if="errors.sponsorshipLevel" class="text-red-500 text-sm mt-1 block">{{ errors.sponsorshipLevel }}</small>
                </div>
                
                <div class="md:col-span-2">
                    <label for="logoUpload">Logo Upload</label>
                    <div class="mt-2">
                        <FileUpload name="logoUpload" url="/api/upload" @upload="onLogoUpload($event)"
                            :multiple="false" accept="image/*" :maxFileSize="2000000"
                            :class="{ 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.logoUpload }">
                            <template #empty>
                                <span>Drag and drop logo file here to upload.</span>
                            </template>
                        </FileUpload>
                    </div>
                    <small v-if="errors.logoUpload" class="text-red-500 text-sm mt-1 block">{{ errors.logoUpload }}</small>
                </div>
                <!-- Attendees Section -->
                <div class="md:col-span-2">
                    <div v-for="(attendee, index) in formData.attendees" :key="index" class="mb-4 ">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <FloatLabel variant="on">
                                    <InputText 
                                        :id="`attendeeName_${index}`" 
                                        v-model="attendee.name"
                                        :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors[`attendee_${index}`] }]"
                                        @blur="validateAttendeeField(index)" />
                                    <label :for="`attendeeName_${index}`">Attendee Name {{ index + 1 }}</label>
                                </FloatLabel>
                                <small v-if="errors[`attendee_${index}`]" class="text-red-500 text-sm mt-1 block">{{ errors[`attendee_${index}`] }}</small>
                            </div>
                            <div class="flex items-end">
                                <button 
                                    type="button"
                                    @click="removeAttendee(index)"
                                    :disabled="formData.attendees.length === 1"
                                    class="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center gap-2">
                                    <i class="pi pi-trash h-4 w-4" aria-hidden="true"></i>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-4">
                        <button 
                            type="button"
                            @click="addAttendee"
                            class="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 flex items-center gap-2">
                            <i class="pi pi-plus h-4 w-4" aria-hidden="true"></i>
                            Add More Attendee
                        </button>
                    </div>
                </div>
                
                <!-- Payment Method Section -->
                <div class="md:col-span-2">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payment Method *</h3>
                    <div class="flex items-center flex-wrap space-x-8">
                        <div class="flex items-center space-x-2">
                            <RadioButton 
                                v-model="formData.paymentMethod" 
                                inputId="creditCard" 
                                value="creditCard"
                                :class="{ 'border-red-500': errors.paymentMethod }" />
                            <label for="creditCard" class="text-sm font-medium text-gray-900 dark:text-white">
                                Payment By Credit Card
                            </label>
                        </div>
                        
                        <div class="flex items-center space-x-2">
                            <RadioButton 
                                v-model="formData.paymentMethod" 
                                inputId="cheque" 
                                value="cheque"
                                :class="{ 'border-red-500': errors.paymentMethod }" />
                            <label for="cheque" class="text-sm font-medium text-gray-900 dark:text-white">
                                Payment By Cheque
                            </label>
                        </div>
                    </div>
                    <small v-if="errors.paymentMethod" class="text-red-500 text-sm mt-1 block">{{ errors.paymentMethod }}</small>
                    
                    <!-- Credit Card Fields -->
                    <div v-if="formData.paymentMethod === 'creditCard'" class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="md:col-span-2">
                            <FloatLabel variant="on">
                                <InputText 
                                    id="cardNumber" 
                                    v-model="formData.cardNumber"
                                    :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.cardNumber }]"
                                    @blur="validateField('cardNumber')" />
                                <label for="cardNumber">Card Number *</label>
                            </FloatLabel>
                            <small v-if="errors.cardNumber" class="text-red-500 text-sm mt-1 block">{{ errors.cardNumber }}</small>
                        </div>
                        <div class="md:col-span-2">
                            <FloatLabel variant="on">
                                <InputText 
                                    id="cardHolderName" 
                                    v-model="formData.cardHolderName"
                                    :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.cardHolderName }]"
                                    @blur="validateField('cardHolderName')" />
                                <label for="cardHolderName">Card Holder Name *</label>
                            </FloatLabel>
                            <small v-if="errors.cardHolderName" class="text-red-500 text-sm mt-1 block">{{ errors.cardHolderName }}</small>
                        </div>
                        <div>
                            <FloatLabel variant="on">
                                <InputText 
                                    id="expiryDate" 
                                    v-model="formData.expiryDate"
                                    placeholder="MM/YY"
                                    :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.expiryDate }]"
                                    @blur="validateField('expiryDate')" />
                                <label for="expiryDate">Expiry Date (MM/YY) *</label>
                            </FloatLabel>
                            <small v-if="errors.expiryDate" class="text-red-500 text-sm mt-1 block">{{ errors.expiryDate }}</small>
                        </div>
                        <div>
                            <FloatLabel variant="on">
                                <InputText 
                                    id="cvv" 
                                    v-model="formData.cvv"
                                    :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.cvv }]"
                                    @blur="validateField('cvv')" />
                                <label for="cvv">CVV *</label>
                            </FloatLabel>
                            <small v-if="errors.cvv" class="text-red-500 text-sm mt-1 block">{{ errors.cvv }}</small>
                        </div>
                    </div>
                    
                    <!-- Cheque Fields -->
                    <div v-if="formData.paymentMethod === 'cheque'" class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="md:col-span-2">
                            <FloatLabel variant="on">
                                <InputText 
                                    id="chequeNumber" 
                                    v-model="formData.chequeNumber"
                                    :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.chequeNumber }]"
                                    @blur="validateField('chequeNumber')" />
                                <label for="chequeNumber">Cheque Number *</label>
                            </FloatLabel>
                            <small v-if="errors.chequeNumber" class="text-red-500 text-sm mt-1 block">{{ errors.chequeNumber }}</small>
                        </div>
                        <div class="md:col-span-2">
                            <FloatLabel variant="on">
                                <InputText 
                                    id="bankName" 
                                    v-model="formData.bankName"
                                    :class="['w-full', { 'border-red-500 focus:border-red-500 focus:ring-red-500': errors.bankName }]"
                                    @blur="validateField('bankName')" />
                                <label for="bankName">Bank Name *</label>
                            </FloatLabel>
                            <small v-if="errors.bankName" class="text-red-500 text-sm mt-1 block">{{ errors.bankName }}</small>
                        </div>
                    </div>
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
    sponsorData: {
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
    businessName: '',
    email: '',
    website: '',
    phone: '',
    address: '',
    sponsorshipLevel: null,
    sponsorshipAmount: '',
    ianaAnnualBanquet: null,
    logoUpload: null,
    attendees: [{ name: '' }], // Initialize with one empty attendee
    paymentMethod: null,
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
    chequeNumber: '',
    bankName: ''
});

// Form state
const isSubmitting = ref(false);
const errors = reactive({});

// Options for sponsorship level dropdown
const sponsorshipLevelOptions = ref([
    { label: 'Diamond Level', value: 'diamond' },
    { label: 'Gold Level', value: 'gold' },
    { label: 'MN-members', value: 'mn_members' },
]);

// Options for IANA Annual Banquet dropdown
const ianaAnnualBanquetOptions = ref([
    { label: 'IANA Annual Banquet 2019', value: 'iana_annual_banquet_2019' }
]);

// Validation rules
const validationRules = {
    businessName: {
        required: true,
        minLength: 2,
        maxLength: 100,
        message: 'Business/Organization name is required and must be between 2-100 characters'
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Valid email address is required'
    },
    website: {
        pattern: /^https?:\/\/.+/,
        message: 'Website must be a valid URL starting with http:// or https://'
    },
    phone: {
        required: true,
        minLength: 10,
        maxLength: 15,
        message: 'Phone number is required and must be between 10-15 characters'
    },
    address: {
        required: true,
        minLength: 10,
        maxLength: 200,
        message: 'Address is required and must be between 10-200 characters'
    },
    sponsorshipLevel: {
        required: true,
        message: 'Sponsorship level is required'
    },
    sponsorshipAmount: {
        required: true,
        min: 1,
        message: 'Sponsorship amount is required and must be greater than 0'
    },
    paymentMethod: {
        required: true,
        message: 'Payment method is required'
    },
    cardNumber: {
        required: true,
        minLength: 13,
        maxLength: 19,
        pattern: /^[0-9\s-]+$/,
        message: 'Card number is required and must be between 13-19 digits'
    },
    cardHolderName: {
        required: true,
        minLength: 2,
        maxLength: 100,
        message: 'Card holder name is required and must be between 2-100 characters'
    },
    expiryDate: {
        required: true,
        pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
        message: 'Expiry date is required and must be in MM/YY format'
    },
    cvv: {
        required: true,
        minLength: 3,
        maxLength: 4,
        pattern: /^[0-9]+$/,
        message: 'CVV is required and must be 3-4 digits'
    },
    chequeNumber: {
        required: true,
        minLength: 1,
        maxLength: 50,
        message: 'Cheque number is required and must be between 1-50 characters'
    },
    bankName: {
        required: true,
        minLength: 2,
        maxLength: 100,
        message: 'Bank name is required and must be between 2-100 characters'
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

    // Email pattern validation
    if (isValid && fieldName === 'email' && value) {
        if (!rule.pattern.test(value)) {
            isValid = false;
            errorMessage = rule.message;
        }
    }

    // Website pattern validation
    if (isValid && fieldName === 'website' && value) {
        if (!rule.pattern.test(value)) {
            isValid = false;
            errorMessage = rule.message;
        }
    }

    // Number validation
    if (isValid && fieldName === 'sponsorshipAmount' && value) {
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

    // Validate payment method specific fields
    if (formData.paymentMethod === 'creditCard') {
        validateField('cardNumber');
        validateField('cardHolderName');
        validateField('expiryDate');
        validateField('cvv');
    } else if (formData.paymentMethod === 'cheque') {
        validateField('chequeNumber');
        validateField('bankName');
    }

    // Validate attendees
    formData.attendees.forEach((attendee, index) => {
        validateAttendeeField(index);
    });

    // Check if form is valid
    return Object.keys(errors).length === 0;
};

// Populate form when editing
const populateForm = (sponsor) => {
    if (sponsor) {
        formData.businessName = sponsor.businessName || ''
        formData.email = sponsor.email || ''
        formData.website = sponsor.website || ''
        formData.phone = sponsor.phone || ''
        formData.address = sponsor.address || ''
        formData.sponsorshipLevel = sponsor.sponsorshipLevel || null
        formData.sponsorshipAmount = sponsor.sponsorshipAmount || ''
        formData.ianaAnnualBanquet = sponsor.ianaAnnualBanquet || null
        formData.logoUpload = sponsor.logoUpload || null
        formData.attendees = sponsor.attendees && sponsor.attendees.length > 0 
            ? sponsor.attendees.map(attendee => ({ name: attendee.name || '' }))
            : [{ name: '' }]
        formData.paymentMethod = sponsor.paymentMethod || null
        formData.cardNumber = sponsor.cardNumber || ''
        formData.cardHolderName = sponsor.cardHolderName || ''
        formData.expiryDate = sponsor.expiryDate || ''
        formData.cvv = sponsor.cvv || ''
        formData.chequeNumber = sponsor.chequeNumber || ''
        formData.bankName = sponsor.bankName || ''
    }
}

// Watch for changes in sponsorData prop
watch(() => props.sponsorData, (newData) => {
    if (newData && props.isEditMode) {
        populateForm(newData)
    }
}, { immediate: true })

// File upload handler
const onLogoUpload = (event) => {
    const files = event.files;
    if (files && files.length > 0) {
        formData.logoUpload = files[0];
        validateField('logoUpload');
    }
};

// Attendee management methods
const addAttendee = () => {
    formData.attendees.push({ name: '' });
};

const removeAttendee = (index) => {
    if (formData.attendees.length > 1) {
        formData.attendees.splice(index, 1);
        // Clear any validation errors for removed attendee
        delete errors[`attendee_${index}`];
    }
};

// Validate individual attendee field
const validateAttendeeField = (index) => {
    const attendee = formData.attendees[index];
    const fieldKey = `attendee_${index}`;
    
    if (!attendee.name || attendee.name.trim() === '') {
        errors[fieldKey] = 'Attendee name is required';
    } else if (attendee.name.length < 2) {
        errors[fieldKey] = 'Attendee name must be at least 2 characters';
    } else if (attendee.name.length > 100) {
        errors[fieldKey] = 'Attendee name must be less than 100 characters';
    } else {
        delete errors[fieldKey];
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

        // Emit save event to parent
        emit('save', { ...formData, id: props.sponsorData?.id })

        // Reset form after successful submission
        if (!props.isEditMode) {
            Object.keys(formData).forEach(key => {
                if (key === 'attendees') {
                    formData[key] = [{ name: '' }];
                } else if (typeof formData[key] === 'string') {
                    formData[key] = '';
                } else {
                    formData[key] = null;
                }
            });
        }

        // Clear errors
        Object.keys(errors).forEach(key => delete errors[key]);

        console.log(props.isEditMode ? 'Sponsor updated successfully!' : 'Sponsor created successfully!');

    } catch (error) {
        console.error('Error saving sponsor:', error);
    } finally {
        isSubmitting.value = false;
    }
};
</script>