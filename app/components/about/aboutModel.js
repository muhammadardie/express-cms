import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for about
 */

const AboutScheme = new Schema({
    image: {
        type: String,
        required: [true, 'Image is required'],
    },
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
    desc: {
        type: String,
        maxlength: 500,
        required: [true, 'Description is required'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Description cannot be empty',
        },
    }
},
{timestamps: true});

export default mongoose.model('About', AboutScheme);