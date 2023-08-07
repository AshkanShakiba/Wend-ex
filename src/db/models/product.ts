import { Model, DataTypes, Sequelize } from "sequelize";

export interface Product {
    id?: string;
    name: string;
    price: number;
}

export class ProductModel extends Model<Product> {
    id!: string;

    static getModel(sequelize: Sequelize) {
        return ProductModel.init(dataTypes, {
            sequelize,
            timestamps: false,
            underscored: true,
            tableName: "products",
            modelName: "product",
        });
    }
}

export const dataTypes = {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
};
