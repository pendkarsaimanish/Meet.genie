import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
)
