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