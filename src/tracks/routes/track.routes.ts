import { Router } from 'express';
import TrackController from '../controller/trackController.js';
import trackValidationRules from '../validator/trackValidator.js';
import validate from '../middleware/trackMiddlleware.js';


const router = Router();
router.get("/", TrackController.getAllTracksController)
router.get("/:id", TrackController.getOneTrackController)
router.post("/",trackValidationRules(),validate, TrackController.createTrackController)
router.put("/:id", TrackController.updateTrackController)
router.delete("/:id", TrackController.deleteTrackController)

export default router;