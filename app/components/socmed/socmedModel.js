import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for socmed
 */

const SocmedScheme = new Schema({
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
    icon: {
        type: String,
        maxlength: [100, 'Icon must not exceed 100 characters'], 
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'icon cannot be empty',
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
},
{timestamps: true});

export default mongoose.model('Socmed', SocmedScheme);