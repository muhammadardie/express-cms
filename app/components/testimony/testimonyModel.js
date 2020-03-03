import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for gallery
 */

const TestimonyScheme = new Schema({
    username: {
        type: String,
    },
    avatar: {
        type: String,
    },
    comment: {
        type: String,
    }
},
{timestamps: true});

export default mongoose.model('Testimony', TestimonyScheme);