import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    mainImageUrl: {
        type: String,
        required: true
    },
    galleryImages: [
        {
            type: String,
        }
    ],
    isActive: {
        type: Boolean,
        default: true,
    }

}, { timestamps: true });


const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;