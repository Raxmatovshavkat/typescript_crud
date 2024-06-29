import express from "express";
import { Application } from "express-serve-static-core";
import dotenv from "dotenv"
import routes from "./routes/index.routes.js"
import models from "./models/indexModel.js";
dotenv.config()

const app:Application=express()

app.use(express.json())
app.use("/api",routes)

const start = async () => {
    try {
        await models.sequelize.authenticate();
        await models.sequelize.sync();
        console.log("Connection has been established successfully.");

        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server has been started on port ${port}`);
        });

    } catch (error) {
        if (error instanceof Error) {
            console.error("Unable to connect to the database:", error.message);
            console.error('Error stack:', error.stack);
        } else {
            console.error("An unknown error occurred:", error);
        }
    }
}


start();