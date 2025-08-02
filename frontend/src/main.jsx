import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './context/AuthContext.jsx'
import UserContext from './context/userContext.jsx'
import { DarkModeProvider } from './context/DarkModeContext.jsx' // ⬅️ Import dark mode context

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContext>
        <UserContext>
          <DarkModeProvider> {/* ⬅️ Wrap App in dark mode provider */}
            <App />
          </DarkModeProvider>
        </UserContext>
      </AuthContext>
    </BrowserRouter>
  </StrictMode>
)
