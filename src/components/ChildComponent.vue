<script setup lang="ts">
import { inject } from 'vue'

const message = inject('message')
</script>

<template>
  <div>
    <p>Message: {{ message }}</p>
    <button @click="$emit('increaseNumber', 1)">Increase by 1</button>
  </div>
</template>

<style lang="scss" scoped></style>
