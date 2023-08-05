import express from "express";
import helmet from "helmet";

import routes from "./urls";
import { createProduct } from "./services";

const app = express();

app.use(helmet());
app.use(express.json());

routes(app);

createProduct("Coffee", 28);
createProduct("Coca Cola", 19);

app.listen(3000, () => {
    console.log("listening at port 3000");
});
