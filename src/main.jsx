import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MovieApp } from './MovieApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieApp/>
  </StrictMode>,
)
