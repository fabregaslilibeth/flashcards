<template>
  <div class="flex flex-row">
    <div class="px-12 py-12 my-24">
      <form class="space-y-3">
        <div>
          <h1 class="font-bold text-lg md:text-xl xl:text-2xl tracking-tight">LOGIN</h1>
        </div>
        <div class="space-y-2">
          <label for="email" class="block font-medium tracking-tight">Email</label>
          <input
            v-model="formState.email"
            id="email"
            type="email"
            class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2"
            placeholder="hey@abhishek.com"
          />
        </div>
        <div class="space-y-2">
          <label for="password" class="block font-medium tracking-tight">Password</label>
          <input
            v-model="formState.password"
            id="password"
            type="text"
            class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2"
            placeholder="*********"
          />
        </div>
        <div class="flex justify-end">
          <button
            @click="handleSubmit"
            type="button"
            class="inline-flex items-center text-white px-5 py-2 rounded-lg overflow-hidden focus:outline-none bg-indigo-500 hover:bg-indigo-600 font-semibold tracking-tight"
          >Login</button>
        </div>
      </form>
    </div> {{ user }} {{ error  }}
  </div>
</template>

<script setup lang="ts">
import { login } from "../server/lib/auth"

const { user, userStore } = useUser()
const router = useRouter()

const formState = ref({
  email: 'hey@gmail.com',
  password: 'heygoogle',
})

const error = ref('')

const handleSubmit = async () => {
  try {
    const result = await login(formState.value)
    if (result.status === 'error') {
      error.value = result.errorCode
      return
    } 
    userStore.setUser(result)
    setTimeout(() => {
      router.push('/')
    }, 2000)
  } catch (error) {
    return { error: error.message };
  }
};
</script>