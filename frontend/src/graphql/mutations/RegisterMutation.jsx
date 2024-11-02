import { graphql, commitMutation } from 'react-relay';

const RegisterMutation = graphql`
    mutation RegisterMutation($input: RegisterInput!) {
        register(input: $input) {
            user {
                id
                email
            }
        }
    }
`;

function signup(environment, input, onCompleted, onError) {
    const variables = { input };

    commitMutation(environment, {
        mutation: SignupMutation,
        variables,
        onCompleted,
        onError,
    });
}
