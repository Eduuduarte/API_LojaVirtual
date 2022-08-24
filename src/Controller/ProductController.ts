import { Request, Response } from 'express';
import * as ProductService from '../Service/ProductService';

export const getProduct = async (req: Request, res: Response) => {

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
        valueDiscount = 0
    } = req.query;

    if (valueDiscount != 0) {
        discount = true;
    }

    const add = await ProductService.includeProduct(
        id_category as string,
        description as string,
        price as number,
        status as string,
        amount as number,
        image as string,
        localization as string,
        discount as boolean,
        valueDiscount as number
    );





    res.json({ add });
}

