<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl w-full space-y-8 text-center">
      <!-- Error Code -->
      <div class="relative">
        <h1
          class="text-9xl sm:text-[12rem] lg:text-[16rem] font-black text-transparent bg-gradient-to-r from-[#3E642D] to-[#2d4a1f] bg-clip-text drop-shadow-lg animate-pulse">
          404
        </h1>
        <div
          class="absolute inset-0 text-9xl sm:text-[12rem] lg:text-[16rem] font-black text-[#3E642D] dark:text-slate-700 opacity-20 -z-10">
          404
        </div>
      </div>

      <!-- Error Message -->
      <div class="space-y-4">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Oops! Page Not Found
        </h2>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The page you're looking for seems to have gone on a journey. Don't worry, we'll help you find your way back to
          IANA.
        </p>
      </div>

      <!-- Search Box -->
      <div class="max-w-md mx-auto">
        <div class="relative">
          <input v-model="searchQuery" type="text" placeholder="Search IANA website..."
            class="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border-2 border-[#3E642D] rounded-lg focus:outline-none focus:border-[#3E642D] focus:ring-2 focus:ring-[#3E642D]/20 dark:bg-slate-800 dark:text-white dark:border-slate-600 dark:focus:border-[#3E642D]"
            @keyup.enter="performSearch">
          <i class="iconoir-search absolute left-4 top-1/2 transform -translate-y-1/2 text-[#3E642D] text-xl"></i>
          <button @click="performSearch"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#3E642D] hover:bg-[#2d4a1f] text-white px-4 py-1.5 rounded-md transition-colors duration-200">
            Search
          </button>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
        <!-- Home -->
        <router-link to="/"
          class="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-slate-700">
          <div
            class="text-[#3E642D] dark:text-[#3E642D] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            <i class="iconoir-home"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">Home</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">Return to the homepage</p>
        </router-link>

        <!-- Services -->
        <router-link to="/services"
          class="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-slate-700">
          <div
            class="text-[#3E642D] dark:text-[#3E642D] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            <i class="iconoir-headset-help"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">Services</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">Explore our services</p>
        </router-link>

        <!-- Contact -->
        <router-link to="/contactus"
          class="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-slate-700">
          <div
            class="text-[#3E642D] dark:text-[#3E642D] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            <i class="iconoir-phone"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">Contact Us</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">Get in touch with us</p>
        </router-link>
      </div>

      <!-- IANA Logo or Branding -->
      <div class="mt-12">
        <div class="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300">
          <img src="/logo.png" alt="IANA Logo" class="h-8 w-auto" />
          <span class="text-lg font-medium">Islamic Association of North America</span>
        </div>
      </div>

      <!-- Back Button -->
      <div class="my-8">
        <button @click="goBack"
          class="inline-flex items-center px-6 py-3 bg-[#3E642D] hover:bg-[#2d4a1f] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <i class="iconoir-arrow-left mr-2"></i>
          Go Back
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => {
  document.title = 'Page Not Found - 404 | IANA'
})

const router = useRouter()
const searchQuery = ref('')


const performSearch = () => {
  if (searchQuery.value.trim()) {
    // Try to find matching routes first
    const query = searchQuery.value.toLowerCase().trim()
    const matchingRoute = popularLinks.find(link =>
      link.title.toLowerCase().includes(query)
    )

    if (matchingRoute) {
      router.push(matchingRoute.path)
    } else {
      router.push({ path: '/', query: { search: searchQuery.value } })
    }
  }
}

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>