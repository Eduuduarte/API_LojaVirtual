import { ObjectId } from "mongoose";
import User from "../Model/User";
import UserData from "../Model/UserData";

export const addNewData = async (id_user: string, token: string, full_name: string, cpf: number, phone: number, born_date: string) => {
    const user = await User.findOne({token});
    if(!user?.token){
        return "Usuário não encontrado!";
    }

    const data = await UserData.findOne({cpf});
    if(data?.cpf) {
        return "CPF já cadastrado!"
    }

    const validorPhone = await UserData.findOne({phone});
    if(validorPhone?.phone){
        return "Telefone já existe!"
    }

    const addData = new UserData();
    addData.id_user = id_user;
    addData.full_name = full_name;
    addData.cpf = cpf;
    addData.phone = phone;
    addData.born_date = born_date;

    const myData = await addData.save();

    return myData;

}

export const getData = async (token: string) => {
    const user = await User.findOne({token});

    if(!user?.id) {
        return "Usuário não existe";
    }


    const data = await UserData.findOne({id_user: user.id});

    return data;

}

export const updatePhone = async (token: string, phone: number) => {
    let user = await User.findOne({token});

    let userData = await UserData.findOne({phone});


    if(userData?.phone){
        return "Telefone já cadastrado!";
    }

    let update = await UserData.findOneAndUpdate({id_user: user?.id}, {phone});

    return update;

}