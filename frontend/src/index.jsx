import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind.css';
import {Provider} from "react-redux";
import {store} from "./app/store";
import 'react-tooltip/dist/react-tooltip.css'
import {PreferencesProvider} from "./contexts/PreferencesContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PreferencesProvider>
                <App/>
            </PreferencesProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
