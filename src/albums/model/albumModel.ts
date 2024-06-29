import Artist from "../../artists/model/artistModel.js";
import sequelize from "../../config/db.js";
import { DataTypes,Model } from "sequelize";

class Album extends Model{}

Album.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    year:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    artistId: {
        type: DataTypes.INTEGER,
        references: {
            model: Artist,
            key: "id"
        }
    }
}, {
    sequelize,
    modelName: 'Album',
    tableName: 'albums',
    timestamps: true,
    paranoid: true,
    underscored: true
})

export default Album