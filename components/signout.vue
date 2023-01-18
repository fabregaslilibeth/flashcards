<template>
  <button @click="logout">Signout</button>
</template>

<script setup lang="ts">
import { signout } from "../server/lib/auth"
const { user } = useUser()
const router = useRouter()

const logout = async () => {
  try {
    await signout()
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  } catch (error) {
    return error;
  }
};
</script>

