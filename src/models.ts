abstract class Model {
    protected id: number;
    private static counter: number = 0;

    public constructor() {
        this.id = Model.counter;
        Model.counter++;
    }

    public getId() {
        return this.id;
    }
}

export class Product extends Model {
    private name: string;
    private price: number;

    public constructor(_name: string, _price: number) {
        super();
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

    public constructor(_product: Product) {
        super();
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
