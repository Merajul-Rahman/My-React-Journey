import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'

import Home from './Home/Home.jsx'
import Counter from './Counter/Counter.jsx'
import ColorPicker from './ColorPicker/ColorPicker.jsx'
import CardGenerator from './Card-Generator/CardGenerator.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/counter',
    element: <Counter/>
  },
  {
    path: '/color-picker',
    element: <ColorPicker/>
  },
  {
    path: '/card-generator',
    element: <CardGenerator/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
