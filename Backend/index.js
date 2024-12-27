import express from "express";
import 'dotenv/config'
import { ENV } from "./src/constant/index.js";
import router from "./src/routes/index.js";
import mongoose from "./src/db/index.js";
import helmet from "helmet"
import chalk from "chalk";

const app = express();

app.use(express.json());
app.use(helmet());

mongoose.connection.on("open", () => {
    console.log(chalk.green.bgWhite("MongoDB is Connected"));
})

mongoose.connection.on("error", (error) => {
    console.log("MongoDB is not Connected", error.message);
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api', router);


app.listen(ENV.PORT, () => {
    console.log("Server Running");
})