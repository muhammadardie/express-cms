import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for contact
 */

const ContactScheme = new Schema({
    address: {
        type: String,
        maxlength: 250,
        required: [true, 'Address is required'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Address cannot be empty',
        },
    },
    phone: {
        type: String,
        maxlength: 100,
        required: [true, 'Phone number is required'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Phone number cannot be empty',
        },
    },
    mail: {
        type: String,
        maxlength: 100,
        required: [true, 'Email is required'],
        validate: {
            validator: function (v) {
                return v.trim().length > 0;
            },
            message: 'Email cannot be empty',
        },
    }
},
{timestamps: true});

export default mongoose.model('Contact', ContactScheme);