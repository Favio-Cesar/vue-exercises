import { createMemoryHistory, createRouter } from 'vue-router'

import TheCatalog from '@/views/TheCatalog.vue'
import TheHome from '@/views/TheHome.vue'

const routes = [
  { path: '/', component: TheHome },
  { path: '/catalog', component: TheCatalog },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
