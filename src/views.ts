import { Request, Response, NextFunction } from "express";

import { Product, Order } from "./models";
import { getProduct, getProducts, createOrder, getOrder, getOrders } from "./services";

export function productsList(req: Request, res: Response, next: NextFunction) {
    let output = [];
    let products: Product[] = getProducts();
    for (let i = 0; i < products.length; i++) {
        let product: Product = products[i];
        output.push(product.getObject());
    }
    return res.json(output);
}

export function productDetail(req: Request, res: Response, next: NextFunction) {
    let productId: number = Number(req.params.productId);
    let product: Product | null = getProduct(productId);
    if (product == null) {
        return res.sendStatus(404).json({ error: "product not found" });
    } else {
        return res.sendStatus(200).json(product.getObject());
    }
}

export function order(req: Request, res: Response, next: NextFunction) {
    let productId: number = Number(req.params.productId);
    let product: Product | null = getProduct(productId);
    if (product == null) {
        return res.sendStatus(404).json({ error: "product not found" });
    } else {
        createOrder(product);
        return res.sendStatus(200).json({ message: "your order was placed" });
    }
}

export function ordersList(req: Request, res: Response, next: NextFunction) {
    let output = [];
    let orders: Order[] = getOrders();
    for (let i = 0; i < orders.length; i++) {
        let order: Order = orders[i];
        output.push(order.getObject());
    }
    return res.json(output);
}

export function orderDetail(req: Request, res: Response, next: NextFunction) {
    let orderId: number = Number(req.params.orderId);
    let order: Order | null = getOrder(orderId);
    if (order == null) {
        return res.sendStatus(404).json({ error: "order not found" });
    } else {
        return res.sendStatus(200).json(order.getObject());
    }
}

export function about(req: Request, res: Response, next: NextFunction) {
    return res.json({
        message: "Developed with Express, Ashkan Shakiba, Summer 2023",
    });
}
