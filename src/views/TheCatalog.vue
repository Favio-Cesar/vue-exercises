<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/mock'
</script>

<template>
  <div>
    <ProductCard v-for="product in products" :key="product.id" v-bind="product" />
    <RouterLink to="/">Ir a home</RouterLink>
  </div>
</template>

<style lang="scss" scoped></style>
