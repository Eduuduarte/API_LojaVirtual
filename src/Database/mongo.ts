import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () => {
    try {
        await connect( process.env.MONGO_URL as string );
    } catch(error) {
        console.log("Erro conexão MongoDB.", error);
    }
}