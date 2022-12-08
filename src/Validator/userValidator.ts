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
    email: {
        isEmail: true,
        normalizeEmail: true,
        errorMessage: 'Email inválido'
    },
    password: {
        isLength: {
            options: {min: 2}
        },
        errorMessage: 'Senha precisa ter pelo menos 2 carecteres'
    }
});

export const change = checkSchema ({
    token: {
        trim: true,
        isLength: {
            options: {min: 2}
        },
        errorMessage: "token inválido"
    },
    password: {
        isLength: {
            options: {min: 2}
        },
        errorMessage: 'Senha precisa ter pelo menos 2 carecteres'
    },
    passwordAgain: {
        isLength: {
            options: {min: 2}
        },
        errorMessage: 'Senha precisa ter pelo menos 2 carecteres'
    }
})

export const info = checkSchema ({
    phone: {
        isLength: {
            options: {
                min: 11
            }
        }
    }
});

export const onlyProduct = checkSchema ({
    id: {
        isLength : {
            options: {
                min: 24
            }
        },
        errorMessage: "Id inválido."
    }
});
