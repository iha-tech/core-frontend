const Public = () => import('@/views/Public.vue')
const Private = () => import('@/views/Private.vue')

export default [{
  path: '',
  component: Public
}, {
  path: 'shush',
  component: Private
}]
