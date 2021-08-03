import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const authenticateUserController = new AuthenticateUserController();

router.post('/users', userController.create);
router.get('/users', userController.ready);
router.get('/users/:id', userController.readyById);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

router.post('/login', authenticateUserController.handle);

export default router