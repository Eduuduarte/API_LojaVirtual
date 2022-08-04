import { Schema, model } from 'mongoose';

type UserType = {
    email: string,
    name: string,
    passwordHash: string,
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
    passwordHash: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
});

const modelName: string = "User";

export default model(modelName, schema);