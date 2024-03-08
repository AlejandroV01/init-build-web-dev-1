import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'
import ErrorPage from './error-page.tsx'
import './index.css'
import Home from './routes/Home.tsx'
import Root from './routes/Root.tsx'
import StoreProvider from './store/StoreProvider.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
)
