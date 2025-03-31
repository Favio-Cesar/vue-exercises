<script setup lang="ts">
import TheCounter from '@/components/TheCounter.vue'
import TheTitle from '@/components/TheTitle.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <TheTitle>Titulo estático</TheTitle>
    <TheCounter />

    <RouterLink to="/catalog">Ir a catalog</RouterLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

header {
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

.logo {
  margin: 0 2rem 0 0;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
