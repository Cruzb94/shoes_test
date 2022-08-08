import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ProductModel = db.define('products', {
    mark: {type: DataTypes.STRING},
    model: {type: DataTypes.STRING},
    date_release: {type: DataTypes.DATE},
    stores: {type: DataTypes.JSON},
    img: {type: DataTypes.TEXT},
    price: {type: DataTypes.FLOAT},
    createdAt: { type: DataTypes.DATE},
    updatedAt: {type: DataTypes.DATE},
});

export default ProductModel;