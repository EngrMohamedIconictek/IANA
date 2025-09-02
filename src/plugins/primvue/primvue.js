import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import ProgressSpinner from 'primevue/progressspinner';
import RadioButton from 'primevue/radiobutton';
import Tag from 'primevue/tag';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import MultiSelect from 'primevue/multiselect';
import Tooltip from 'primevue/tooltip';
import Panel from 'primevue/panel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import DatePicker from 'primevue/datepicker';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Breadcrumb from 'primevue/breadcrumb';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import OverlayPanel from 'primevue/overlaypanel';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Select from 'primevue/select';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';


import PrimeVue from 'primevue/config';

import Sidebar from 'primevue/sidebar';

import PrimeTailwind from './presets/iconictek';
import Aura from '@primeuix/themes/aura';

import "primeicons/primeicons.css";

const primeVue = {
    init: async function (app) {

        let options = {
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: '.dark', 
                }
            },
            unstyled: false,
            pt: PrimeTailwind,
            ripple: true,
            zIndex: {
                modal: 1100,
                overlay: 9999,
                menu: 1000,
                tooltip: 1100
            },
            ptOptions: {
                mergeSections: true,
                global: {
                    css: {
                        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    },
                },
            },
        }
        app.use(PrimeVue, options);

        app.component('Tab', Tab);
        app.component('Tabs', Tabs);
        app.component('TabList', TabList);
        app.component('TabPanel', TabPanel);
        app.component('TabPanels', TabPanels);
        app.component('Button', Button);
        app.component('Dialog', Dialog);
        app.component('AutoComplete', AutoComplete);
        app.component('ProgressSpinner', ProgressSpinner);
        app.component('Accordion', Accordion);
        app.component('AccordionPanel', AccordionPanel);
        app.component('AccordionHeader', AccordionHeader);
        app.component('AccordionContent', AccordionContent);
        app.component('MultiSelect', MultiSelect);
        app.component('RadioButton', RadioButton);
        app.component('Panel', Panel);
        app.component('DataTable', DataTable);
        app.component('Column', Column);
        app.component('DatePicker', DatePicker);
        app.component('InputText', InputText);
        app.component('InputNumber', InputNumber);
        app.component('Breadcrumb', Breadcrumb);
        app.component('ConfirmDialog', ConfirmDialog);
        app.component('Textarea', Textarea);
        app.component('ToggleSwitch', ToggleSwitch);
        app.component('OverlayPanel', OverlayPanel);
        app.component('Card', Card);
        app.component('Checkbox', Checkbox);
        app.component('Sidebar', Sidebar);
        app.component('Select', Select);
        app.component('Toast', Toast);
        app.component('InputGroup', InputGroup);
        app.component('InputGroupAddon', InputGroupAddon);
        app.component('Tag', Tag);


        app.use(ToastService);
        app.use(ConfirmationService);

        app.directive('tooltip', Tooltip);
    }
}

export default primeVue;