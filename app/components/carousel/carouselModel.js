import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for carousel
 */

const CarouselScheme = new Schema({
    image: {
        type: String,
    },
    tagline: {
        type: String,
        maxlength: 2000
    },
    tagdesc: {
        type: String,
        maxlength: 2000
    },
},
{timestamps: true});

export default mongoose.model('Carousel', CarouselScheme);