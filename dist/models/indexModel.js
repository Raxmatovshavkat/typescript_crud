import User from "../users/model/userModel.js";
import Artist from "../artists/model/artistModel.js";
import Album from "../albums/model/albumModel.js";
import Track from "../tracks/model/trackModel.js";
import Favorites from "../favourites/model/favouriteModel.js";
import sequelize from "../config/db.js";
const models = {
    User,
    Artist,
    Album,
    Track,
    Favorites,
    sequelize
};
export default models;
//# sourceMappingURL=indexModel.js.map