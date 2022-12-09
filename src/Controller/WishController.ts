import { Request, Response } from "express";
import { validationResult, matchedData } from 'express-validator';
import * as WishService from '../Service/WishService';
import Wish from "../Model/Wish";

export const getWishList = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({ error: errors.mapped()});
        return;
    }
    const { id_user } = req.query;

    const myWish = await Wish.find({id_user: id_user});

    res.json({myWish});
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

export const deleteWish = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({ error: errors.mapped()});
        return;
    }

    const {id_wish} = req.params;

    const itemList = await Wish.findById(id_wish);

    if(!itemList) {
        res.json({error: 'Item não encontrado na lista!'});
        return;
    }

    itemList.delete();

    res.json({delete: 'Item deletado!'});
}