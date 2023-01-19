<template>
  <div>
    {{ data.body[0].zip }}
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent('/hello').findOne())

console.log(data.value.body)
</script>