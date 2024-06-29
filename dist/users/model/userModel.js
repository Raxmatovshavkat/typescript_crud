import sequelize from '../../config/db.js';
import { DataTypes, Model } from 'sequelize';
class User extends Model {
}
User.init({
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    version: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    underscored: true
});
export default User;
//# sourceMappingURL=userModel.js.map