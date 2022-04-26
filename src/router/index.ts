import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/teams',
    name: 'teams',
    component: () => import('../views/TeamsListView.vue'),
    // TODO: fix children routes
    // children: [
    //   {
    //     path: '',
    //     name: 'team',
    //     component: import('../views/TeamInfoView.vue'),
    //   },
    // ],
  },
  {
    path: '/teams/:id',
    name: 'team',
    component: import('../views/TeamInfoView.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/TableView.vue'),
  },
  {
    path: '/scorers',
    name: 'scorers',
    component: () => import('../views/ScorersView.vue'),
  },
  {
    path: '/winners',
    name: 'winners',
    component: () => import('../views/WinnersView.vue'),
  },
  {
    path: '/matches',
    name: 'matches',
    component: () => import('../views/MatchesView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
