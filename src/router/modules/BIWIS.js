/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const BIWISRouter = {
  path: '/BIWIS',
  component: Layout,
  redirect: 'noRedirect',
  name: 'BIWIS',
  meta: {
    title: 'BIWIS',
    icon: 'guide'
  },
  children: [
    {
      path: 'BIWIS',
      component: () => import('@/views/BIWIS/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'PDES', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/BIWIS/line'),
      name: 'LineChart',
      meta: { title: 'Indikator Aktivasi Usaha Syariah', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/BIWIS/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Kinerja Ekspor Produk Halal', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/BIWIS/mix-chart'),
      name: 'MixChart',
      meta: { title: 'SCF Syariah', noCache: true }
    }
  ]
}

export default BIWISRouter

