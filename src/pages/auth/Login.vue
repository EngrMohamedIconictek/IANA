<template>
  <GuestLayout>
    <div class="min-h-screen flex items-center justify-center">
      <div>
        <form @submit.prevent="login" class="bg-white dark:bg-gray-950 p-5 rounded-md shadow-md w-full md:w-sm">
          <div class="flex justify-center mx-auto ">
            <img :src="'/logo.png'" class="w-24 " alt="">
          </div>
          <div class="my-4">
            <h3 class="text-[#3E642D] dark:text-white font-semibold text-xl">Sign In</h3>
          </div>


          <div class="mb-4">
            <label for="username" class="block mb-1 text-lg font-medium text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input id="username" v-model="username" type="text" placeholder="Enter username"
              class="w-full px-3 py-2 border border-gray-400 rounded dark:bg-slate-950 dark:border-gray-500 dark:text-white" />
          </div>

          <div class="mb-4 relative">
            <label for="password" class="block mb-1 text-lg font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password"
              placeholder="Enter password"
              class="w-full px-3 py-2 pr-10 border border-gray-400 rounded dark:bg-slate-950 dark:border-gray-500 dark:text-white" />
            <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
              class="absolute top-11 right-3 text-gray-600 dark:text-gray-300 cursor-pointer"
              @click="togglePassword"></i>
          </div>

          <button type="submit"
            class="mt-4 w-full text-lg text-white py-2 rounded  bg-[#3E642D] dark:bg-[#C2692A] transition-all duration-200">
            Login
          </button>
          <div v-if="error" class="text-red-500 text-center mt-2">{{ error }}</div>
          <div class="text-center mt-4 dark:text-white">Don't have an account? <a href="#" class="text-[#3D3B6E] dark:text-white hover:underline"> Register here</a></div>
          <div class="flex justify-center gap-3 pt-3">
            <a href="#">
              <i class="pi pi-facebook bg-[#3C5997] p-2 rounded text-white"></i>
            </a>
            <a href="#">
              <i class="pi pi-google bg-[#DD4B39] p-2 rounded text-white"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  </GuestLayout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import GuestLayout from '@/layouts/GuestLayout.vue'

// Form values
const username = ref('')
const password = ref('')
const showPassword = ref(false)
const error = ref('')
const router = useRouter()

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const login = () => {
  if (username.value === 'admin@ianaonline.org' && password.value === 'Ianaonline@123')  {
    error.value = ''
    router.push('/dashboard')
  } else {
    error.value = 'Invalid username or password.'
  }
}
</script>
