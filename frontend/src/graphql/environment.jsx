import {Environment, Network, RecordSource, Store} from 'relay-runtime';

function fetchQuery(operation, variables) {
    return fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/graphql/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => response.json());
}

function createEnvironment() {
  const network = Network.create(fetchQuery);
  const store = new Store(new RecordSource());
  return new Environment({ store, network });
}

export const environment = createEnvironment();
