import Album from '../model/albumModel.js';
class AlbumService {
    async createAlbumService(data) {
        const { login, password, version } = data;
        const album = await Album.create(data);
        return album;
    }
    async getAllAlbumsService() {
        const album = await Album.findAll({});
        return album;
    }
    async getOneAlbumService(id) {
        const album = await Album.findByPk(id);
        return album;
    }
    async updateAlbumService(id, data) {
        const { login, password, version } = data;
        const album = await Album.findByPk(id);
        album?.update(data);
        return album;
    }
    async deleteAlbumService(id) {
        const album = await Album.findByPk(id);
        album?.destroy();
        return album;
    }
}
export default new AlbumService();
//# sourceMappingURL=albumService.js.map