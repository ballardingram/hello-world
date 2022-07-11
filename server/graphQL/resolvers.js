const registrations = require("../userAuthentication/registration/userRegistration");
const { User, Project } = require("../models");
const { signToken } = require("../utils/auth");
var validator = require("is-my-json-valid");
const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("friends")
        .populate("blockedUsers")
        .populate("projects")
        .populate("savedProjects")
        .populate("skills")
        .populate("socialLinks");
    },
    user: async (parent, args) => {
      const { email } = args;
      console.log(email);
      const user = await User.findOne({ email: email })
        .select("-__v -password")
        .populate("friends")
        .populate("blockedUsers")
        .populate("projects")
        .populate("savedProjects")
        .populate("skills")
        .populate("socialLinks");
      console.log(user);
      return user;
    },
    project: async (parent, args) => {
      const { projectID } = args;
      const project = await Project.findOne({ _ID: projectID })
        .select("-__v")
        .populate("createdBy")
        .populate("colloborators");
      return project;
    },
  },
  Mutation: {
    addLocalUser: async (parent, args) => {
      const { displayName, email, password } = args;
      const user = await registrations.createLocalUser(
        displayName,
        email,
        password
      );
      //create a common function to pass user object and get back the JWTToken along with User
      const token = signToken(user);
      return { token, user };
    },
    addFBUser: async (parent, args) => {
      const { displayName, email } = args;
      const user = await registrations.createFBUser(displayName, email);
      const token = signToken(user);
      return { token, user };
    },
    addGoogleUser: async (parent, args) => {
      const { displayName, email } = args;
      const user = await registrations.createGoogleUser(displayName, email);
      const token = signToken(user);
      return { token, user };
    },
    addGitHubUser: async (parent, args) => {
      const { displayName, email } = args;
      const user = await registrations.createGHUser(displayName, email);
      const token = signToken(user);
      return { token, user };
    },
    addLinkedInUser: async (parent, args) => {
      const { displayName, email } = args;
      const user = await registrations.createLINUser(displayName, email);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, args) => {
      const { email, password } = args;
      const user = await User.findOne({ email })
        .select("-__v")
        .populate("friends")
        .populate("blockedUsers")
        .populate("projects")
        .populate("savedProjects")
        .populate("skills")
        .populate("socialLinks");
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    // Mutation for adding a Project

    addProject: async (parent, args) => {
      const {
        title,
        description,
        content,
        createdBy,
        skillsRequired,
        colloborators,
        helpRequired,
      } = args;
      const project = await Project.create({
        title: title,
        description: description,
        content: content,
        createdBy: createdBy,
        skillsRequired: skillsRequired,
        colloborators: colloborators,
        helpRequired: helpRequired,
        createdAt: Date.now(),
      });
      //updating own project
      await User.findByIdAndUpdate(
        { _id: createdBy },
        { $push: { projects: project._id } },
        { new: true }
      );
      // Need to update colloborations
      return project;
    },
    updateUserProfile: async (parent, args) => {
      const { userData } = args;
      const inputUser = formatInputUserData(userData);
      console.log(inputUser);
      return await User.findOneAndUpdate(inputUser);
    },
  },
};

const formatInputUserData = (inputData) => {
  const user = {};
  // Assuming the input data is a VALID JSON
  if (typeof inputData == "string") {
    const JSONInput = JSON.parse(inputData);
    if (JSONInput._id) {
      user["_id"] = JSONInput._id;
    }
    if (JSONInput.displayName) {
      user["displayName"] = JSONInput.displayName;
    }
    if (JSONInput.email) {
      user["email"] = JSONInput.email;
    }
    if (JSONInput.friends) {
      if (JSONInput.friends.length > 0) {
        user["friends"] = JSONInput.friends;
      }
    }
    if (JSONInput.blockedUsers) {
      if (JSONInput.blockedUsers) {
        user["blockedUsers"] = JSONInput.blockedUsers;
      }
    }
    if (JSONInput.projects) {
      if (JSONInput.projects.lenght > 0) {
        user["projects"] = JSONInput.projects;
      }
    }
    if (JSONInput.savedProjects) {
      if (JSONInput.savedProjects.length > 0) {
        user["savedProjects"] = JSONInput.savedProjects;
      }
    }
    if (JSONInput.skills) {
      if (JSONInput.skills.length > 0) {
        const skillSet = [];
        for (let i = 0; i < JSONInput.skills.length; i++) {
          const tempSkill = JSONInput.skills[i];
          const skillName = tempSkill.skillName;
          const skillLevel = tempSkill.expertiseLevel;
          skillSet.push({ skillName: skillName, expertiseLevel: skillLevel });
        }
        user["skills"] = skillSet;
      }
    }
    if (JSONInput.socialLinks) {
      if (JSONInput.socialLinks.length > 0) {
        const socialLinksSet = [];
        for (let i = 0; i < JSONInput.socialLinks.length; i++) {
          const tempSLink = JSONInput.socialLinks[i];
          const socialProvidername = tempSLink.socialProvidername;
          const socialProviderUserName = tempSLink.socialProviderUserName;
          socialLinksSet.push({
            socialProvidername: socialProvidername,
            socialProviderUserName: socialProviderUserName,
          });
        }
        user["socialLinks"] = socialLinksSet;
      }
    }

    if (JSONInput.aboutMe) {
      user["aboutMe"] = JSONInput.aboutMe;
    }
    if (JSONInput.verified || !JSONInput.verified) {
      user["verified"] = JSONInput.verified;
    }
  }

  return user;
};

module.exports = resolvers;
