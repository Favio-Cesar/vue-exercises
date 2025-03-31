<template>
  <div class="card">
    <img :src="image" alt="Product image" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <span>{{ price }}</span>
    <button>Buy</button>
  </div>
</template>

<script lang="ts" setup>
defineProps(['image', 'title', 'description', 'price'])
</script>
