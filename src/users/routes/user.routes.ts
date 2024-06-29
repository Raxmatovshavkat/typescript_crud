import { Router} from 'express';
import UserController from '../controller/userController.js';
import userValidationRules from '../validator/userValidator.js';
import validate from '../middleware/userMiddleware.js';


const router = Router();

router.get("/", UserController.getAllUsersController)
router.get("/:id", UserController.getOneUserController)
router.post("/",userValidationRules(),validate, UserController.createUserController)
router.put("/:id", UserController.updateUserController)
router.delete("/:id", UserController.deleteUserController)



export default router;