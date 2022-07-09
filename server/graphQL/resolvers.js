const registrations = require('../userAuthentication/registration/userRegistration');
const {User} = require('../models');
const {signToken} = require('../utils/auth');
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
            const {fullname,email, password } = args;
            const user = await registrations.createLocalUser(fullname,email, password);
            //create a common function to pass user object and get back the JWTToken along with User
            const token = signToken(user);
            return {token, user};
        },
        addFBUser : async(parent, args) => {
            const{fullname, email} = args;
            const user = await registrations.createFBUser(fullname, email);
            const token = signToken(user);
            return {token, user};
        },
        addGoogleUser : async (parent, args) => {
            const{fullname, email} = args;
            const user = await registrations.createGoogleUser(fullname, email);
            const token = signToken(user);
            return {token, user};
        },
        addGitHubUser : async(parent, args) => {
            const{fullname, email} = args;
            const user = await registrations.createGHUser(fullname, email);
            const token = signToken(user);
            return {token, user};
        },
        addLinkedInUser : async(parent, args) => {
            const{fullname, email} = args;
            const user = await registrations.createLINUser(fullname, email);
            const token = signToken(user);
            return {token, user};
        }
    }
};

module.exports = resolvers;