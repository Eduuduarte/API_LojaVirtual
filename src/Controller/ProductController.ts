import { Request, Response } from 'express';
import * as ProductService from '../Service/ProductService';
import Product from '../Model/Product';
import { ObjectId } from 'mongoose';
import Category from '../Model/Category';

export const getProduct = async (req: Request, res: Response) => {
    const {id_category, status} = req.query;
    console.log(id_category, status);

    const products = await ProductService.catchProduct(id_category as string, status as string);

    res.json({products});
}

export const getOnlyProduct = async (req: Request, res: Response) => {
    const {id} = req.params;

    let product;
    if(id.length == 24){
        product = await Product.findById(id);
    }

    res.json({product});
}

export const addProduct = async (req: Request, res: Response) => {
    let {
        id_category,
        description,
        price = 0,
        status,
        amount = 0,
        image,
        localization,
        discount = false,
        valueDiscount = 0,
        infoProduct
    } = req.body;

    let message;

    if (valueDiscount != 0) {
        discount = true;
    }

    const id = id_category;
    console.log(id.length);

    if(id.length == 24) {
        const cat = await Category.findById(id);
        if(cat) {
            const add = await ProductService.includeProduct(
                id_category as ObjectId,
                description as string,
                price as number,
                status as string,
                amount as number,
                image as string,
                localization as string,
                discount as boolean,
                valueDiscount as number,
                infoProduct as object
            );
    
            message = add;
        } else {
            message = "Categoria não cadastrada!"
        }
    } else {
        message = "Erro no Id_category!"
    }

    res.json({ message });
}

