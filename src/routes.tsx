// Dependencies:
import { createBrowserRouter, Navigate } from "react-router-dom"

// Styles:
import './index.css'

// Pages:
import AppView from 'pages/AppView'
import FormPage from 'pages/IndexPage'
import TicketPage from 'pages/TicketPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppView />,
    children: [
      {
        index: true,
        element: <FormPage />
      },
      {
        path: "/ticket",
        element: <TicketPage />
      }
    ]
  },
  {
    path: "*?",
    element: <Navigate to="/" />
  },
])

export default router;