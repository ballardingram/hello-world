const faker = require('faker');

const db = require('../config/connection');

const { Project, User } = require('../models');

db.once('open', async () => {
    await Project.deleteMany({});
    await User.deleteMany({});

    // create user data
    const userData= [];

    for (let i = 0; i < 50; i++) {
        const displayName = faker.internet.userName();
        const email = faker.internet.email(username);
        const aboutMe = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const verified = faker.datatype.boolean();

        userData.push({ displayName, email, aboutMe, verified });
    }
    
    const createdUsers = await User.collection.insertMany(userData);

    // create friends
    for (let i = 0; i < 30; i++) {
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { _id: userId } = createdUsers.ops[randomUserIndex];

        let friendId = userId;

        while (friendId === userId) {
            const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
            friendId = createdUsers.ops[randomUserIndex];
        }

        await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
    }

    // create projects
    let createdProjects = [];
    
    for (let i = 0; i < 30; i++) {
        const title = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const content = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const hidden = faker.datatype.boolean();
        const helpRequired = faker.datatype.boolean();
        const skillsRequiredForHelp = faker.lorem.words(Math.round(Math.random() * 20) + 1);

        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { createdBy, _id: userId } = createdUsers.ops[randomUserIndex];

        const createdProject = await Project.create({ title, description, content, hidden, helpRequired, skillsRequiredForHelp, createdBy });

        const updatedUser = await User.updateOne(
            {_id: userId},
            {$push: { projects: createdProject._id } }
        );

        createdProjects.push(createdProject)
    }

})