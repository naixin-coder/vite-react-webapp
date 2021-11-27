/*
 * @Author: 刘林
 * @Date: 2021-11-26 14:36:31
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-27 14:41:20
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SecurityLayout from './layouts/SecurityLayout'
import App from './pages/App'
import './index.less'
import Home from './pages/Home'
import About from './pages/About'
import AppRoutes from './routes'

ReactDOM.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('root')
)
