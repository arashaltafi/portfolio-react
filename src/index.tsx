import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename='/'>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

//service worker registration
serviceWorkerRegistration.register();

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', async () => {
//       try {
//           const registration = await navigator.serviceWorker.register('/sw.ts');
//           console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       } catch (error) {
//           console.log('ServiceWorker registration failed: ', error);
//       }
//   })
// } else {
//   console.log('ServiceWorker not supported');
// }

reportWebVitals();
