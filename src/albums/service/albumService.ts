import { Request, Response } from 'express';
import Album from '../model/albumModel.js';

class AlbumService {
    async createAlbumService(data: any) {
        const { login, password, version } = data
        const album = await Album.create(data)
        return album
    }

    async getAllAlbumsService() {
        const album = await Album.findAll({})
        return album
    }

    async getOneAlbumService(id: number | string) {
        const album = await Album.findByPk(id)
        return album
    }
    async updateAlbumService(id: number | string, data: any) {
        const { login, password, version } = data
        const album = await Album.findByPk(id)
        album?.update(data)
        return album
    }

    async deleteAlbumService(id: number | string) {
        const album = await Album.findByPk(id)
        album?.destroy()

        return album
    }
}
export default new AlbumService();

