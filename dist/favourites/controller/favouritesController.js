import FavoritesService from '../service/favoriteService.js';
class FavoritesController {
    async addFavoriteTrack(req, res) {
        const { id } = req.params;
        try {
            const track = await FavoritesService.addFavoriteTrack(id);
            res.status(201).send('Track added to favorites');
        }
        catch (error) {
            const errorMessage = error.message;
            res.status(422).send(errorMessage);
        }
    }
    async removeFavoriteTrack(req, res) {
        const { id } = req.params;
        try {
            await FavoritesService.removeFavoriteTrack(id);
            res.status(204).send();
        }
        catch (error) {
            const errorMessage = error.message;
            res.status(404).send(errorMessage);
        }
    }
    async addFavoriteAlbum(req, res) {
        const { id } = req.params;
        try {
            const album = await FavoritesService.addFavoriteAlbum(id);
            res.status(201).send('Album added to favorites');
        }
        catch (error) {
            const errorMessage = error.message;
            res.status(422).send(errorMessage);
        }
    }
    async removeFavoriteAlbum(req, res) {
        const { id } = req.params;
        try {
            await FavoritesService.removeFavoriteAlbum(id);
            res.status(204).send();
        }
        catch (error) {
            const errorMessage = error.message;
            res.status(404).send(errorMessage);
        }
    }
    async addFavoriteArtist(req, res) {
        const { id } = req.params;
        try {
            const artist = await FavoritesService.addFavoriteArtist(id);
            res.status(201).send('Artist added to favorites');
        }
        catch (error) {
            const errorMessage = error.message;
            res.status(422).send(errorMessage);
        }
    }
    async removeFavoriteArtist(req, res) {
        const { id } = req.params;
        try {
            await FavoritesService.removeFavoriteArtist(id);
            res.status(204).send();
        }
        catch (error) {
            const errorMessage = error.message;
            res.status(404).send(errorMessage);
        }
    }
}
export default new FavoritesController();
//# sourceMappingURL=favouritesController.js.map