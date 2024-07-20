const express = require("express");
const { connectToMongoDB } = require("./connectDB")
const urlRoute = require('./routes/urlRoutes');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;

connectToMongoDB(process.env.MONGODB_URI)
.then(console.log("MongoDB Connected Successfully"));


app.use(express.json());
app.use("/url",urlRoute);

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));