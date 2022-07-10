const {Schema, model} = require('mongoose');
const ProjectSchema = new Schema({
    titel: {
        type : String,
        required : true
    },
    description : {
        type: String
    },
    content : {
        type : String,
        required : true
    },
    createdBy : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date
    },
    updatedAt : {
        type: Date,
    },
    updatedBy : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    hidden : {
        type: Boolean,
        required : true,
        default: false
    },
    helpRequired : {
        type: Boolean,
        required : true,
        default: true
    },
    skillsRequiredForHelp : [{
        type: String
    }],
    colloborators : [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    toJSON : {
        virtuals : true
    }
});

const Project = new model('Project',ProjectSchema);
model.exports = Project;