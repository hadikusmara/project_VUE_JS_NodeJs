/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const IPHRouter = {
  path: '/IPH',
  component: Layout,
  redirect: 'noRedirect',
  name: 'IPH',
  meta: {
    title: 'IPH',
    icon: 'icon'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/IPH/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart 3', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/IPH/line'),
      name: 'LineChart',
      meta: { title: 'Line Chart 3', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/IPH/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart 3', noCache: true }
    }
  ]
}

export default IPHRouter

