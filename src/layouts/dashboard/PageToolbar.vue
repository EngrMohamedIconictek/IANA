<template>
  <section class="w-full">
    <!-- Container -->
    <div
      class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between  pb-3 mb-4">
      <div class="min-w-0">
        <h1 class="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 truncate">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-sm text-gray-500 dark:text-gray-400 truncate">
          {{ subtitle }}
        </p>
      </div>

      <!-- Right: Actions -->
      <div class="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:gap-3 w-full sm:w-auto">
        <div class="flex flex-wrap items-center gap-2">
          <!-- Search -->
          <div v-if="showSearch" class="relative w-full sm:w-64">
            <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <i class="pi pi-search text-gray-400 h-5 w-5" aria-hidden="true"></i>
            </span>
            <input v-model="searchTextLocal" @input="onSearch" :placeholder="searchPlaceholder"
              class="block w-full rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-10 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-900/10 dark:focus:ring-gray-50/20"
              type="text" name="search" aria-label="Search" />
          </div>
          

          <!-- Excel Button -->
          <button v-if="showExcel" type="button" @click="$emit('export-excel')"
             class="flex items-center gap-2 rounded-full bg-sky-500/90 text-white dark:bg-gray-800 dark:text-gray-100 hover:opacity-90 px-6 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-900/20 dark:focus:ring-gray-50/20">
            <i class="pi pi-file-excel h-4 w-4" aria-hidden="true"></i>
            <span>Excel</span>
          </button>

          <!-- View Button -->
          <button v-if="showView" type="button" @click="$emit('view')"
            class="flex items-center gap-2 rounded-full bg-green-600 text-white dark:bg-gray-800 dark:text-gray-100 hover:opacity-90 px-6 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-900/20 dark:focus:ring-gray-50/20">
            <i class="pi pi-eye h-4 w-4" aria-hidden="true"></i>
            <span>View</span>
          </button>
          
          <!-- Add Button -->
          <button v-if="showAdd" type="button" @click="handleAdd"
            class="flex items-center gap-2 rounded-full bg-green-700 text-white dark:bg-gray-800 dark:text-gray-100 hover:opacity-90 px-6 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-900/20 dark:focus:ring-gray-50/20">
            <i class="pi pi-plus h-4 w-4" aria-hidden="true"></i>
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="$slots.default">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  title: { type: String, default: 'Page Title' },
  subtitle: { type: String, default: '' },
  modelValue: { type: String, default: '' },
  searchPlaceholder: { type: String, default: 'Search…' },
  showSearch: { type: Boolean, default: true },
  showView: { type: Boolean, default: true },
  showExcel: { type: Boolean, default: true },
  showAdd: { type: Boolean, default: true },
  createRoute: { type: String, default: '/create' },
  useModal: { type: Boolean, default: false }
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'add'): void
  (e: 'view'): void
  (e: 'export-excel'): void
  (e: 'search', value: string): void
}>()

const searchTextLocal = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    if (val !== searchTextLocal.value) searchTextLocal.value = val
  }
)

function onSearch() {
  emit('update:modelValue', searchTextLocal.value)
  emit('search', searchTextLocal.value)
}

function handleAdd() {
  emit('add')
  if (!props.useModal) {
    router.push(props.createRoute)
  }
}
</script>
