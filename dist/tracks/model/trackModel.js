import Album from "../../albums/model/albumModel.js";
import Artist from "../../artists/model/artistModel.js";
import sequelize from "../../config/db.js";
import { DataTypes, Model } from "sequelize";
class Track extends Model {
}
Track.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artistId: {
        type: DataTypes.INTEGER,
        references: {
            model: Artist,
            key: "id"
        }
    },
    albumId: {
        type: DataTypes.INTEGER,
        references: {
            model: Album,
            key: "id"
        }
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Track',
    tableName: 'tracks',
    timestamps: true,
    paranoid: true,
    underscored: true
});
export default Track;
//# sourceMappingURL=trackModel.js.map