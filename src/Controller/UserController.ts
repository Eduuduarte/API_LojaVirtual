import {Request, Response} from 'express';
import * as UserService from '../Service/UserService';

export const addData = async (req: Request, res: Response) => {
    let {id_user, full_name, cpf, phone, born_date} = req.body;

    let newDate = new Date(born_date);
    let id = parseInt(id_user);
    let newCpf = parseInt(cpf);
    let newPhone = parseInt(phone);

    const newInfo = await UserService.addNewData(id, full_name, newCpf, newPhone, newDate);

    res.status(201);
    res.json(newInfo);
}