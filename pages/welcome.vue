<template>
  <div>
    {{ user }}
  </div>
</template>

<script setup lang="ts">
const { user } = useUser();
</script>
