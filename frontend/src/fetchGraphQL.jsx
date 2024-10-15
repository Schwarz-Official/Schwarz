async function fetchGraphQL(text, variables) {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/graphql/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;