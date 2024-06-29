import { Request, Response } from 'express';
import Artist from '../model/artistModel.js';

class ArtistService {
    async createArtistService(data: any) {
        const { login, password, version } = data
        const artist = await Artist.create(data)
        return artist
    }

    async getAllArtistsService() {
        const artist = await Artist.findAll({})
        return artist
    }

    async getOneArtistService(id: number | string) {
        const artist = await Artist.findByPk(id)
        return artist
    }
    async updateArtistService(id: number | string, data: any) {
        const { login, password, version } = data
        const artist = await Artist.findByPk(id)
        artist?.update(data)
        return artist
    }

    async deleteArtistService(id: number | string) {
        const artist = await Artist.findByPk(id)
        artist?.destroy()

        return artist
    }
}
export default new ArtistService();

