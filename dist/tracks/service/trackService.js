import Track from '../model/trackModel.js';
class TrackService {
    async createTrackService(data) {
        const { login, password, version } = data;
        const track = await Track.create(data);
        return track;
    }
    async getAllTracksService() {
        const track = await Track.findAll({});
        return track;
    }
    async getOneTrackService(id) {
        const track = await Track.findByPk(id);
        return track;
    }
    async updateTrackService(id, data) {
        const { login, password, version } = data;
        const track = await Track.findByPk(id);
        track?.update(data);
        return track;
    }
    async deleteTrackService(id) {
        const track = await Track.findByPk(id);
        track?.destroy();
        return track;
    }
}
export default new TrackService();
//# sourceMappingURL=trackService.js.map