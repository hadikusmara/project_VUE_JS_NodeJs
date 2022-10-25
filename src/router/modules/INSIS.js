/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const INSISRouter = {
  path: '/INSIS',
  component: Layout,
  redirect: 'noRedirect',
  name: 'INSIS',
  meta: {
    title: 'INSIS',
    icon: 'lock'
  },

  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/INSIS/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'KDESK', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/INSIS/line'),
      name: 'LineChart',
      meta: { title: 'Riset dan Inovasi Produk Halal', noCache: true }
    },
    {
      path: 'RisetIlmiah',
      component: () => import('@/views/INSIS/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Riset Ilmiah', noCache: true }
    },
    {
      path: 'RisetTerapan',
      component: () => import('@/views/INSIS/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Riset Terapan', noCache: true }
    }  ,
    {
      path: 'IndeksLiterasiEksyar',
      component: () => import('@/views/INSIS/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Indeks Literasi Eksyar', noCache: true }
    },
    {
      path: 'LiterasiKeuanganSyariah',
      component: () => import('@/views/INSIS/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Literasi Keuangan Syariah', noCache: true }
    }
  ]
}

export default INSISRouter

