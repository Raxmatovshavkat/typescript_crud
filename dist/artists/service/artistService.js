import Artist from '../model/artistModel.js';
class ArtistService {
    async createArtistService(data) {
        const { login, password, version } = data;
        const artist = await Artist.create(data);
        return artist;
    }
    async getAllArtistsService() {
        const artist = await Artist.findAll({});
        return artist;
    }
    async getOneArtistService(id) {
        const artist = await Artist.findByPk(id);
        return artist;
    }
    async updateArtistService(id, data) {
        const { login, password, version } = data;
        const artist = await Artist.findByPk(id);
        artist?.update(data);
        return artist;
    }
    async deleteArtistService(id) {
        const artist = await Artist.findByPk(id);
        artist?.destroy();
        return artist;
    }
}
export default new ArtistService();
//# sourceMappingURL=artistService.js.map