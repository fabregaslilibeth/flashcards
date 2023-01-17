<template>
<div>
<pre>{{  pages }}</pre>
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