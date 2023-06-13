const { User } = require("../models/");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const foundUser = await User.findOne({
          $or: [{ _id: context.user._id }, { username: context.user.username }],
        });
        if (!foundUser) {
          throw new Error("Unable to find an associated user");
        }
        return foundUser;
      }
      throw new Error("You must be logged in to access user-specific data");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email: email });

        if (!user) {
          throw new Error(
            "Unable to locate a user account associated with that email!"
          );
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new Error("Invalid login credentials!");
        }

        const token = signToken(user);
        return { token, user };
      } catch (err) {
        throw new Error("An error occurred during login.");
      }
    },
    addUser: async (parent, args) => {
      console.log(args);
      try {
        const newUser = await User.create(args);
        console.log(`newUser:${newUser}`);

        if (!newUser) {
          throw new Error("There was a problem creating the new user!");
        }
        const token = signToken(newUser);
        return { token, user: newUser }; // This returned successfully.
      } catch (err) {
        console.error(err);
        throw new Error("An error occurred during new user creation!");
      }
    },
    saveBook: async (parent, { input }, context) => {
      if (context.user) {
        try {
          const userWithSavedBook = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $push: { savedBooks: input } },
            { new: true }
          );
          return userWithSavedBook;
        } catch (err) {
          throw new Error(
            "There was a problem updating the list of saved books with the new title!"
          );
        }
      }
      throw new Error("You must be logged in to save books!");
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        try {
          const userWithRemovedBook = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: { bookId: bookId } } },
            { new: true }
          );
          if (!userWithRemovedBook) {
            throw new Error(
              "There was a problem removing the book from your list of saved titles!"
            );
          }
          return userWithRemovedBook;
        } catch (err) {
          throw new Error(
            "There was a problem removing the book from your list of saved titles!"
          );
        }
      }
      throw new Error(
        "You must be logged in to remove books from your book list!"
      );
    },
  },
};

module.exports = resolvers;
