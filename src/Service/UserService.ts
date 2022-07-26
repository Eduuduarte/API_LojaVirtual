import { ObjectId } from "mongoose";
import User from "../Model/User";

export const addNewData = async (token: string, full_name: string, cpf: number, phone: number, born_date: Date) => {
    const user = await User.findOne({token});
    if(!user?.token){
        return "Usuário não encontrado!";
    }

    return `Usuário encontrado!`

}