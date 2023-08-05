import { Request, Response, NextFunction } from "express";

import { Product, Order } from "./models";
import { getProduct, getProducts, createOrder } from "./services";

export function productsList(req: Request, res: Response, next: NextFunction) {
    let output = [];
    let products: Product[] = getProducts();
    for (let i = 0; i < products.length; i++) {
        let product: Product = products[i];
        output.push(product.getObject());
    }
    return res.json(output);
}

export function order(req: Request, res: Response, next: NextFunction) {
    let productId: number = req.body.product;
    let product: Product | null = getProduct(productId);
    if (product == null) {
        return res.sendStatus(404).json({ error: "product not found" });
    } else {
        createOrder(product);
        return res.sendStatus(200).json({ message: "your order was placed" });
    }
}

export function about(req: Request, res: Response, next: NextFunction) {
    return res.json({
        message: "Developed with Express, Ashkan Shakiba, Summer 2023",
    });
}
