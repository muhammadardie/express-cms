import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for carousel
 */

const TeamScheme = new Schema({
    name: {
        type: String,
        maxlength: 150,
        required: [true, 'Name is required'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Name cannot be empty',
        },
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
    },
    position: {
        type: String,
        maxlength: 150,
        required: [true, 'Position is required'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Position cannot be empty',
        },
    },
    quote: {
        type: String,
        maxlength: 500,
        required: [true, 'Quote is required'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Quote cannot be empty',
        },
    }
},
{timestamps: true});

export default mongoose.model('Team', TeamScheme);