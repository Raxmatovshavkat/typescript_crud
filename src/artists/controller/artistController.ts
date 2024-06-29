import { Request, Response } from 'express';
import ArtistService from '../service/artistService.js';



class ArtistController {
    async createArtistController(req: Request, res: Response) {
        try {
            const artist = await ArtistService.createArtistService(req.body)

            res.status(201).json({
                message: 'Successfull created',
                artist
            })
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error stack:', error.stack);
                res.status(500).send(`International server error`)
            } else {
                console.error("An unknown error occurred:", error);
            }

        }
    }

    async getAllArtistsController(req: Request, res: Response) {
        try {
            const artist = await ArtistService.getAllArtistsService()
            res.status(200).json({
                status: "ok",
                data: artist
            })
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error stack:', error.stack);
                res.status(500).send(`International server error`)
            } else {
                console.error("An unknown error occurred:", error);
            }
        }

    }

    async getOneArtistController(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const artist = await ArtistService.getOneArtistService(id)
            res.status(200).send(artist)
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error stack:', error.stack);
                res.status(500).send(`International server error`)
            } else {
                console.error("An unknown error occurred:", error);
            }
        }

    }
    async updateArtistController(req: Request, res: Response) {
        try {
            const id: string | number = req.params.id;
            const artist = await ArtistService.updateArtistService(id, req.body)
            res.status(200).json({
                message: 'Suceesful updated',
                data: artist
            })
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error stack:', error.stack);
                res.status(500).send(`International server error`)
            } else {
                console.error("An unknown error occurred:", error);
            }
        }
    }

    async deleteArtistController(req: Request, res: Response) {
        try {
            const id: number | string = req.params.id;
            const artist = await ArtistService.deleteArtistService(id)
            res.status(200).send(`Sucessful deleted with id ${id}`)
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error stack:', error.stack);
                res.status(500).send(`International server error`)
            } else {
                console.error("An unknown error occurred:", error);
            }
        }
    }
}
export default new ArtistController();

