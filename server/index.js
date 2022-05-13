//Import dependencies. Used import instead of require, since this can be done in new version of node.

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//initialize the app

const app = express();

//Get express app middlewares. limit to 30mb because of image
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//connect to mongo DB - https://www.mongodb.com/atlas/database
//Save the connection URL to .env later
const CONNECTION_URL =
  "mongodb+srv://torsumkhan:Torsum1988@cluster0.sx5di.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
