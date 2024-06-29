import { Router } from 'express';
import ArtistController from '../controller/artistController.js';
const router = Router();
router.get("/", ArtistController.getAllArtistsController);
router.get("/:id", ArtistController.getOneArtistController);
router.post("/", ArtistController.createArtistController);
router.put("/:id", ArtistController.updateArtistController);
router.delete("/:id", ArtistController.deleteArtistController);
export default router;
//# sourceMappingURL=artist.routes.js.map