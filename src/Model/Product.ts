import { Schema, model } from "mongoose";

type ProductType = {
    id_category: string;
    description: string;
    price: number;
    status: string;
    amount: number;
    star: number;
    views: number;
    image: string;
    localization: string;
    discount: boolean;
    valueDiscount: number; 
}

const schema = new Schema<ProductType>({
    id_category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    star: {
        type: Number
    },
    views: {
        type: Number
    },
    image: {
        type: String
    },
    localization: {
        type: String,
    },
    discount: {
        type: Boolean,
    },
    valueDiscount: {
        type: Number
    }
});

const modelName: string = 'Products';

export default model(modelName, schema);
