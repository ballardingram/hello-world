const { faker } = require('@faker-js/faker');
const { mongoose } = require('mongoose');
const bson = require('bson');

// const faker = require('faker');
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

        // create friends *sorry for the nested for loop*
        for (let i = 0; i < Math.round(Math.random() * 20) + 1; i++) {
            const friendId = Math.round(Math.random() * 1000) + 1
            
            friends.push(friendId)
        }
        userData.push({ displayName, email, aboutMe, friends });
    }

    await User.collection.insertMany(userData)

    // create projects
    let createdProjects = [];
    
    for (let i = 0; i < 30; i++) {
        const title = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const content = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const skillsRequiredForHelp = faker.lorem.words(Math.round(Math.random() * 20) + 1);
        const createdBy = new bson.ObjectId();


        const createdProject = await Project.create({ title, description, content, skillsRequiredForHelp, createdBy});
        createdProjects.push(createdProject)
    }


    console.log('all done!');
    process.exit(0);
})