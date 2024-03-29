import { Schema, model, ObjectId, isValidObjectId } from "mongoose";

type ProductType = {
    id_category: ObjectId;
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
    infoProduct: object; 
}

const schema = new Schema<ProductType>({
    id_category: {
        type: Object,
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
    },
    infoProduct: {
        type: Object
    }
});

const modelName: string = 'Products';

export default model(modelName, schema);
