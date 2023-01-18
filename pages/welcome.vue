<template>
  <div>
    {{ user }}

    {{ apikey }}
  </div>
</template>

<script setup lang="ts">
const { user } = useUser();

const config = useRuntimeConfig()
const apikey = config.public.firebase.apiKey
</script>
