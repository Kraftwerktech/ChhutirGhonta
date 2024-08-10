import { StrictMode } from 'react'
import React, { lazy } from 'react';
//import { Toaster } from 'react-hot-toast'
//import { Provider } from 'react-redux'
//import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
