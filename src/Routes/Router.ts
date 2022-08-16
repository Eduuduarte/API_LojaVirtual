import { Router } from "express";
import { Auth } from "../Middlewares/Auth";
import * as AuthController from '../Controller/AuthController';
import * as UserController from '../Controller/UserController';
import * as userValidator  from '../Validator/userValidator';
import * as AddressController from '../Controller/AddressController';

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

export default router;
