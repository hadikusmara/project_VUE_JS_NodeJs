/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const KSSRouter = {
  path: '/KSS',
  component: Layout,
  redirect: 'noRedirect',
  name: 'KSS',
  meta: {
    title: 'KSS',
    icon: 'list'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/gabung_chart/index'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart 4', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/KSS/line'),
      name: 'LineChart',
      meta: { title: 'Line Chart 4', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/KSS/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart 4', noCache: true }
    }
  ]
}

export default KSSRouter

