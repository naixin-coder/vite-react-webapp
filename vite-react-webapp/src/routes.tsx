/*
 * @Author: 刘林
 * @Date: 2021-11-27 14:36:20
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-27 16:27:38
 */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoading from './components/PageLoading';
import routes from './route';


const AppRoutes = () => {
  const renderRoutes = (routes: any[]) => {
    let result = routes.map((route: any) => {
      if (route.routes && route.routes.length > 0) {
        return (
          <Route path={route.path} key={route.path} element={
            <React.Suspense fallback={<PageLoading />}>
              {React.createElement(React.lazy(() => import(route.component)))}
            </React.Suspense>
          }>
            {renderRoutes(route.routes)}
          </Route>
        )
      }
      return (
        <Route path={route.path} key={route.path} element={
          <React.Suspense fallback={<PageLoading />}>
            {React.createElement(React.lazy(() => import(route.component)), { location: route.path })}
          </React.Suspense>
        } />
      )
    })
    return result;
  }
  console.log(renderRoutes(routes))
  return (
    <Routes>
      {renderRoutes(routes)}
    </Routes>
  )
}


export default AppRoutes;