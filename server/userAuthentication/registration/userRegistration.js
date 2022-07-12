const { User } = require("../../models");
 async function createLocalUser(displayName, email, password) {
    console.log('call us here before creating a user');
  const user = await User.create({
    displayName: displayName,
    email: email,
    password: password,
  });

  return user;
};

async function createGHUser(displayName, email) {
    console.log('call us here before creating a GH user');
  const user = await User.create({
    displayName: displayName,
    email: email,
    accountSource: 'GH',
  });

  return user;
};




async function createLINUser(displayName, email) {
    console.log('call us here before creating a LIN user');
  const user = await User.create({
    displayName: displayName,
    email: email,
    accountSource: 'LIN',
  });

  return user;
};



async function createGoogleUser(displayName, email) {
    console.log('call us here before creating a google user');
  const user = await User.create({
    displayName: displayName,
    email: email,
    accountSource: 'GOOG',
  });

  return user;
};



async function createFBUser(displayName, email) {
    console.log('call us here before creating a FB user');
  const user = await User.create({
    displayName: displayName,
    email: email,
    accountSource: 'FB',
  });

  return user;
};

module.exports = {createLocalUser, createGHUser, createLINUser, createGoogleUser, createFBUser};
