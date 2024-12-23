import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for gallery
 */

const TestimonyScheme = new Schema({
    username: {
        type: String,
        maxlength: 150,
        required: [true, 'Username is required'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Username cannot be empty',
        },
    },
    avatar: {
        type: String,
        required: [true, 'Image is required'],
    },
    comment: {
        type: String,
        maxlength: 500,
        required: [true, 'Comment is required'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Comment cannot be empty',
        },
    },
},
{timestamps: true});

export default mongoose.model('Testimony', TestimonyScheme);