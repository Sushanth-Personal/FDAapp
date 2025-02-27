// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './main.css';
import { StrictMode } from "react";
import { UserProvider } from "./Contexts/UserContext";
createRoot(document.getElementById('root')).render(
   <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>, 
)

// Register Service Worker (in production)
if (import.meta.env.MODE === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
}
