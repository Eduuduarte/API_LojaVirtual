import {Request, Response } from 'express';
import * as RequestService from '../Service/RequestsService';

export const getRequests = async (req: Request, res: Response) => {

}

export const addRequest = async (req: Request, res: Response) => {
    const {id_user, id_address, product, status, payment } = req.body;

    const newDate = new Date();
    const dateFormat = newDate.toLocaleDateString('pt-br');
    console.log(dateFormat);

    const makeRequest = await RequestService.newRequest(id_user, id_address, product, status, payment, newDate);

    res.json({makeRequest});
}