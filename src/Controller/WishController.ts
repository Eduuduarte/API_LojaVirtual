import { Request, Response } from "express";
import { validationResult, matchedData } from 'express-validator';
import * as WishService from '../Service/WishService';

export const getWishList = (req: Request, res: Response) => {
    const { id_user } = req.query;


    res.json({message: "Ok!"});
}

export const addInWishList = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({ error: errors.mapped()});
        return;
    }

    const {id_user, id_product} = req.params;

    const addInList = await WishService.toList(id_user, id_product);

    res.json({addInList});
}