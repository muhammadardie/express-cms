import mongoose, { Schema } from 'mongoose';

/**
 * Create database schema for carousel
 */

const CarouselSchema = new Schema(
    {
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
    },
    { timestamps: true }
);

export default mongoose.model('Carousel', CarouselSchema);