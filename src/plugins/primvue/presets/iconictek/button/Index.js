export default {
    root: ({ props, context, parent, instance }) => ({
        class: [
            'relative',

            // Alignments
            'items-center inline-flex text-center align-bottom justify-center',
            { 'flex-col': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label },

            // Sizes & Spacing - Updated with modern spacing
            'leading-normal',
            {
                'px-4 py-2.5': props.size === null,
                'text-sm py-2 px-3': props.size === 'small',
                'text-lg py-3.5 px-6': props.size === 'large'
            },
            { 'gap-2.5': props.label !== null },
            {
                'w-11 px-0 py-2.5': props.label == null && props.icon !== null
            },
            {
                'w-11 px-0 gap-0': instance.hasIcon && !props.label && !props.badge,
                'rounded-full h-11 [&>[data-pc-section=label]]:w-0 [&>[data-pc-section=label]]:invisible': instance.hasIcon && !props.label && !props.badge && props.rounded
            },

            // Shapes - Modern rounded corners
            { 'shadow-lg shadow-black/10 dark:shadow-black/20': props.raised },
            { 'rounded-lg': !props.rounded, 'rounded-full': props.rounded },
            { 'rounded-none first:rounded-l-lg last:rounded-r-lg': parent.instance.$name == 'InputGroup' },

            // Link Button
            { 'text-primary-600 dark:text-primary-400 bg-transparent border-transparent hover:text-primary-700 dark:hover:text-primary-300': props.link },

            // Plain Button
            { 'text-white bg-slate-600 dark:bg-slate-500 border border-slate-600 dark:border-slate-500': props.plain && !props.outlined && !props.text },
            // Plain Text Button
            { 'text-slate-600 dark:text-slate-400': props.plain && props.text },
            // Plain Outlined Button
            { 'text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600': props.plain && props.outlined },

            // Text Button
            { 'bg-transparent border-transparent': props.text && !props.plain },

            // Outlined Button
            { 'bg-transparent border': props.outlined && !props.plain },

            // --- Severity Buttons ---

            // Primary Button
            {
                'text-white dark:text-slate-900': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                'bg-blue-600 dark:bg-blue-500': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                'border border-blue-600 dark:border-blue-500': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain
            },
            // Primary Text Button
            { 'text-blue-600 dark:text-blue-400': props.text && props.severity === null && !props.plain },
            // Primary Outlined Button
            { 'text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400': props.outlined && props.severity === null && !props.plain },

            // Secondary Button
            {
                'text-slate-900 dark:text-slate-100': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                'bg-slate-100 dark:bg-slate-800': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                'border border-slate-200 dark:border-slate-700': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain
            },
            // Secondary Text Button
            { 'text-slate-600 dark:text-slate-400': props.text && props.severity === 'secondary' && !props.plain },
            // Secondary Outlined Button
            { 'text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50': props.outlined && props.severity === 'secondary' && !props.plain },

            // Success Button
            {
                'text-white dark:text-emerald-900': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                'bg-emerald-600 dark:bg-emerald-500': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                'border border-emerald-600 dark:border-emerald-500': props.severity === 'success' && !props.text && !props.outlined && !props.plain
            },
            // Success Text Button
            { 'text-emerald-600 dark:text-emerald-400': props.text && props.severity === 'success' && !props.plain },
            // Success Outlined Button
            { 'text-emerald-600 dark:text-emerald-400 border border-emerald-600 dark:border-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20': props.outlined && props.severity === 'success' && !props.plain },

            // Info Button
            {
                'text-white dark:text-sky-900': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                'bg-sky-600 dark:bg-sky-500': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                'border border-sky-600 dark:border-sky-500': props.severity === 'info' && !props.text && !props.outlined && !props.plain
            },
            // Info Text Button
            { 'text-sky-600 dark:text-sky-400': props.text && props.severity === 'info' && !props.plain },
            // Info Outlined Button
            { 'text-sky-600 dark:text-sky-400 border border-sky-600 dark:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20': props.outlined && props.severity === 'info' && !props.plain },

            // Warning Button
            {
                'text-white dark:text-amber-900': props.severity === 'warn' && !props.text && !props.outlined && !props.plain,
                'bg-amber-600 dark:bg-amber-500': props.severity === 'warn' && !props.text && !props.outlined && !props.plain,
                'border border-amber-600 dark:border-amber-500': props.severity === 'warn' && !props.text && !props.outlined && !props.plain
            },
            // Warning Text Button
            { 'text-amber-600 dark:text-amber-400': props.text && props.severity === 'warn' && !props.plain },
            // Warning Outlined Button
            { 'text-amber-600 dark:text-amber-400 border border-amber-600 dark:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20': props.outlined && props.severity === 'warn' && !props.plain },

            // Help Button
            {
                'text-white dark:text-violet-900': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                'bg-violet-600 dark:bg-violet-500': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                'border border-violet-600 dark:border-violet-500': props.severity === 'help' && !props.text && !props.outlined && !props.plain
            },
            // Help Text Button
            { 'text-violet-600 dark:text-violet-400': props.text && props.severity === 'help' && !props.plain },
            // Help Outlined Button
            { 'text-violet-600 dark:text-violet-400 border border-violet-600 dark:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20': props.outlined && props.severity === 'help' && !props.plain },

            // Danger Button
            {
                'text-white dark:text-red-900': props.severity === 'danger' && !props.text && !props.outlined && !props.plain,
                'bg-red-600 dark:bg-red-500': props.severity === 'danger' && !props.text && !props.outlined && !props.plain,
                'border border-red-600 dark:border-red-500': props.severity === 'danger' && !props.text && !props.outlined && !props.plain
            },
            // Danger Text Button
            { 'text-red-600 dark:text-red-400': props.text && props.severity === 'danger' && !props.plain },
            // Danger Outlined Button
            { 'text-red-600 dark:text-red-400 border border-red-600 dark:border-red-400 hover:bg-red-50 dark:hover:bg-red-900/20': props.outlined && props.severity === 'danger' && !props.plain },

            // Contrast Button
            {
                'text-white dark:text-slate-900': props.severity === 'contrast' && !props.text && !props.outlined && !props.plain,
                'bg-slate-900 dark:bg-white': props.severity === 'contrast' && !props.text && !props.outlined && !props.plain,
                'border border-slate-900 dark:border-white': props.severity === 'contrast' && !props.text && !props.outlined && !props.plain
            },
            // Contrast Text Button
            { 'text-slate-900 dark:text-white': props.text && props.severity === 'contrast' && !props.plain },
            // Contrast Outlined Button
            { 'text-slate-900 dark:text-white border border-slate-900 dark:border-white hover:bg-slate-50 dark:hover:bg-slate-800/50': props.outlined && props.severity === 'contrast' && !props.plain },

            // --- Severity Button States ---
            'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-offset-2',

            // Link
            { 'focus:ring-blue-500 dark:focus:ring-blue-400': props.link },

            // Plain
            { 'hover:bg-slate-700 dark:hover:bg-slate-400 hover:border-slate-700 dark:hover:border-slate-400': props.plain && !props.outlined && !props.text },
            // Text & Outlined Button
            { 'hover:bg-slate-100 dark:hover:bg-slate-800/50': props.plain && (props.text || props.outlined) },

            // Primary
            { 'hover:bg-blue-700 dark:hover:bg-blue-400 hover:border-blue-700 dark:hover:border-blue-400': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-blue-500 dark:focus:ring-blue-400': props.severity === null },
            // Text & Outlined Button
            { 'hover:bg-blue-50 dark:hover:bg-blue-900/20': (props.text || props.outlined) && props.severity === null && !props.plain },

            // Secondary
            { 'hover:bg-slate-200 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-slate-500 dark:focus:ring-slate-400': props.severity === 'secondary' },
            // Text & Outlined Button
            { 'hover:bg-slate-100 dark:hover:bg-slate-800/50': (props.text || props.outlined) && props.severity === 'secondary' && !props.plain },

            // Success
            { 'hover:bg-emerald-700 dark:hover:bg-emerald-400 hover:border-emerald-700 dark:hover:border-emerald-400': props.severity === 'success' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-emerald-500 dark:focus:ring-emerald-400': props.severity === 'success' },
            // Text & Outlined Button
            { 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20': (props.text || props.outlined) && props.severity === 'success' && !props.plain },

            // Info
            { 'hover:bg-sky-700 dark:hover:bg-sky-400 hover:border-sky-700 dark:hover:border-sky-400': props.severity === 'info' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-sky-500 dark:focus:ring-sky-400': props.severity === 'info' },
            // Text & Outlined Button
            { 'hover:bg-sky-50 dark:hover:bg-sky-900/20': (props.text || props.outlined) && props.severity === 'info' && !props.plain },

            // Warning
            { 'hover:bg-amber-700 dark:hover:bg-amber-400 hover:border-amber-700 dark:hover:border-amber-400': props.severity === 'warn' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-amber-500 dark:focus:ring-amber-400': props.severity === 'warn' },
            // Text & Outlined Button
            { 'hover:bg-amber-50 dark:hover:bg-amber-900/20': (props.text || props.outlined) && props.severity === 'warn' && !props.plain },

            // Help
            { 'hover:bg-violet-700 dark:hover:bg-violet-400 hover:border-violet-700 dark:hover:border-violet-400': props.severity === 'help' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-violet-500 dark:focus:ring-violet-400': props.severity === 'help' },
            // Text & Outlined Button
            { 'hover:bg-violet-50 dark:hover:bg-violet-900/20': (props.text || props.outlined) && props.severity === 'help' && !props.plain },

            // Danger
            { 'hover:bg-red-700 dark:hover:bg-red-400 hover:border-red-700 dark:hover:border-red-400': props.severity === 'danger' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-red-500 dark:focus:ring-red-400': props.severity === 'danger' },
            // Text & Outlined Button
            { 'hover:bg-red-50 dark:hover:bg-red-900/20': (props.text || props.outlined) && props.severity === 'danger' && !props.plain },

            // Contrast
            { 'hover:bg-slate-800 dark:hover:bg-slate-100 hover:border-slate-800 dark:hover:border-slate-100': props.severity === 'contrast' && !props.text && !props.outlined && !props.plain },
            { 'focus:ring-slate-500 dark:focus:ring-slate-400': props.severity === 'contrast' },
            // Text & Outlined Button
            { 'hover:bg-slate-100 dark:hover:bg-slate-800/50': (props.text || props.outlined) && props.severity === 'contrast' && !props.plain },

            // Disabled
            { 'opacity-50 pointer-events-none cursor-not-allowed': context.disabled },

            // Transitions - Modern smooth transitions
            'transition-all duration-200 ease-in-out',

            // Misc - Enhanced accessibility and interaction
            'cursor-pointer overflow-hidden select-none touch-manipulation',

            // Badge - Updated sizing
            '[&>[data-pc-name=badge]]:min-w-5 [&>[data-pc-name=badge]]:h-5 [&>[data-pc-name=badge]]:leading-5 [&>[data-pc-name=badge]]:text-xs'
        ]
    }),
    label: ({ props }) => ({
        class: [
            'duration-200',
            'font-semibold',
            'text-sm',
            {
                'hover:underline': props.link
            },
            { 'flex-1': props.label !== null, 'invisible w-0': props.label == null }
        ]
    }),
    icon: ({ props }) => ({
        class: [
            'text-base leading-4',
            'mx-0',
            'shrink-0',
            {
                '': props.iconPos == 'left' && props.label != null,
                'order-1': props.iconPos == 'right' && props.label != null,
                'order-2': props.iconPos == 'bottom' && props.label != null
            }
        ]
    }),
    loadingIcon: ({ props }) => ({
        class: [
            'h-4 w-4',
            'mx-0',
            'shrink-0',
            {
                'mr-2': props.iconPos == 'left' && props.label != null,
                'ml-2 order-1': props.iconPos == 'right' && props.label != null,
                'mb-2': props.iconPos == 'top' && props.label != null,
                'mt-2': props.iconPos == 'bottom' && props.label != null
            },
            'animate-spin'
        ]
    }),
    badge: ({ props }) => ({
        class: [{ 'ml-2 w-5 h-5 leading-none flex items-center justify-center text-xs font-medium': props.badge }]
    })
};