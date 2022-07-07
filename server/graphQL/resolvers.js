const {User} = require('../models');

const resolvers = {
    Query : {
        users : async () => {
            return User.find()
            .select("-__v -password")
            .populate("friends")
        },
        user : async () => {
            return User.findOne({email})
            .select("-__v -password")
            .populate("friends");
        }
    },
    Mutation: {
        addLocalUser: async (parent, args) => {
            const user = await User.create(args);
            // const token = signToken(user);
            return user;
        }
    }
};

module.exports = resolvers;