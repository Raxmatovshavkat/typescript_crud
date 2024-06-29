import { Request, Response } from 'express';
import Track from '../model/trackModel.js';

class TrackService {
    async createTrackService(data: any) {
        const { login, password, version } = data
        const track = await Track.create(data)
        return track
    }

    async getAllTracksService() {
        const track = await Track.findAll({})
        return track
    }

    async getOneTrackService(id: number | string) {
        const track = await Track.findByPk(id)
        return track
    }
    async updateTrackService(id: number | string, data: any) {
        const { login, password, version } = data
        const track = await Track.findByPk(id)
        track?.update(data)
        return track
    }

    async deleteTrackService(id: number | string) {
        const track = await Track.findByPk(id)
        track?.destroy()

        return track
    }
}
export default new TrackService();

