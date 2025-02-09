import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer  
      position="bottom-right"  
      autoClose={5000}  
    /> 
  </Provider>,
);
