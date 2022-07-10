const registrations = require('../userAuthentication/registration/userRegistration');
const {User, Project} = require('../models');
const {signToken} = require('../utils/auth');
const resolvers = {
    Query : {
        users : async () => {
            return User.find()
            .select("-__v -password")
            .populate("friends")
        },
        user : async (parent, args) => {
            const {email}= args;
            console.log(email);
            const user = await User.findOne({email: email})
            .select("-__v -password")
            .populate("friends")
            .populate("blockedUsers")
            .populate("projects")
            .populate("savedProjects");
            console.log(user);
            return user;
        }
    },
    Mutation: {
        addLocalUser: async (parent, args) => {
            const {displayName,email, password } = args;
            const user = await registrations.createLocalUser(displayName,email, password);
            //create a common function to pass user object and get back the JWTToken along with User
            const token = signToken(user);
            return {token, user};
        },
        addFBUser : async(parent, args) => {
            const{displayName, email} = args;
            const user = await registrations.createFBUser(displayName, email);
            const token = signToken(user);
            return {token, user};
        },
        addGoogleUser : async (parent, args) => {
            const{displayName, email} = args;
            const user = await registrations.createGoogleUser(displayName, email);
            const token = signToken(user);
            return {token, user};
        },
        addGitHubUser : async(parent, args) => {
            const{displayName, email} = args;
            const user = await registrations.createGHUser(displayName, email);
            const token = signToken(user);
            return {token, user};
        },
        addLinkedInUser : async(parent, args) => {
            const{displayName, email} = args;
            const user = await registrations.createLINUser(displayName, email);
            const token = signToken(user);
            return {token, user};
        },
        
        login : async(parent, args) => {
            const {email, password} = args;
            const user = await User.findOne({email})
                            .select("-__v")
                            .populate("friends");
            if(!user){
                throw new AuthenticationError("Incorrect credentials");
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
              }
            const token = signToken(user);
            return {token, user};
        },

        // Mutation for adding a Project

        addProject : async(parent, args) => {
            const {title, description, content, createdBy, skillsRequired, colloborators, helpRequired} = args;
                const project = await Project.create({
                title : title,
                description : description,
                content:content, 
                createdBy: createdBy, 
                skillsRequired : skillsRequired, 
                colloborators : colloborators, 
                helpRequired : helpRequired,
                createdAt : Date.now() 
            });
            //updating own project
            await User.findByIdAndUpdate( 
                { _id: createdBy },
                { $push: { projects: project._id } },
                { new: true }
                );
            // Need to update colloborations
            return project;
            
        }
    }
};

module.exports = resolvers;