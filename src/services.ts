import { Product, Order } from "./models";

const products: Product[] = [];
const orders: Order[] = [];

export function createProduct(name: string, price: number) {
    let product: Product = new Product(name, price);
    addProduct(product);
}

export function addProduct(product: Product) {
    products.push(product);
}

export function getProduct(id: number) {
    for (let i = 0; i < products.length; i++) {
        let product: Product = products[i];
        if (product.getId() == id) {
            return product;
        }
    }
    return null;
}

export function getProducts() {
    return products;
}

export function createOrder(product: Product) {
    let order: Order = new Order(product);
    addOrder(order);
}

export function addOrder(order: Order) {
    orders.push(order);
}

export function getOrder(id: number) {
    for (let i = 0; i < orders.length; i++) {
        let order: Order = orders[i];
        if (order.getId() == id) {
            return order;
        }
    }
    return null;
}

export function getOrders() {
    return orders;
}
