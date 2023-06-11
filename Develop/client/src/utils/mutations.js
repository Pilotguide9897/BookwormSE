import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            _id
            email
            password
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String, $password: String) {
        addUser(username: $username, email: $email, password: $password) {
            _id
            username
            email
            password
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook() {
        saveBook() {

        }
    }
`;

export const REMOVE_BOOK = gql`
    removeBook() {
        removeBook() {

        }
    }
`;
