export default [
  {
    path: '/login',
    exact: true,
    component: () => import('../components/login'),
    seo: {
      title: 'Login | Fiesta',
      description: 'Fiesa',
    },
  },
  {
    path: '/logout',
    exact: true,
    component: () => import('../components/logout'),
    seo: {
      title: 'Logging out...',
    },
  },
  {
    path: '/dashboard',
    exact: true,
    component: () => import('../components/dashboard'),
    seo: {
      title: 'Party | Sebastian Gomez',
    },
  },
  {
    path: '/felicidades',
    exact: true,
    component: () => import('../components/felicidades'),
    seo: {
      title: 'Felicidades | Felicidades',
    },
  },
];
