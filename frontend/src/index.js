import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // If you have a custom CSS file for global styles
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS globally
import App from './App';  // Import the root App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This hooks into the root div in your public/index.html
);
