import { model, Schema } from "mongoose";

type WishType = {
id_user: string;
id_product: string;
}

const schema = new Schema<WishType>({
 id_user: {
    type: String,
    required: true
 },
 id_product: {
    type: String,
    required: true
 }
});

const modelName: string = "Wish";

export default model(modelName, schema);