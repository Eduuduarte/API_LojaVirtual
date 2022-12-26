import { Router } from "express";
import { Auth } from "../Middlewares/Auth";
import * as AuthController from '../Controller/AuthController';
import * as UserController from '../Controller/UserController';
import * as userValidator from '../Validator/userValidator';
import * as IdValidator from '../Validator/IdValidator';
import * as AddressController from '../Controller/AddressController';
import * as CategoryController from '../Controller/CategoryController';
import * as ProductController from '../Controller/ProductController';
import * as WishControler from '../Controller/WishController';
import * as RequestsController from '../Controller/RequestsController';
import * as TesteController from '../Controller/TesteController';
import multer from "multer";

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
        cb(null, allowed.includes(file.mimetype))
    }
})

const router = Router();

router.get('/ping', (req, res) => {
    res.json({ pong: true });
});

router.post('/teste', upload.single('imagem'), TesteController.testandoUpload);

// Rotas para o usuário
router.post('/user/signup', userValidator.signup, AuthController.signup);
router.post('/user/signin', userValidator.signin, AuthController.signin);
router.post('/user/change', userValidator.change, AuthController.changePs);

// Rotas para o dados do usuário
router.post('/user/data', UserController.addData);
router.get('/user/data', Auth, UserController.infoData);
router.put('/user/data', Auth, userValidator.info, UserController.editPhone);

// Rotas para o endereço do usuário
router.get('/address', Auth, AddressController.getAddress);
router.post('/address', Auth, AddressController.addAddress);
router.put('/address/:id', Auth, AddressController.editAddress);
router.delete('/address/:id', Auth, AddressController.delAddress);

// Rotas da lista de desejos do usuário
router.get('/wish',Auth, IdValidator.IdUserValidy, WishControler.getWishList);
router.post('/wish/:id_user/:id_product',Auth, IdValidator.verifyId, WishControler.addInWishList);
router.delete('/wish/:id_wish', IdValidator.idWish,Auth, WishControler.deleteWish);

// Rotas para os pedidos do usuário
router.get('/pedidos/:id_user', Auth, RequestsController.getRequests);
router.get('/pedido/:id', Auth, RequestsController.getOnlyRequest)
router.post('/pedidos', Auth, RequestsController.addRequest);

// Rotas para categoria do produto
router.get('/category', CategoryController.getCategory);
router.post('/category', CategoryController.addCategory);

// Rotas para o produto
router.get('/product', ProductController.getProduct);
router.get('/product/:id', ProductController.getOnlyProduct);
router.post('/product', ProductController.addProduct);
router.post('/product/:idProduct', upload.single('imagem'), ProductController.attachImage);
router.put('/product/:id', ProductController.updateProduct);
router.delete('/product/:id', ProductController.deleteProduct);

export default router;