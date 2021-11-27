/*
 * @Author: 刘林
 * @Date: 2021-11-27 14:52:32
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-27 16:05:50
 */
export default [
  {
    path: '/',
    component: './layouts/BasicLayout',
    routes: [
      {
        path: '/app',
        component: './pages/App',
      },
      {
        path: '/home',
        component: './pages/Home',
      },
      {
        path: '/about',
        component: './pages/About',
      },
      {
        path: '*',
        component: './pages/NotFound'
      }
    ]
  }
]