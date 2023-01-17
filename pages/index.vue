<template>
<div>
<pre>{{  pages }}</pre>
<div class="flex justify-center items-center">
    <h1 class="text-3xl font-bold text-green-500">
      Installed Tailwind CSS 3 in Nuxt 3
    </h1>
  </div>
</div>
</template>

<script setup lang="ts">
const pages = ref()

onMounted(async () => {
  const { result } = await $fetch('/api/query?col=pages') 
  console.log(result)
  pages.value = result
})
</script>