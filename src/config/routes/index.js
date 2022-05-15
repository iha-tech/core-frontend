import publicRoutes from './public'

export default [{
  path: '/',
  component: () => import('@/views/Public.vue'),
  children: publicRoutes
}, {
  path: '/shush',
  component: () => import('@/views/Private.vue')
}]
