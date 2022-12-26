import { Request, Response } from 'express';
import { uploadFile } from '../Service/firebase/firebase';
import * as ProductService from '../Service/ProductService';
import Product from '../Model/Product';
import { ObjectId } from 'mongoose';
import Category from '../Model/Category';

export const getProduct = async (req: Request, res: Response) => {
    const {id_category, status} = req.query;
    console.log(id_category, status);

    const products = await ProductService.catchProduct(id_category as string, status as string);

    res.json({products});
}

export const getOnlyProduct = async (req: Request, res: Response) => {
    const {id} = req.params;

    let product;
    if(id.length == 24){
        product = await Product.findById(id);
    }

    res.json({product});
}

export const addProduct = async (req: Request, res: Response) => {
    let {
        id_category,
        description,
        price = 0,
        status,
        amount = 0,
        image,
        localization,
        discount = false,
        valueDiscount = 0,
        infoProduct
    } = req.body;

    let message;

    if (valueDiscount != 0) {
        discount = true;
    }

    const id = id_category;
    
    if(id.length == 24) {
        const cat = await Category.findById(id);
        if(cat) {
            const add = await ProductService.includeProduct(
                id_category as ObjectId,
                description as string,
                price as number,
                status as string,
                amount as number,
                image as string,
                localization as string,
                discount as boolean,
                valueDiscount as number,
                infoProduct as object
            );
    
            message = add;
        } else {
            message = "Categoria não cadastrada!"
        }
    } else {
        message = "Erro no Id_category!"
    }

    res.json({ message });
}

export const attachImage = async (req: Request, res: Response) => {
    const file = req.file;
    const { idProduct } = req.params;
    let message;

    const product = await Product.findById(idProduct);

    if(!file) {
        message = "favor, adicione um arquivo";
    } else if(product) {
        const task = await uploadFile(file as Express.Multer.File);

        const upload = await ProductService.uploadImage(idProduct, task);

        message = `imagem: ${task}`;
    } else {
        message = " Produto não encontrado."
    }

    res.json({message});
}

export const updateProduct = async ( req: Request, res: Response) => {
    const {id} = req.params;

    const { description, price, status, amount, discount, valueDiscount, star, views } = req.body;

    const productUp = await ProductService.editProduct(id, description, price, status, amount, discount, valueDiscount, star, views);


    res.json({productUp});
}

export const deleteProduct = async (req: Request, res: Response) => {
    const {id} = req.params;
    let message;

    const product = await Product.findById(id);

    if(!product) {
        message = "produto não existe!"
    } else {
        await product.deleteOne();
        message = "Produto deletado!"
    }

    res.json({message});

}