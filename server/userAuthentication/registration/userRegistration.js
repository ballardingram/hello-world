const { User } = require("../../models");
 async function createLocalUser(fullname, email, password) {
    console.log('call us here before creating a user');
  const user = await User.create({
    fullname: fullname,
    email: email,
    password: password,
  });

  return user;
};

async function createGHUser(fullname, email) {
    console.log('call us here before creating a GH user');
  const user = await User.create({
    fullname: fullname,
    email: email,
    accountSource: 'GH',
  });

  return user;
};




async function createLINUser(fullname, email) {
    console.log('call us here before creating a LIN user');
  const user = await User.create({
    fullname: fullname,
    email: email,
    accountSource: 'LIN',
  });

  return user;
};



async function createGoogleUser(fullname, email) {
    console.log('call us here before creating a google user');
  const user = await User.create({
    fullname: fullname,
    email: email,
    accountSource: 'GOOG',
  });

  return user;
};



async function createFBUser(fullname, email) {
    console.log('call us here before creating a FB user');
  const user = await User.create({
    fullname: fullname,
    email: email,
    accountSource: 'FB',
  });

  return user;
};

module.exports = {createLocalUser, createGHUser, createLINUser, createGoogleUser, createFBUser};
