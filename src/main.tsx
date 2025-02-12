import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './input.css';

import { Provider } from 'react-redux';
import rootReducer from './slices';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
