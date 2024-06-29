import User from "../model/userModel.js";
class UserService {
    async createUserService(data) {
        const { login, password, version } = data;
        const user = await User.create(data);
        return user;
    }
    async getAllUsersService() {
        const user = await User.findAll({});
        return user;
    }
    async getOneUserService(id) {
        const user = await User.findByPk(id);
        return user;
    }
    async updateUserService(id, data) {
        const { login, password, version } = data;
        const user = await User.findByPk(id);
        user?.update(data);
        return user;
    }
    async deleteUserService(id) {
        const user = await User.findByPk(id);
        user?.destroy();
        return user;
    }
}
export default new UserService();
//# sourceMappingURL=userService.js.map