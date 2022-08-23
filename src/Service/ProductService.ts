import Product from "../Model/Product";
import Category from "../Model/Category";

export const catchProduct = () => {

}

export const includeProduct = async (id_category: string, description: string, price: number, status: string, amount: number, image: string, localization: string, discount: boolean, valueDiscount: number ) => {
    console.log(id_category);

    const cat = await Category.findById(id_category);

    return cat;
}