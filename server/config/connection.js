const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hello-world', {});

module.exports = mongoose.connection;
