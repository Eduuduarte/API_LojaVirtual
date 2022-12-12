import {Request, Response } from 'express';
import Requests from '../Model/Requests';
import * as RequestService from '../Service/RequestsService';

export const getRequests = async (req: Request, res: Response) => {
    const {id_user} = req.params;

    const requests = await Requests.find({id_user: id_user});

    res.json(requests);
}

export const getOnlyRequest = async (req: Request, res: Response) => {
    const {id} = req.params;

    const myRequest = await Requests.findById(id);

    res.json(myRequest);
}

export const addRequest = async (req: Request, res: Response) => {
    const {id_user, id_address, product, status, payment } = req.body;

    const newDate = new Date();

    const makeRequest = await RequestService.newRequest(id_user, id_address, product, status, payment, newDate);

    res.json({makeRequest});
}