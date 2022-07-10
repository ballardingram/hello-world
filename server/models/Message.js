const {Schema, model} = require('mongoose');
const MessageSchema = new Schema({
    sender : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required : true
    },
    receiver : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required : true
    },
    content : {
        type: String,
        required : true
    },
    createdAt : {
        type: Date,
        required: true
    }
},{
    toJSON : {
        virtuals : true
    }
});


const Message = new model('Message', MessageSchema);
module.exports = Message;