import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for socmed
 */

const SocmedScheme = new Schema({
    name: {
        type: String,
        required: "What is the name of social media?"
    },
    url: {
        type: String,
        required: "What is the url of social media?"
    }
});

export default mongoose.model('Socmed', SocmedScheme);