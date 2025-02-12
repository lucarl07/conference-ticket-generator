// Dependencies:
import { createBrowserRouter } from "react-router-dom";

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
])

export default router;