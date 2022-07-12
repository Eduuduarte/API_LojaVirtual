import { Router } from "express";
import * as AuthController from '../Controller/AuthController'

const router = Router();

router.get('/ping', (req, res) => {
    res.json({ pong: true });
});

router.post('/user/signup', AuthController.signup);

export default router;
