import { ref, watchEffect } from 'vue'
export function useCounter() {
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
  return { addValue, subtractValue, canAdd, canSubtract, count }
}
