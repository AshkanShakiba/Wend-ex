import { Express } from "express";

import {
    productsList,
    productDetail,
    order,
    ordersList,
    orderDetail,
    about,
} from "./views";

function routes(app: Express) {
    app.route("/api/v1/products").get(productsList);
    app.route("/api/v1/products/:productId").get(productDetail);
    app.route("/api/v1/orders").get(ordersList);
    app.route("/api/v1/orders/:orderId").get(orderDetail);
    app.route("/api/v1/order/:productId").post(order);
    app.route("/api/v1/about").get(about);
}

export default routes;
