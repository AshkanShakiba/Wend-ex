import { Sequelize } from "sequelize";

import { ProductModel } from "./models/product";
import { OrderModel } from "./models/order";

require("dotenv").config("../.env");

const sequelize = new Sequelize(process.env.DATABASE_URI as string, {
    define: {
        timestamps: false,
    },
});
const productModel = ProductModel.getModel(sequelize);
const orderModel = OrderModel.getModel(sequelize);

export async function createProduct(_name: string, _price: number) {
    let productsCount = await productModel.count();
    let product = productModel.create({
        id: productsCount.toString(),
        name: _name,
        price: _price,
    });
    return product;
}

export async function getProduct(_id: string) {
    let product = await productModel.findOne({ where: { id: _id } });
    return product;
}

export async function getProducts() {
    let products = await productModel.findAll();
    return products;
}

export async function createOrder(_product: string) {
    let ordersCount = await orderModel.count();
    let order = orderModel.create({
        id: ordersCount.toString(),
        product: _product,
        date: new Date(),
    });
    return order;
}

export async function getOrder(_id: string) {
    let order = await orderModel.findOne({ where: { id: _id } });
    return order;
}

export async function getOrders() {
    let orders = await orderModel.findAll();
    return orders;
}
