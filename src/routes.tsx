// Dependencies:
import { createBrowserRouter, Navigate } from "react-router-dom"

// Styles:
import './index.css'

// Pages:
import AppView from 'pages/AppView'
import FormPage from 'pages/IndexPage'
import TicketPage from 'pages/TicketPage'

// Utilities:
import FormPageAction from 'utils/actions/FormPageAction'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppView />,
    action: FormPageAction,
    children: [
      {
        index: true,
        element: <FormPage />
      },
      {
        path: '/ticket',
        element: <TicketPage />
      }
    ]
  },
  {
    path: '*?',
    element: <Navigate to="/" />
  },
])

export default router;