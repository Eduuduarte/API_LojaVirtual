import { Router } from "express";
import * as AuthController from '../Controller/AuthController'
import * as userValidator  from '../Validator/userValidator'

const router = Router();

router.get('/ping', (req, res) => {
    res.json({ pong: true });
});

router.post('/user/signup', userValidator.signup, AuthController.signup);
router.post('/user/signup', userValidator.signin, AuthController.signin);

export default router;
