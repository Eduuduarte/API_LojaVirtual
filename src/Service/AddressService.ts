import Address from "../Model/Address";
import User from "../Model/User";

type AddressType = {
    zipcode: number,
    city: string,
    state: string,
    street: string,
    street_number: number
}


export const catchAddress = async (token: string) => {
    const user = await User.findOne({token});

    if(!user?._id) {
        return "Usuário não existe!"
    }

    console.log(user?._id);

    const address = await Address.find({id_user: user?._id});

    return address;
}

export const newAddress = async (zipcode: number, city: string, state: string, street: string, street_number: number, token: string) => {
    const user = await User.findOne({token});

    if(!user?._id) {
        return "Usuário não existe!"
    }

    const checkAddress = await Address.findOne({id_user: user._id, zipcode});

    if(checkAddress?._id) {
        return "Endereço já cadastrado!"
    }

    const addAddress = new Address();
    addAddress.zipcode = zipcode;
    addAddress.city = city;
    addAddress.state = state;
    addAddress.street = street;
    addAddress.street_number = street_number;
    addAddress.id_user = user._id.toString();


    addAddress.save();

    return addAddress;
}

export const changeAddress = async (id: string, zipcode: number, city: string, state: string, street: string, street_number: number, token: string) => {
    let address = await Address.findById(id);
    let user = await User.findOne({token});

    // Verificado se o endereço pertence ao usuário
    if(address?.id_user != user?._id){
        return "Endereço não pertence ao usuário informado!"
    }

    //Criado objeto
    let upAddress: Partial<AddressType> = {};

    //Adicionando elementos ao objeto
    zipcode ? upAddress.zipcode = zipcode : "";
    city ? upAddress.city = city : "";
    state ? upAddress.state = state : "";
    street ? upAddress.street = street : "";
    street_number ? upAddress.street_number = street_number : "";

    let up = await Address.updateOne({_id: id}, {$set: upAddress});

    let AdrressUp = await Address.findById(id);

    return AdrressUp;
}

export const deleteAddress = async (id: string, token: string) => {
    const address = await Address.findById(id);
    const user = await User.findOne({token});

    const idUser = user?._id;
    const idAddress = address?._id;

    if(idUser === undefined || idAddress === undefined) {
        return "dados informados não existe!"
    }

    if(user?._id != address?.id_user) {
        return "Endereço informado não pertence ao usuário";
    }

    const del = await Address.findByIdAndDelete(id);

    return `${del}, {mensagem: success}`;
}