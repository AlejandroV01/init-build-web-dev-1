import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DevChats from './components/DevChats.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import ErrorPage from './error-page.tsx'
import './index.css'
import Auth from './routes/Auth.jsx'
import Dashboard from './routes/Dashboard.tsx'
import Home from './routes/Home.tsx'
import Idea from './routes/Idea.tsx'
import Ideas from './routes/Ideas.tsx'
import Profile from './routes/Profile.tsx'
import Root from './routes/Root.tsx'
import UserSetup from './routes/UserSetup.tsx'
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
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/ideas',
        element: <Ideas />,
      },
      {
        path: '/idea/:id',
        element: <Idea />,
      },
      {
        path: '/user-setup',
        element: <UserSetup />,
      },
      {
        path: '/devchats',
        element: <DevChats />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
          transition={Bounce}
        />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
)
