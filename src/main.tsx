import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app.css'

// Remove loading overlay once app is ready
const removeLoadingOverlay = () => {
  const overlay = document.getElementById('loading-overlay');
  if (overlay) {
    overlay.classList.add('fade-out');
    setTimeout(() => overlay.remove(), 300);
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Remove overlay after React mounts
requestAnimationFrame(() => {
  requestAnimationFrame(removeLoadingOverlay);
});