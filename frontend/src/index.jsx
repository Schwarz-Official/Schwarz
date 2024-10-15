import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind.css';
import 'react-tooltip/dist/react-tooltip.css'
import {PreferencesProvider} from "./contexts/PreferencesContext";
import {RelayEnvironmentProvider, loadQuery} from "react-relay/hooks";
import RelayEnvironment from "./environment";
import {IsAuthenticatedQuery} from "./graphql/queries/IsAuthenticatedQuery";

const preloadedQuery = loadQuery(RelayEnvironment, IsAuthenticatedQuery, {});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Suspense fallback={'Loading...'}>
                <PreferencesProvider>
                    <App preloadedQuery={preloadedQuery}/>
                </PreferencesProvider>
            </Suspense>
        </RelayEnvironmentProvider>
    </React.StrictMode>
);

reportWebVitals();
