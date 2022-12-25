import { Request, Response } from 'express';

import { uploadFile } from '../Database/Firebase/firebase';



export const testandoUpload = async (req: Request, res: Response) => {
    const file = req.file;

    const { infoProduct } = req.body;

    const task = await uploadFile(file as Express.Multer.File);


    res.json({task, infoProduct});
}