import Product from "../Model/Product";
import Category from "../Model/Category";

export const catchProduct = () => {

}

export const includeProduct = async (id_category: string, description: string, price: number, status: string, amount: number, image: string, localization: string, discount: boolean, valueDiscount: number) => {
    const cat = await Category.findById(id_category);

    let message;
    if (valueDiscount > 1 || valueDiscount < 0) {
        return message = "Valor do desconto precisa ser um valor entre 0 a 1. Ex.: 0.8";
    }

    const newProduct = new Product();
    newProduct.id_category = id_category;
    newProduct.description = description;
    newProduct.price = price;
    newProduct.status = status;
    newProduct.amount = amount;
    newProduct.image = image;
    newProduct.localization = localization;
    newProduct.discount = discount;
    newProduct.valueDiscount = !valueDiscount ? 0 : valueDiscount;
    newProduct.star = 0;
    newProduct.views = 0;

    const addProduct = await newProduct.save();

    return addProduct;
}