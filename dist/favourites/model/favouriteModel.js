import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';
import Artist from '../../artists/model/artistModel.js';
import Album from '../../albums/model/albumModel.js';
import Track from '../../tracks/model/trackModel.js';
class Favorites extends Model {
}
Favorites.init({
    artistId: {
        type: DataTypes.INTEGER,
        references: {
            model: Artist,
            key: 'id',
        },
    },
    albumId: {
        type: DataTypes.INTEGER,
        references: {
            model: Album,
            key: 'id',
        },
    },
    trackId: {
        type: DataTypes.INTEGER,
        references: {
            model: Track,
            key: 'id',
        },
    },
}, {
    sequelize,
    modelName: 'Favorite',
    tableName: 'favorites',
    timestamps: true,
    paranoid: true,
    underscored: true
});
export default Favorites;
//# sourceMappingURL=favouriteModel.js.map