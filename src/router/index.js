import { createRouter, createWebHistory } from 'vue-router'
import CandidateView from '@/views/candidates/CandidateView.vue'
import NotFound from '@/components/pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'CandidateView',
      component: CandidateView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: { hideLayout: true },
    },
  ],
})

export default router
