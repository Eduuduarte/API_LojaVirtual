import Product from "../Model/Product";
import Category from "../Model/Category";

interface filter {
    id_category: string;
    status: string;
}

export const catchProduct = async (id_category: string, status: string) => {
    const cat = await Category.findById(id_category);
    let filter: Partial<filter> = {};

    if(!cat?.id && id_category) {
        return "Categoria não existe!"
    }
    if(id_category) {
        filter.id_category = id_category;
    }

    if(status) {
        filter.status = status;
    }

    const list = await Product.find(filter);

    return list;
}

export const includeProduct = async (id_category: string, description: string, price: number, status: string, amount: number, image: string, localization: string, discount: boolean, valueDiscount: number, infoProduct: object) => {
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
    newProduct.infoProduct = infoProduct;

    const addProduct = await newProduct.save();

    return addProduct;
}