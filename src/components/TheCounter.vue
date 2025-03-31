<script lang="ts" setup>
import { useCounter } from '@/composables/TheCounter'
const { addValue, subtractValue, canAdd, canSubtract, count } = useCounter()
</script>
<template>
  <button v-if="canAdd" class="button__increase" @click="addValue">Increment</button>
  <button v-if="canSubtract" class="button__decrease" @click="subtractValue">Decrement</button>

  <p :class="{ p__medium: true, 'p__counter--green': !canAdd }">
    {{ count }}
  </p>
</template>
<style scoped>
.button__increase,
.button__decrease {
  border: 0.5em black royalblue;
  margin: 0.2em 0.2em;
  padding: 0.2em 0.7em;
  border-radius: 0.6em;
  transition: all 1s;
  font-size: var(--s-font-small);
  font-family: 'Pixelify Sans';
}
.button__increase:hover,
.button__decrease:hover {
  background-color: rgb(255, 196, 118);
}
.p__medium {
  font-size: var(--s-font-medium);
}
.p__counter--green {
  color: greenyellow;
}
</style>
