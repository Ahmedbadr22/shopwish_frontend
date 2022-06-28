import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainThemeProvider from "./context/main-theme-context/MainThemeContext";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MainThemeProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MainThemeProvider>
    </React.StrictMode>
);

