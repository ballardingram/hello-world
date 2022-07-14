const {Schema, model} = require('mongoose');
const DonationSchema = new Schema(
    {
        donor : {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        receiver : {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        amount : {
            type: Number
        },
        donatedOn : {
            type: String
        }
    },{
        toJSON : {
            virtuals : true
        }
    }
);

const Donation = model('Donation', DonationSchema);
module.exports = Donation;