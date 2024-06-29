import { Router } from 'express';
import AlbumController from '../controller/albumController.js';
import albumValidationRules from '../validator/albumValidator.js';
import validate from '../middleware/albumMiddleware.js';


const router = Router();
router.get("/", AlbumController.getAllAlbumsController)
router.get("/:id", AlbumController.getOneAlbumController)
router.post("/",albumValidationRules(),validate, AlbumController.createAlbumController)
router.put("/:id", AlbumController.updateAlbumController)
router.delete("/:id", AlbumController.deleteAlbumController)

export default router;