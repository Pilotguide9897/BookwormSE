const { User } = require ('../models/');

const resolvers = {
    Query: {
        me: async () => {
            return User.find();
        }
    },

    Mutation: {
        login: async () => {
            
        },
        addUser: async () => {
            
        },
        saveBook: async () => {
            
        },
        removeBook: async () => {
            
        }
    }
};

module.exports = resolvers;