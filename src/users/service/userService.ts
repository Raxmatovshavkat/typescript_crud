import User from "../model/userModel.js";

import { Request, Response } from 'express';

class UserService {
    async createUserService(data:any) {
        const {login,password,version}=data
        const user=await User.create(data)
        return user
    }

    async getAllUsersService() {
        const user=await User.findAll({})
        return user
    }

    async getOneUserService(id:number | string) {
        const user=await User.findByPk(id)
        return user
    }
    async updateUserService(id:number |string,data:any) {
        const { login, password, version } = data
        const user=await User.findByPk(id)
        user?.update(data)
        return user
    }

    async deleteUserService(id:number |string) {
        const user=await User.findByPk(id)
        user?.destroy()

        return user
    }
}
export default new UserService();

