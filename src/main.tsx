import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Added the basename so it matches your VAMK folder path */}
    <BrowserRouter basename="/~e2403004/salad">
        <App />
    </BrowserRouter>
  </StrictMode>,
)