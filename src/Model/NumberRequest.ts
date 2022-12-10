import {model, Schema} from 'mongoose';

type NumberRequest = {
    number: string;
}

const schema = new Schema<NumberRequest>({
    number: {
        type: String,
        required: true
    }
});

const modelName: string = 'RequestNumber';

export default model(modelName, schema);