<script lang="ts">
import { ref, watchEffect } from 'vue'

export default {
  setup() {
    const maxCount = 10
    const minCount = 0

    const count = ref(0)
    const canAdd = ref(true)
    const canSubtract = ref(true)
    let addRule, subtractRule
    watchEffect(() => {
      addRule = count.value < maxCount
      subtractRule = count.value > minCount
      canAdd.value = addRule
      canSubtract.value = subtractRule
    })
    const addValue = () => {
      count.value += 1
    }
    const subtractValue = () => {
      count.value -= 1
    }
    return {
      count,
      addValue,
      subtractValue,
      canAdd,
      canSubtract,
    }
  },
}
</script>
<template>
  <button v-if="canAdd" class="button__increase" @click="addValue">Increment</button>
  <button v-if="canSubtract" class="button__decrease" @click="subtractValue">Decrement</button>

  <p class="p__medium">{{ count }}</p>
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
</style>
