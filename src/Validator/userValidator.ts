import { checkSchema } from 'express-validator';

export const signup = checkSchema({
    name: {
        trim: true,
        isLength: {
            options: { min: 2 }
        },
        errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
    },
    email: {
        isEmail: true,
        normalizeEmail: true,
        errorMessage: 'Email inválido'
    },
    password: {
        isLength: {
            options: { min: 2}
        },
        errorMessage: 'Senha precisa ter pelo menos 2 carecteres'
    }
});

export const signin = checkSchema ({

});