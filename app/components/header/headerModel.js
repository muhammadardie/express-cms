import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for carousel
 */

const HeaderScheme = new Schema({
    page: {
        type: String,
        enum : ['Work', 'Feature', 'Blog', 'About', 'Contact'],
        default: 'Work',
        required: "What is the header's page?"
    },
    image: {
        type: String,
    },
    tagline: {
        type: String,
        required: "What is header's tagline?"
    },
    tagdesc: {
        type: String,
        required: "What is header's tagdesc?"
    }
});

export default mongoose.model('Header', HeaderScheme);