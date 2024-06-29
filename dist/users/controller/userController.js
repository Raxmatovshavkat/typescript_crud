import userService from '../service/userService.js';
class UserController {
    async createUserController(req, res) {
        try {
            const user = await userService.createUserService(req.body);
            res.status(201).json({
                message: 'Successfull created',
                user
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
    async getAllUsersController(req, res) {
        try {
            const user = await userService.getAllUsersService();
            res.status(200).json({
                status: "ok",
                data: user
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
    async getOneUserController(req, res) {
        try {
            const id = req.params.id;
            const user = await userService.getOneUserService(id);
            res.status(200).send(user);
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
    async updateUserController(req, res) {
        try {
            const id = req.params.id;
            const user = await userService.updateUserService(id, req.body);
            res.status(200).json({
                message: 'Suceesful updated',
                data: user
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
    async deleteUserController(req, res) {
        try {
            const id = req.params.id;
            const user = await userService.deleteUserService(id);
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
export default new UserController();
//# sourceMappingURL=userController.js.map