import { Request, Response, NextFunction } from "express";

import { ProductModel } from "./db/models/product";
import {Order, OrderModel} from "./db/models/order";
import { getProduct, getProducts, createOrder, getOrder, getOrders } from "./db/services";

export async function productsList(req: Request, res: Response, next: NextFunction) {
    let output: ProductModel[] = [];
    let products = await getProducts();
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        output.push(product);
    }
    return res.json(output);
}

export async function productDetail(req: Request, res: Response, next: NextFunction) {
    let productId: number = Number(req.params.productId);
    let product = await getProduct(productId.toString());
    if (product == null) {
        return res.status(404).json({ error: "product not found" });
    } else {
        return res.status(200).json(product);
    }
}

export async function order(req: Request, res: Response, next: NextFunction) {
    let productId: number = Number(req.params.productId);
    let product = await getProduct(productId.toString());
    if (product == null) {
        return res.status(404).json({ error: "product not found" });
    } else {
        await createOrder(productId.toString());
        return res.status(200).json({ message: "your order was placed" });
    }
}

export async function ordersList(req: Request, res: Response, next: NextFunction) {
    let output: OrderModel[] = [];
    let orders = await getOrders();
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        output.push(order);
    }
    return res.json(output);
}

export async function orderDetail(req: Request, res: Response, next: NextFunction) {
    let orderId: number = Number(req.params.orderId);
    let order = await getOrder(orderId.toString());
    if (order == null) {
        return res.status(404).json({ error: "order not found" });
    } else {
        return res.status(200).json(order);
    }
}

export function about(req: Request, res: Response, next: NextFunction) {
    return res.json({
        message: "Developed with Express, Ashkan Shakiba, Summer 2023",
    });
}
