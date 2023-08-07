import { Model, DataTypes, Sequelize } from "sequelize";

export interface Order {
    id?: string;
    product: string;
    date: Date;
}

export class OrderModel extends Model<Order> {
    id!: string;

    static getModel(sequelize: Sequelize) {
        return OrderModel.init(dataTypes, {
            sequelize,
            timestamps: false,
            underscored: true,
            tableName: "orders",
            modelName: "order",
        });
    }
}

export const dataTypes = {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
    },
    product: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
};
