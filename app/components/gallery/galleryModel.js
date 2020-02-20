import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for gallery
 */

const GalleryScheme = new Schema({
    title: {
        type: String,
    },
    url: {
        type: String,
    },
    image: {
        type: String,
    },
    desc: {
        type: String,
    }
},
{timestamps: true});

export default mongoose.model('Gallery', GalleryScheme);