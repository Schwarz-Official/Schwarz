import graphql from 'react-relay';

export const IsAuthenticatedQuery = graphql`
  query IsAuthenticatedQuery {
    isAuthenticated
  }
`;
