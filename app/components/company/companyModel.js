import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for carousel
 */

const CompanyScheme = new Schema({
    title: {
        type: String,
        required: "What is the company's title?"
    },
    image: {
        type: String,
    },
    desc: {
        type: String,
        required: "What is company's description?"
    }
},
{timestamps: true});

export default mongoose.model('Company', CompanyScheme);