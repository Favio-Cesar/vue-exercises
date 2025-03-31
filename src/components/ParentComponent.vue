<script setup lang="ts">
import ChildComponent from '@/components/ChildComponent.vue'
import { ref } from 'vue'
const count = ref(1)
</script>

<template>
  <div>
    <h1>Numero actual : {{ count }}</h1>
    <ChildComponent @increaseNumber="(n) => (count += n)" />
  </div>
</template>

<style lang="scss" scoped></style>
