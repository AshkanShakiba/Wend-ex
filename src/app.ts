import express from "express";
import helmet from "helmet";

import routes from "./urls";
import { createProduct } from "./db/services";

const app = express();

app.use(helmet());
app.use(express.json());

routes(app);


app.listen(3000, () => {
    console.log("listening at port 3000");
});
