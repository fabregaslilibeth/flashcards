<template>
  <div>
    {{ user }} 
    <div>
      <button @click="logout">SIGN OUT</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { signout } from "../server/lib/auth"
const { user, userStore } = useUser()
const router = useRouter()

const logout = async () => {
  try {
    const result = await signout()
    userStore.setUser()
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  } catch (error) {
    return error;
  }
};
</script>
