import { Schema, model } from 'mongoose';

type UserDataType = {
    id_user: string,
    full_name: string,
    cpf: number,
    phone: number,
    born_date: string
}

const schema = new Schema<UserDataType>({
    id_user: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    born_date: {type: String}
});

const modelName: string = "UserData";

export default model(modelName, schema);