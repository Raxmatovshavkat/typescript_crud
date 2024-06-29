import userRouter from "../users/routes/user.routes.js";
import trackRouter from "../tracks/routes/track.routes.js";
import albomRouter from "../albums/routes/album.routes.js";
import artistRouter from "../artists/routes/artist.routes.js";
import favoriteRouter from "../favourites/routes/favourite.routes.js";
import { Router } from 'express';
const router = Router();
router.use("/user", userRouter);
router.use("/track", trackRouter);
router.use("/albom", albomRouter);
router.use("/artist", artistRouter);
router.use("/favorite", favoriteRouter);
export default router;
//# sourceMappingURL=index.routes.js.map