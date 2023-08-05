abstract class Model {
    protected id: number;

    public constructor(_id: number) {
        this.id = _id;
    }

    public getId() {
        return this.id;
    }
}

export class Product extends Model {
    private name: string;
    private price: number;

    public constructor(_id: number, _name: string, _price: number) {
        super(_id);
        this.name = _name;
        this.price = _price;
    }

    public getString() {
        return this.name;
    }

    public getObject() {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
        };
    }
}

export class Order extends Model {
    private date: Date;
    private product: Product;

    public constructor(_id: number, _product: Product) {
        super(_id);
        this.date = new Date();
        this.product = _product;
    }

    public getString() {
        return this.product + " (" + this.date + ")";
    }

    public getObject() {
        return {
            id: this.id,
            date: this.date,
            product: this.product,
        };
    }
}
