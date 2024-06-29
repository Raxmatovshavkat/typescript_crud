import { Router } from 'express';
import AlbumController from '../controller/albumController.js';
const router = Router();
router.get("/", AlbumController.getAllAlbumsController);
router.get("/:id", AlbumController.getOneAlbumController);
router.post("/", AlbumController.createAlbumController);
router.put("/:id", AlbumController.updateAlbumController);
router.delete("/:id", AlbumController.deleteAlbumController);
export default router;
//# sourceMappingURL=album.routes.js.map