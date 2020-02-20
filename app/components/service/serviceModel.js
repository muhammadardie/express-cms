import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for service
 */

const ServiceScheme = new Schema({
    title: {
        type: String,
        maxlength: 150
    },
    icon: {
        type: String,
        maxlength: 100
    },
    desc: {
        type: String,
    }
},
{timestamps: true});

export default mongoose.model('Service', ServiceScheme);