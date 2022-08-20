import {Request, Response } from 'express';
import Category from '../Model/Category';

export const getCategory = async (req: Request, res: Response) => {
    const cat = await Category.find();

    res.json({cat});
}

export const addCategory = async (req: Request, res: Response) => {
    const { description } = req.query;

    const search = await Category.findOne({description});

    let message;

    if(search?.description){
        res.status(202);
        message = "Categoria já existe!"
    } else {
        const cat = new Category();
        cat.description = description as string;

        message = await cat.save();
    }

 
    res.json({message});
}