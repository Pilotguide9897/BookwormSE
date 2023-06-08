const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String
        authors:
        description:
        title:
        image:
        link: 
    }

    type Auth {
        token:
        user: [User]
    }

    type Query {
        me:
    }

    type Mutation {
        login:
        addUser:
        saveBook:
        removeBook:
    }
`;