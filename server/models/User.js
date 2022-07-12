const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');
const skillSchema = new Schema({
    skillName : {
        type: String
    },
    expertiseLevel: {
        type : String,
        enum: ['BEGINNER', 'INTERMEDIATE', 'EXPERT'],
        default: 'BEGINNER'
    }
});

const socialLinkSchema = new Schema({
    socialProvidername : {
        type: String,
    },
    socialProviderUserName : {
        type: String
    }
});
const userSchema = new Schema({
    displayName: {
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
    blockedUsers : [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    accountSource: {
        type : String,
        required: true,
        enum: ['LOCAL', 'FB', 'GH', 'GOOG', 'LIN'],
        default: 'LOCAL'
    },
    profilePicURL: {
        type: String
    },
    projects : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ],
    savedProjects : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ],
    skills : [
        skillSchema
    ],
    aboutMe : {
        type:String
    },
    userCreatedAt : {
        type: Date,
        default: Date.now
    },
    verified : {
        type: Boolean
    },
    socialLinks : [socialLinkSchema]
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

//   set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if(this.password){
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
}
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

const User = model('User', userSchema);
module.exports = User;