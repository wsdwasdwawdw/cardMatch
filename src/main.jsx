import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import './index.css'
import Header from './Components/Header.jsx'
import Container from './Components/Container.jsx'
import EasyPage from './Pages/EasyPage.jsx'
import MediumPage from './Pages/MediumPage.jsx'

function AppLayout() {
  return (
    <>
      <Header />
      <Container />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <EasyPage /> },
      { path: 'easy', element: <EasyPage /> },
      { path: 'medium', element: <MediumPage /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)