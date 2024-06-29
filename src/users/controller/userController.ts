import { Request, Response } from 'express';
import userService from '../service/userService.js';



class UserController {
    async createUserController(req: Request, res: Response) {
        try {
            const user = await userService.createUserService(req.body)

            res.status(201).json({
                message: 'Successfull created',
                user
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

    async getAllUsersController(req: Request, res: Response) {
        try {
            const user=await userService.getAllUsersService()  
            res.status(200).json({
                status:"ok",
                data:user
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

    async getOneUserController(req: Request, res: Response) {
        try {
            const id=req.params.id;
            const user=await userService.getOneUserService(id)    
            res.status(200).send(user)
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error stack:', error.stack);
                res.status(500).send(`International server error`)
            } else {
                console.error("An unknown error occurred:", error);
            } 
        }

    }
    async updateUserController(req: Request, res: Response) {
        try {
            const id:string |number =req.params.id;
            const user=await userService.updateUserService(id,req.body)
            res.status(200).json({
                message:'Suceesful updated',
                data:user
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

    async deleteUserController(req: Request, res: Response) {
        try {
            const id:number | string=req.params.id;
            const user=await userService.deleteUserService(id)
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
export default new UserController();

