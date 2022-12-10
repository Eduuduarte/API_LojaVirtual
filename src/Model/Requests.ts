import {model, Schema} from 'mongoose';

type product = {
    id_product: string,
    qtd: number,
    valorU: number
}

type RequestsType = {
    id_user: string;
    product: [product];
    id_Status: string;
    id_address: string;
    payment: string; 
    dateRequest: Date;
    requestNumber: number;
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
    id_Status: {
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
    },
    requestNumber: {
        type: Number,
        required: true
    }
});

const modelName: string = 'Request';

export default model(modelName, schema);