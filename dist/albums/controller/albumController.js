import AlbumService from '../service/albumService.js';
class AlbumController {
    async createAlbumController(req, res) {
        try {
            const album = await AlbumService.createAlbumService(req.body);
            res.status(201).json({
                message: 'Successfull created',
                album
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
    async getAllAlbumsController(req, res) {
        try {
            const album = await AlbumService.getAllAlbumsService();
            res.status(200).json({
                status: "ok",
                data: album
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
    async getOneAlbumController(req, res) {
        try {
            const id = req.params.id;
            const album = await AlbumService.getOneAlbumService(id);
            res.status(200).send(album);
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
    async updateAlbumController(req, res) {
        try {
            const id = req.params.id;
            const album = await AlbumService.updateAlbumService(id, req.body);
            res.status(200).json({
                message: 'Suceesful updated',
                data: album
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
    async deleteAlbumController(req, res) {
        try {
            const id = req.params.id;
            const album = await AlbumService.deleteAlbumService(id);
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
export default new AlbumController();
//# sourceMappingURL=albumController.js.map