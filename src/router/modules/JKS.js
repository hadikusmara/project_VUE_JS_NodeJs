/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const JKSRouter = {
  path: '/JKS',
  component: Layout,
  redirect: 'noRedirect',
  name: 'JKS',
  meta: {
    title: 'JKS',
    icon: 'list'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/JKS/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Perbangkan Syariah', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/JKS/line'),
      name: 'LineChart',
      meta: { title: 'Pasar Modal', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/JKS/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart 4', noCache: true }
    }
  ]
}

export default JKSRouter

