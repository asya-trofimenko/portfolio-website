import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { i18nReady } from './i18n';
import App from './App.tsx';
import './styles/app.css';

i18nReady.then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
