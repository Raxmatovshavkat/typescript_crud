import TrackService from '../service/trackService.js';
class TrackController {
    async createTrackController(req, res) {
        try {
            const track = await TrackService.createTrackService(req.body);
            res.status(201).json({
                message: 'Successfull created',
                track
            });
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error stack:', error.stack);
                res.status(500).send(`International server error`);
            }
            else {
                console.error("An unknown error occurred:", error);
            }
        }
    }
    async getAllTracksController(req, res) {
        try {
            const track = await TrackService.getAllTracksService();
            res.status(200).json({
                status: "ok",
                data: track
            });
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error stack:', error.stack);
                res.status(500).send(`International server error`);
            }
            else {
                console.error("An unknown error occurred:", error);
            }
        }
    }
    async getOneTrackController(req, res) {
        try {
            const id = req.params.id;
            const track = await TrackService.getOneTrackService(id);
            res.status(200).send(track);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error stack:', error.stack);
                res.status(500).send(`International server error`);
            }
            else {
                console.error("An unknown error occurred:", error);
            }
        }
    }
    async updateTrackController(req, res) {
        try {
            const id = req.params.id;
            const track = await TrackService.updateTrackService(id, req.body);
            res.status(200).json({
                message: 'Suceesful updated',
                data: track
            });
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error stack:', error.stack);
                res.status(500).send(`International server error`);
            }
            else {
                console.error("An unknown error occurred:", error);
            }
        }
    }
    async deleteTrackController(req, res) {
        try {
            const id = req.params.id;
            const track = await TrackService.deleteTrackService(id);
            res.status(200).send(`Sucessful deleted with id ${id}`);
        }
        catch (error) {
            if (error instanceof Error) {
                console.error('Error stack:', error.stack);
                res.status(500).send(`International server error`);
            }
            else {
                console.error("An unknown error occurred:", error);
            }
        }
    }
}
export default new TrackController();
//# sourceMappingURL=trackController.js.map