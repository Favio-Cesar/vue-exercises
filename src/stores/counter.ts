import { defineStore } from 'pinia'
import { computed, ref, watch, watchEffect } from 'vue'
export const useCounterStore = defineStore('counter', () => {
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
  const addValue = ref(() => {
    count.value += 1
  })
  const subtractValue = ref(() => {
    count.value -= 1
  })

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
  return {
    addValue,
    subtractValue,
    canAdd,
    canSubtract,
    count,
    multiplication,
    multiplicator,
    message,
  }
})
