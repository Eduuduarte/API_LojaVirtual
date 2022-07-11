import { Schema, model, connection } from 'mongoose';

type UserType = {
    email: string,
    name: string,
    password: string,
    token: string
}

const schema = new Schema<UserType>({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        requerid: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

const modelName = 'User';

export default (connection && connection.models[modelName] ? connection.models[modelName] : model<UserType>(modelName, schema));