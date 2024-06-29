import { Request, Response } from 'express';
import FavoritesService from '../service/favoriteService.js';

class FavoritesController {
    async addFavoriteTrack(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const track = await FavoritesService.addFavoriteTrack(id);
            res.status(201).send('Track added to favorites');
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(422).send(errorMessage);
        }
    }

    async removeFavoriteTrack(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await FavoritesService.removeFavoriteTrack(id);
            res.status(204).send();
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(404).send(errorMessage);
        }
    }

    async addFavoriteAlbum(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const album = await FavoritesService.addFavoriteAlbum(id);
            res.status(201).send('Album added to favorites');
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(422).send(errorMessage);
        }
    }

    async removeFavoriteAlbum(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await FavoritesService.removeFavoriteAlbum(id);
            res.status(204).send();
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(404).send(errorMessage);
        }
    }

    async addFavoriteArtist(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const artist = await FavoritesService.addFavoriteArtist(id);
            res.status(201).send('Artist added to favorites');
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(422).send(errorMessage);
        }
    }

    async removeFavoriteArtist(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await FavoritesService.removeFavoriteArtist(id);
            res.status(204).send();
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(404).send(errorMessage);
        }
    }
}

export default new FavoritesController();
