const { User } = require ('../models/');
const { findOne } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) { // Because we need to know if there is a user logged in
                const foundUser = await findOne({
                    $or: [{ _id: context.user.id }, { username: context.user.username }]
                });
                if (!foundUser) {
                    // you cannot do res.status because GraphQL does not have direct access to the http response object. Instead if there is a problem, to handle it use `throw new Error().
                    throw new Error ('Unable to find an associated user');
                }
                    return foundUser;
                }
            throw new Error('You must be logged in to access user-specific data');
            },
            
        },
    },
    // $or is an operator in mongoDB to search for a user. It performs the or operation on an array.

    Mutation: {
        login: async (parent, { email, password }) => {

        try {
            const user = await User.findOne({ email });

            // Must login, sign a token, send it back to the client.
            // 1. check if there is a user with that associated email
            if (!user) {
                throw new Error ('Invalid login credentials');
            }

            //2. If the user has a valid email associated with an acocunt, get them to log in:
            const isCorrectPassword= await bcrypt
            
            return { user, token };
        } catch {
            
        }
            





        },
        addUser: async (parent, { username, email, password }) => {
            return await User.create({
                username: username,
                email: email,
                password: password
            });
        },
        saveBook: async (parent, { input }) => {
            return await User.
        },
        removeBook: async (parent, { userId, bookId }) => {
            return await User.findOneAndUpdate(
                { _id: userId },
                { $pull: { savedBooks: { bookId: bookId}}},
                { new: true }
            );
        },
    },
};

module.exports = resolvers;