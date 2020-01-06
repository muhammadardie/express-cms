import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for carousel
 */

const TeamScheme = new Schema({
    name: {
        type: String,
        maxlength: 100
    },
    image: {
        type: String,
    },
    position: {
        type: String,
        maxlength: 100
    },
    quote: {
        type: String,
        maxlength: 2000
    }
});

export default mongoose.model('Team', TeamScheme);