import React from 'react'
import ReactDOM from 'react-dom/client'
import AppComponent from './App'
import './index.css';
import axios from 'axios';

import { ToastContainer } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { ConfigProvider } from './contexts/ConfigContext';

axios.defaults.baseURL = import.meta.env.VITE_APIENDPOINT ||"http://localhost:3500/api"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider>
      <AppComponent />
      <ToastContainer theme='dark' position='bottom-right'/>
      <LoadingSpinner />
    </ConfigProvider>
  </React.StrictMode>
)
