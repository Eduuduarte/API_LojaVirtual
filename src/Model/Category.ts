import { Schema, model } from "mongoose";

type CategoryType = {
    description: string;
}

const schema = new Schema<CategoryType>({
    description: {
        type: String,
        required: true
    }
});

const modelName: string = 'Categories';

export default model(modelName, schema);