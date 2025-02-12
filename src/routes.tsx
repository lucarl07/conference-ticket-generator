// Dependencies:
import { createBrowserRouter, Navigate } from "react-router-dom";

// Styles:
import './index.css'

// Pages:
import IndexPage from 'pages/IndexPage.tsx'
import TicketPage from 'pages/TicketPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />
  },
  {
    path: "/ticket",
    element: <TicketPage />
  },
  {
    path: "*?",
    element: <Navigate to="/" />
  },
])

export default router;