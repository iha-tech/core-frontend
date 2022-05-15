export default [{
  name: 'AboutMe',
  path: '/about-me',
  component: () => import('@/views/Public/AboutMe.vue')
}, {
  name: 'Home',
  path: '/home',
  component: () => import('@/views/Public/Home.vue')
}]
