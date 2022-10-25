import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'
import BIWISRouter from './modules/BIWIS'
import INSISRouter from './modules/INSIS'
import IPHRouter from './modules/IPH'
import JKSRouter from './modules/JKS'
import KSSRouter from './modules/KSS'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true 
  }
  ,{ path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]},  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
    BIWISRouter,  INSISRouter,  IPHRouter, JKSRouter, KSSRouter
     
     ,{
    path: '/uploaddata',
    component: Layout,
    redirect: '/uploaddata',
    children: [
      {
        path: 'uploaddata',
        component: () => import('@/views/uploaddata/complex-table'),
        name: 'Dashboard',
        meta: { title: 'Upload Data', icon: 'documentation', affix: true }
      }
    ]},
    {
      path: '/JKS_FULL',
      component: Layout,
      redirect: '/JKS_FULL',
      children: [
        {
          path: 'JKS_FULL',
          component: () => import('@/views/JKS_FULL/index'),
          name: 'Dashboard',
          meta: { title: 'JKS', icon: 'documentation', affix: true }
        }
      ]}, 
      {
        path: '/admin',
        component: Layout,
        redirect: '/admin',
        name: 'admin',
        meta: {
          title: 'Admin',
          icon: 'excel'
        },
        children: [
          {
            path: '/adminuser',
            component: () => import('@/views/admin/create_user'),
            name: 'create_user',
            meta: { title: 'Create User',icon: 'user', affix: true  }
          },
          {
            path: '/adminedit',
            component: () => import('@/views/admin/edit_user'),
            name: 'Edit_user',
            meta: { title: 'Edit User',icon: 'user', affix: true  }
          }
        ]
      },{
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

/** 
*menu
* dashboard user 1
* dashboard user 2
* dashboard user 3
* dashboard user 4
*Upload  data
*    Satuan kerja    ==> filter muncul complex table tombol uplod
*                       coloum(Id,Satuan kerja,Dashboard,last update,update user,aktifitas(download Templete,
*                          edit, upload data)
*Narasi ==> filter muncul inline edit table tombol uplod
*                        coloum(Id,Satuan kerja,Dashboard,last update,update user,aktifitas(  edit)
*Admin
*  create User
*  Edit User
*catatan
*http://localhost:9527/dev-api/vue-element-admin/article/list?page=1&limit=20&sort=%2Bid
*json
*/