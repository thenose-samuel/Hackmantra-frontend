const express = require('express');
require('dotenv').config();
const register = require('./routes/register');
const requestSupply = require('./routes/requestSupplies')
const connectDB = require('./controller/connectDB');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/api/v1/auth/", register);
app.use("/api/v1/requestSupplies", requestSupply);

const startServer =  async  () => {
    try{
        await connectDB(process.env.MONGO_URI);
        console.log("Connected to DB...")
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}...`);
        });
    } catch (e) {
        console.log(e);
    }
}

startServer();