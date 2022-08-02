import {Request, Response} from 'express';
import { validationResult, matchedData } from 'express-validator';
import * as UserService from '../Service/UserService';

export const addData = async (req: Request, res: Response) => {
    let {id, token, full_name, cpf, phone, born_date} = req.body;

    let newCpf = parseInt(cpf);
    let newPhone = parseInt(phone);

    const newInfo = await UserService.addNewData(id, token, full_name, newCpf, newPhone, born_date);

    res.status(201);
    res.json({newInfo});
}

export const infoData = async (req: Request, res: Response) => {
    let { token } = req.query;

    const info = await UserService.getData(token as string);

    res.json({info});
}