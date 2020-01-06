import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for inbox
 */

const InboxScheme = new Schema({
    name: {
        type: String,
        required: "username is required"
    },
    mail: {
        type: String,
        required: "email is required"
    },
    message: {
        type: String,
        required: "message is required"
    },
    page: {
        type: String,
        enum : ['received', 'readed', 'replied'],
        default: 'received'
    },
});

export default mongoose.model('Inbox', InboxScheme);