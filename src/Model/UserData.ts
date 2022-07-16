import {Schema, connection, model, modelNames} from 'mongoose';

type UserDataType = {
    id_user: number,
    full_name: string,
    cpf: number,
    phone: number,
    born_date: Date
}

const schema = new Schema<UserDataType>({
    id_user: {
        type: Number,
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
    born_date: {type: Date}
});

const modelName: string = "UserData";

export default model(modelName, schema);