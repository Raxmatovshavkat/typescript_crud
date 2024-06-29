import { Router } from 'express';
import ArtistController from '../controller/artistController.js';
import artistValidationRules from '../validator/artistValidator.js';
import validate from '../middleware/artistMiddleware.js';


const router = Router();
router.get("/", ArtistController.getAllArtistsController)
router.get("/:id", ArtistController.getOneArtistController)
router.post("/",artistValidationRules(),validate, ArtistController.createArtistController)
router.put("/:id", ArtistController.updateArtistController)
router.delete("/:id", ArtistController.deleteArtistController)

export default router;