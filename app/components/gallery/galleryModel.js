import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for gallery
 */

const GalleryScheme = new Schema({
    title: {
        type: String,
        maxlength: 150,
        required: [true, 'Title is required'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Title cannot be empty',
        },
    },
    url: {
        type: String,
        required: [true, 'URL is required'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'URL cannot be empty',
        },
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
    },
    desc: {
        type: String,
    }
},
{timestamps: true});

export default mongoose.model('Gallery', GalleryScheme);