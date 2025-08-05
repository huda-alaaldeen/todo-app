const express=require('express');
const todoRouter=require("./routes/todo");
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app=express();
const port=4000;

app.use(express.json());
app.use('/todos', todoRouter);

dotenv.config();
connectDB();  

app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
        });
