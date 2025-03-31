<script setup lang="ts">
import ChildComponent from '@/components/ChildComponent.vue'
import { provide, ref } from 'vue'
const count = ref(1)
provide('message', 'hello message from parent!')
</script>

<template>
  <div>
    <h1>Actual Number : {{ count }}</h1>
    <ChildComponent @increaseNumber="(n) => (count += n)" />
  </div>
</template>

<style lang="scss" scoped></style>
