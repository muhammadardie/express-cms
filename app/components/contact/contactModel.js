import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for contact
 */

const ContactScheme = new Schema({
    address: {
        type: String,
        required: "What is the contact address?"
    },
    phone: {
        type: String,
        required: "What is the contact phone?"
    },
    mail: {
        type: String,
        required: "What is the contact mail?"
    }
},
{timestamps: true});

export default mongoose.model('Contact', ContactScheme);