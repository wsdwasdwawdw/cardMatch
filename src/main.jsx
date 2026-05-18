import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header.jsx'
import Container from './Components/Container.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Container/>
  </StrictMode>,
)
