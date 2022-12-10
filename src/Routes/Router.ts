import { Router } from "express";
import { Auth } from "../Middlewares/Auth";
import {Response } from 'express';
import * as AuthController from '../Controller/AuthController';
import * as UserController from '../Controller/UserController';
import * as userValidator  from '../Validator/userValidator';
import * as IdValidator from '../Validator/IdValidator';
import * as AddressController from '../Controller/AddressController';
import * as CategoryController from '../Controller/CategoryController';
import * as ProductController from '../Controller/ProductController';
import * as WishControler from '../Controller/WishController';
import * as RequestsController from '../Controller/RequestsController';
import NumberRequest from "../Model/NumberRequest";

const router = Router();

router.get('/ping', (req, res) => {
    res.json({ pong: true });
});

router.post('/user/signup', userValidator.signup, AuthController.signup);
router.post('/user/signin', userValidator.signin, AuthController.signin);
router.post('/user/change',userValidator.change, AuthController.changePs);

router.post('/user/data', UserController.addData);
router.get('/user/data', Auth, UserController.infoData);
router.put('/user/data', Auth, userValidator.info, UserController.editPhone);

router.get('/address', Auth, AddressController.getAddress);
router.post('/address', Auth, AddressController.addAddress);
router.put('/address/:id', Auth, AddressController.editAddress);
router.delete('/address/:id', Auth, AddressController.delAddress);

router.get('/category', CategoryController.getCategory);
router.post('/category', CategoryController.addCategory);

router.get('/product', ProductController.getProduct);
router.get('/product/:id', ProductController.getOnlyProduct);
router.post('/product', ProductController.addProduct);

router.get('/wish', IdValidator.IdUserValidy, WishControler.getWishList);
router.post('/wish/:id_user/:id_product', IdValidator.verifyId, WishControler.addInWishList);
router.delete('/wish/:id_wish', IdValidator.idWish, WishControler.deleteWish);

router.get('/pedidos', RequestsController.getRequests);
router.post('/pedidos', RequestsController.addRequest);

export default router;
