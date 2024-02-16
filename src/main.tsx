import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import HomeMain from './Pages/HomeMain.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children: [{
      path:'',
      element:<HomeMain/>,
    },
    {
      path:'home/',
      element:<HomeMain/>,
    }],
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
