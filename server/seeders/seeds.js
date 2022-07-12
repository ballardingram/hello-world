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
        const email = faker.internet.email(displayName);
        const aboutMe = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const friends = [];
        // const verified = faker.datatype.boolean()

        // create friends *sorry for the nested for loop*
        for (let i = 0; i < Math.round(Math.random() * 20) + 1; i++) {
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();

            friends.push({ firstName, lastName });
        }

        userData.push({ displayName, email, aboutMe, friends });
        User.collection.insertMany(userData)
    }

    // create projects
    let createdProjects = [];
    
    for (let i = 0; i < 30; i++) {
        const title = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const content = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        // const hidden = faker.datatype.boolean();
        // const helpRequired = faker.datatype.boolean();
        const skillsRequiredForHelp = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const createdBy = {
            firstName: faker.name.firstName,
            lastName: faker.name.lastName
        }

        const createdProject = await Project.create({ title, description, content, skillsRequiredForHelp, createdBy });

        const updatedUser = await User.updateOne(
            {_id: userId},
            {$push: { projects: createdProject._id } }
        );

        createdProjects.push(createdProject)
    }


    console.log('all done!');
    process.exit(0);

})