import Requests from "../Model/Requests"
import { Product } from "../types/Product";


export const newRequest = async (
    id_user: string, 
    id_address: string, 
    product: [Product], 
    status: string,
    payment: string,
    date: Date
) => {

    const newRequest = new Requests();
    newRequest.id_user = id_user;
    newRequest.id_address = id_address;
    newRequest.product = product;
    newRequest.status = status;
    newRequest.payment = payment;
    newRequest.dateRequest = date;

    const addRequest = await newRequest.save();

    return newRequest;
}