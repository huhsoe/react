import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './styles/reset.css';
import './styles/commons.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/main.css';
import './styles/shop.css';
import './styles/cart.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);