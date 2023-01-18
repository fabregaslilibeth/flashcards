<template>
  <div class="flex flex-row">
    <div class="w-1/3 px-12 py-12 my-24 mx-24">
      <form class="space-y-3">
        <div>
          <h1 class="font-bold text-lg md:text-xl xl:text-2xl tracking-tight">Register</h1>
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
            type="password"
            class="w-full border border-gray-400 text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2"
            placeholder="*********"
          />
        </div>
        <div class="flex justify-end">
          <button
            @click="handleSubmit"
            type="button"
            class="inline-flex items-center text-white px-5 py-2 rounded-lg overflow-hidden focus:outline-none bg-indigo-500 hover:bg-indigo-600 font-semibold tracking-tight"
          >Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { register } from "../server/lib/auth";
const formState = ref({
  email: '',
  password: '',
})

const handleSubmit = async () => {
  try {
    const user = await register(formState.value);

    return { result: user };
  } catch (error) {
    return { error: error.message };
  }
};
</script>