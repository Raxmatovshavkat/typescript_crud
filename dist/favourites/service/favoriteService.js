import Artist from '../../artists/model/artistModel.js';
import Album from '../../albums/model/albumModel.js';
import Track from '../../tracks/model/trackModel.js';
import Favorites from '../model/favouriteModel.js';
class FavoritesService {
    async addFavoriteTrack(trackId) {
        const track = await Track.findByPk(trackId);
        if (!track)
            throw new Error('Track not found');
        await Favorites.create({ trackId });
        return track;
    }
    async removeFavoriteTrack(trackId) {
        const favorite = await Favorites.findOne({ where: { trackId } });
        if (!favorite)
            throw new Error('Track not found in favorites');
        await favorite.destroy();
    }
    async addFavoriteAlbum(albumId) {
        const album = await Album.findByPk(albumId);
        if (!album)
            throw new Error('Album not found');
        await Favorites.create({ albumId });
        return album;
    }
    async removeFavoriteAlbum(albumId) {
        const favorite = await Favorites.findOne({ where: { albumId } });
        if (!favorite)
            throw new Error('Album not found in favorites');
        await favorite.destroy();
    }
    async addFavoriteArtist(artistId) {
        const artist = await Artist.findByPk(artistId);
        if (!artist)
            throw new Error('Artist not found');
        await Favorites.create({ artistId });
        return artist;
    }
    async removeFavoriteArtist(artistId) {
        const favorite = await Favorites.findOne({ where: { artistId } });
        if (!favorite)
            throw new Error('Artist not found in favorites');
        await favorite.destroy();
    }
}
export default new FavoritesService();
//# sourceMappingURL=favoriteService.js.map