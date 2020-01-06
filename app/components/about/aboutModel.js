import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for about
 */

const AboutScheme = new Schema({
    image: {
        type: String,
    },
    title: {
        type: String,
        maxlength: 2000
    },
    desc: {
        type: String
    }
});

export default mongoose.model('About', AboutScheme);