<script setup lang="ts">
import InstagramIcon from '@/components/icons/InstagramIcon.vue'
import YoutubeIcon from '@/components/icons/YoutubeIcon.vue'

const icons = { YoutubeIcon, InstagramIcon }
</script>

<template>
  <main>
    <router-view></router-view>
    <component v-for="(icon, index) in icons" :key="index" :is="icon"></component>
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
