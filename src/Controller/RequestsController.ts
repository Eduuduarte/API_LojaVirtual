import {Request, Response } from 'express';

export const getRequests = async (req: Request, res: Response) => {

}

export const addRequest = async (req: Request, res: Response) => {
    const {id_user, product} = req.body;

    console.log("produtos: ", product);


    res.json({message: 'Feito!'});
}