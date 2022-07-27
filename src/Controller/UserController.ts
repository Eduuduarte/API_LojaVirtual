import {Request, Response} from 'express';
import * as UserService from '../Service/UserService';
import User from '../Model/User';

export const addData = async (req: Request, res: Response) => {
    let {id, token, full_name, cpf, phone, born_date} = req.body;

    let newCpf = parseInt(cpf);
    let newPhone = parseInt(phone);

    const newInfo = await UserService.addNewData(id, token, full_name, newCpf, newPhone, born_date);

    res.status(201);
    res.json({newInfo});
}