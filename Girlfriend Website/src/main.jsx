import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import PasswordGate from './pages/PasswordGate.jsx'
import HomePage from './pages/HomeScreen.jsx'
import TimePage from './pages/TimePage.jsx'
import PlaylistPage from './pages/playlistPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PasswordGate />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/time' element={<TimePage />} />
        <Route path='/playlist' element={<PlaylistPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
