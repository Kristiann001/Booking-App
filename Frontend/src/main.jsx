import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Main from './Components/Main.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'

import './index.css'
import Booking from './Components/Booking.jsx'


const router = createBrowserRouter([
  {
  path: '/',
  element: <Main />,
  errorElement: <NotFoundPage />
  },
  {
    path: '/booking',
    element: <Booking />,
    errorElement: <NotFoundPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
