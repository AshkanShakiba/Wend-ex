import { QueryInterface } from "sequelize/types";
import { DataTypes } from "sequelize";

const tableName = `products`;

export async function up(queryInterface: QueryInterface) {
    return queryInterface.createTable(tableName, {
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
    });
}

export function down(queryInterface: QueryInterface) {
    return queryInterface.dropTable(tableName);
}
