import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for service
 */

const ServiceScheme = new Schema({
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
    desc: {
        type: String,
        maxlength: [200, 'Description must not exceed 200 characters'], 
    }
},
{timestamps: true});

export default mongoose.model('Service', ServiceScheme);