import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind.css';
import 'react-tooltip/dist/react-tooltip.css'
import {PreferencesProvider} from "./contexts/PreferencesContext";

// const {RelayEnvironmentProvider} = require('react-relay');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<RelayEnvironmentProvider environment={environment}>*/}
            <PreferencesProvider>
                <App/>
            </PreferencesProvider>
        {/*</RelayEnvironmentProvider>*/}
    </React.StrictMode>
);

reportWebVitals();
