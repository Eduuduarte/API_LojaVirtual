import {Request, Response} from 'express';
import { validationResult, matchedData } from 'express-validator';
import * as AuthService from '../Service/AuthService';

export const signup = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({ error: errors.mapped()});
        return;
    }

    const data = matchedData(req);

    const newUser = await AuthService.createUser(data.name, data.email, data.password);

    res.status(201);
    res.json({newUser})
}

export const signin = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.json({error: errors.mapped()});
        return;
    }
    
    const data = matchedData(req);

    const login = await AuthService.loginUser(data.email, data.password);

    res.status(201);
    res.json({login});
}