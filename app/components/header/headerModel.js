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
        required: [true, 'Page is required'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Page cannot be empty',
        },
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
    },
    tagline: {
        type: String,
        required: [true, 'Tagline is required'],
        maxlength: [250, 'Tagline must not exceed 250 characters'], 
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Tagline cannot be empty',
        },
    },
    tagdesc: {
        type: String,
        required: [true, 'Tag description is required'],
        maxlength: [2000, 'Tag description must not exceed 2000 characters'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Tag description cannot be empty',
        },
    },
});

export default mongoose.model('Header', HeaderScheme);