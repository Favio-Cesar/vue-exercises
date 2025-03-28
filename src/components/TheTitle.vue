<script lang="ts" setup>
defineProps<{ propTitle: string }>()
</script>
<template>
  <h2 class="h2__big">{{ propTitle }}</h2>
</template>
<style scoped>
.h2 {
  font-size: var(--s-font-h2);
  color: rgb(123, 182, 35);
}
</style>
