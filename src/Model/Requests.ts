import {model, Schema} from 'mongoose';
import { Product } from '../types/Product';



type RequestsType = {
    id_user: string;
    product: [Product];
    status: string;
    id_address: string;
    payment: string; 
    dateRequest: Date;
}

const schema = new Schema<RequestsType>({
    id_user: {
        type: String,
        required: true
    },
    product: {
        type: [],
        required: true
    },
    status: {
        type: String,
        required: true
    },
    id_address: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    dateRequest: {
        type: Date,
        required: true
    }
});

const modelName: string = 'Request';

export default model(modelName, schema);