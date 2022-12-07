import User from "../Model/User";
import Product from '../Model/Product';
import Wish from "../Model/Wish";

export const toList = async ( id_user: string, id_product: String ) => {
    const user = await User.findById(id_user);
    const product = await Product.findById(id_product);

    if(!user) {
        return "Usuário não encontrado!"
    }

    if(!product) {
        return "Produto não encontrado!"
    }

    const addWish = new Wish();
    addWish.id_user = id_user;
    addWish.id_product = id_product as string;

    const myWish = await addWish.save();

    return myWish;
}