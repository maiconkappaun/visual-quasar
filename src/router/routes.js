
const routes = [
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue')
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ErrorNotFound.vue') },
      { path: 'inicio', component: () => import('pages/InicioPage.vue') },
      { path: 'pessoa', component: () => import('pages/PessoaInicioPage.vue') },
      { path: 'pessoa/novo', component: () => import('pages/PessoaNovoPage.vue') },
      { path: 'pessoa/editar', component: () => import('pages/PessoaEditarPage.vue') },
      { path: 'epi', component: () => import('pages/EpiInicioPage.vue') },
      { path: 'epi/novo', component: () => import('pages/EpiNovoPage.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
