import sequelize from "../../config/db.js";
import { DataTypes,Model } from "sequelize";

class Artist extends Model{}

Artist.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    grammy:{
        type:DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: 'Artist',
    tableName: 'artists',
    timestamps: true,
    paranoid: true,
    underscored: true
})

export default Artist