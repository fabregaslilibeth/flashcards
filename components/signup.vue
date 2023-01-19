<template>
      <form class="">
        <div>
          <h1 class="font-bold text-lg md:text-xl xl:text-2xl tracking-tight">Register</h1>
        </div>
        <div class="my-4">
          <input
            v-model="formState.email"
            id="email"
            type="email"
            placeholder="Email"
            class="w-full text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2 bg-gray-200"
          />
        </div>
        <div class="my-4">
          <input
            v-model="formState.password"
            id="password"
            type="password"
            class="w-full text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2 bg-gray-200"
            placeholder="Password"
          />
        </div>
        <div class="flex justify-center">
          <button
            @click="handleSubmit"
            type="button"
            class="bg-red-400 rounded-full px-12 py-2 text-white text-sm uppercase tracking-wider font-bold"
          >Register</button>
        </div>
      </form>
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