import {Request, Response} from 'express';
import * as AddressService from '../Service/AddressService';

export const getAddress = async (req: Request, res: Response) => {
    const {token} = req.query;

    const address = await AddressService.catchAddress(token as string);

    res.json({address})
}

export const addAddress = async (req: Request, res: Response) => {
    const {zipcode = 0, city, state, street, street_number = 0, token} = req.query;

    const add = await AddressService.newAddress(
        zipcode as number,
        city as string, 
        state as string,
        street as string, 
        street_number as number, 
        token as string
        );

    res.json({add});
}

export const editAddress = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {zipcode =0, city, state, street, street_number = 0, token} = req.query;

    const edit = await AddressService.changeAddress(
        id,
        zipcode as number,
        city as string,
        state as string,
        street as string,
        street_number as number,
        token as string
    );

    res.json({edit});
}