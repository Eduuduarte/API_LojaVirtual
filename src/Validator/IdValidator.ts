import { checkSchema } from 'express-validator';

export const IdUserValidy = checkSchema({
    id_user: {
        isLength : {
            options: {
                min: 24
            }
        },
        errorMessage: "Id inválido."
    }
});

export const verifyId = checkSchema ({
    id_user: {
        trim: true,
        isLength : {
            options: {
                min: 24
            }
        },
        errorMessage: "Id_User inválido.",
    },
    id_product: {
        isLength : {
            options: {
                min: 24
            }
        },
        errorMessage: "Id inválido."
    }
});

export const idWish = checkSchema({
    id_wish: {
        trim: true,
        isLength : {
            options: {
                min: 24
            }
        },
        errorMessage: "Id_User inválido.",
    },
})