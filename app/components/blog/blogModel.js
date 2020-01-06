import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for carousel
 */

const BlogScheme = new Schema({
    title: {
        type: String,
        required: "What is the blog's title?"
    },
    image: {
        type: String,
    },
    content: {
        type: String,
        required: "What is blog's content?"
    }
}, 
    { 
        timestamps: { createdAt: 'created_at' } 
    }
);

export default mongoose.model('Blog', BlogScheme);