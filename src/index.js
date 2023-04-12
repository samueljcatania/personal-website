import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// Pages
import App from './App';
// Components
import Navbar from "./components/Navbar";
// Styles
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
