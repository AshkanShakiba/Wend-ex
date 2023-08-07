import { QueryInterface } from "sequelize/types";
import { DataTypes } from "sequelize";

const tableName = `orders`;

export async function up(queryInterface: QueryInterface) {
    return queryInterface.createTable(tableName, {
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
    });
}

export function down(queryInterface: QueryInterface) {
    return queryInterface.dropTable(tableName);
}
