const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    accountSource: {
        type : String,
        required: true,
        enum: ['LOCAL', 'FB', 'GH', 'GOOG', 'LIN'],
        default: 'LOCAL'
    },
    // connectLinks: [
    //     {
    //             type: Schema.Types.ObjectId,
    //             ref: 'ConnectLink'
    //     }
    // ],
    // projects : [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Project'
    //     }
    // ],
    // contributions: [
    //     {
    //         type: Schem
    //     }
    // ],
    profilePic: {
        type: Buffer
    },
},
{
    toJSON : {
        virtuals : true
    }
}
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

  // set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

const User = model('User', userSchema);
module.exports = User;