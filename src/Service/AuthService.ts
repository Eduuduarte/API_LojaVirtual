import User from '../Model/User';
import bcrypt from 'bcrypt';

export const createUser = async (name: string, email: string, password: string) => {
    const passwordHash = (await bcrypt.hash(password, 10)).toString();
    const payload = (Date.now() + Math.random()).toString();
    const token = await bcrypt.hash(payload, 10);

    let hasUser = await User.findOne({email});

    if(hasUser) {
        return `Email já existe`
    }

    const newUser = new User({
        name,
        email,
        passwordHash,
        token
    });

    await newUser.save();

    return newUser;
}

export const loginUser = async (email: string, passwordHash: string) => {
    const user = await User.findOne({email});

    if(!user) {
        return "Email e/ou senha não cadastrado."
    }

    const match = await bcrypt.compare(passwordHash, user.passwordHash);
    if(!match) {
        return "Email e/ou senha não cadastrado.";
    }

    const payload = (Date.now() + Math.random()).toString();
    const token = await bcrypt.hash(payload, 10);

    user.token = token;
    await user.save();

    return token;
}

export const replacePs = async (token: string, newPassword: string) => {
    const user = await User.findOne({token});
    const payload = (Date.now() + Math.random()).toString();
    token = ( await bcrypt.hash(payload, 10)).toString();

    console.log(user);

    if(!user?.id) {
        return "Usuário inexistente!"
    }

    
    const passwordHash = (await bcrypt.hash(newPassword, 10)).toString();


    let update = await User.findOneAndUpdate({_id: user.id}, {passwordHash, token});

    return update;
}