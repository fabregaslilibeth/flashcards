<template>
  <div>
    {{  name }} {{  doubleCount  }}
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()

const { name, doubleCount } = storeToRefs(store)
</script>