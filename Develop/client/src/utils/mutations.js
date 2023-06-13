import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            username
            email
        }
        }
    }
`;

export const ADD_USER = gql`
    mutation AddUser($username: String, $email: String, $password: String) {
        addUser(username: $username, email: $email, password: $password) {
        token
        user {
            username
            email
        }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook( $input: SaveNewBook) {
        saveBook(input: $input) {
            authors
            description
            title
            bookId
            image
            link
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            savedBooks
        }
    }
`;
