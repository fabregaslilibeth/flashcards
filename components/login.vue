<template>
  <form class="space-y-3">
    <div>
      <h1 class="font-bold text-lg md:text-xl xl:text-2xl tracking-tight">
        Login
      </h1>
    </div>
    <div class="my-4">
      <input
        v-model="formState.email"
        id="email"
        type="email"
        class="w-full text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2 bg-gray-200"
        placeholder="Email"
      />
    </div>
    <div class="my-4">
        <input
        v-model="formState.password"
        id="password"
        type="text"
        class="w-full text-gray-800 placeholder-gray-400 rounded focus:border-transparent focus:outline-none focus:shadow-outline px-3 py-2 bg-gray-200"
        placeholder="Password"
      />
    </div>
    <div class="flex justify-end">
      <button
        @click="handleSubmit"
        type="button"
        class="bg-red-400 rounded-full px-12 py-2 text-white text-sm uppercase tracking-wider font-bold"
      >
        Login
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { login } from "../server/lib/auth";

const { user, userStore } = useUser();
const router = useRouter();

const formState = ref({
  email: "hey@gmail.com",
  password: "heygoogle",
});

const error = ref("");

const handleSubmit = async () => {
  try {
    const result = await login(formState.value);
    if (result.status === "error") {
      error.value = result.errorCode;
      return;
    }
    userStore.setUser(result.userInfo);
    setTimeout(() => {
      router.push("/");
    }, 2000);
  } catch (error) {
    return { error: error.message };
  }
};
</script>
