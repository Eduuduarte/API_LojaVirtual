import {Request, Response} from 'express';
import * as UserService from '../Service/UserService';
import User from '../Model/User';

export const addData = async (req: Request, res: Response) => {
    let {id} = req.query;
    let {token, full_name, cpf, phone, born_date} = req.body;
    console.log(id);

    const user = await User.findById(id).exec();

    let name = user?.name;

    let newDate = new Date(born_date);
    let newCpf = parseInt(cpf);
    let newPhone = parseInt(phone);

    console.log(token);

    const newInfo = await UserService.addNewData(token, full_name, newCpf, newPhone, newDate);

    res.status(201);
    res.json({newInfo, name});
}