import { Schema, model } from 'mongoose';

type AddressType = {
    id_user: string,
    zipcode: number,
    city: string,
    state: string,
    street: string,
    street_number: number
}

const schema = new Schema<AddressType>({
    id_user: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    street_number: {
        type: Number,
        required: true
    }

});

const modelName: string = 'Address';

export default model(modelName, schema);