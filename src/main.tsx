import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './input.css';

import LandingPage from './pages/LandingPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
