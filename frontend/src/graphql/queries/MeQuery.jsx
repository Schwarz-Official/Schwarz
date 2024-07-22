import {graphql} from "react-relay";

const MeQuery = graphql`
  query MeQuery {
    isAuthenticated {
      isAuthenticated
    }
  }
`;