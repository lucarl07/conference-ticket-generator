import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import IndexPage from 'pages/IndexPage.tsx'
import TicketPage from 'pages/TicketPage.tsx'

const root = document.getElementById('root')

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path='/ticket' element={<TicketPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
