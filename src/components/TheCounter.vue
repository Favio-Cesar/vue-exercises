<script lang="ts" setup>
import { useCounter } from '@/composables/TheCounter'
import { computed, ref, watch } from 'vue'
const { addValue, subtractValue, canAdd, canSubtract, count } = useCounter()
const multiplicator = ref(2)
const multiplication = computed(() => multiplicator.value * count.value)
const message = ref('Add or subtract to see the state of your value')
watch(count, async () => {
  if (count.value < 10 && count.value > 0) {
    message.value = 'You are inside the adecuate parameters'
  }
  if (count.value == 10) {
    message.value = 'You are in the max value'
  }
  if (count.value == 0) {
    message.value = 'You are in the min value'
  }
})
</script>

<template>
  <button v-if="canAdd" class="button__increase" @click="addValue">Increment</button>
  <button v-if="canSubtract" class="button__decrease" @click="subtractValue">Decrement</button>
  <h1>{{ message }}</h1>
  <p :class="{ p__medium: true, 'p__counter--green': !canAdd }">
    {{ count }}
  </p>

  <h1>Multiplicated by {{ multiplicator }} :</h1>
  <h2>{{ multiplication }}</h2>
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
