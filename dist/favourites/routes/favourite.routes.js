import { Router } from 'express';
import favouritesController from '../controller/favouritesController.js';
const router = Router();
router.post("/track/:id", favouritesController.addFavoriteTrack);
router.delete("/track/:id", favouritesController.removeFavoriteTrack);
router.post("/album/:id", favouritesController.addFavoriteAlbum);
router.delete("/album/:id", favouritesController.removeFavoriteAlbum);
router.post("/artist/:id", favouritesController.addFavoriteArtist);
router.delete("/artist/:id", favouritesController.removeFavoriteArtist);
export default router;
//# sourceMappingURL=favourite.routes.js.map