const express=require('express');
const app=express();
const port=3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello To-Do API!');
    });

const todoRouter=require("./todo");
app.use('/todos', todoRouter);

app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
        });
