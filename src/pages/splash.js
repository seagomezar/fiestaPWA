import SplashImage from '../resources/img/seo/home-splash-screen.png';

export default [
  {
    path: '/',
    exact: true,
    component: () => import('../components/splash'),
    seo: {
      title: 'Fiesta: Fiesta Party 30',
      description: 'Fiesta party 30 Sebastian Gomez',
      image: SplashImage,
    },
  },
];
