const express = require("express");
const router = express.Router();
const uuid = require("uuid");


let todos = [
    {
        id: 1,
        title: "Practice JavaScript arrays",
    },
    {
        id: 2,
        title: "Watch a tutorial on Node.js",
    },
    {
        id: 3,
        title: "Build a to-do list app",

    }

];

// Get all tasks
router.get("/", (req, res) => {
    res.json(todos)
});

//Add a new task
router.post("/", (req, res) => {
    const { title, description } = req.body;
    const newToDo = {
        id: uuid.v4(),
        title,
        description
    }
    todos.push(newToDo);
    res.json({ message: "Task added successfully", todo: newToDo })
});
//Get one task by ID
router.get("/:id",(req,res)=>{
    const found=todos.some(todo=>todo.id===parseInt(req.params.id))
    if(found){
        const todo=todos.find(todo=>todo.id===parseInt(req.params.id));
        res.json(todo);
    
    }
    else{
        res.json({ message: "Task not found" });
     
    }
});

//Update a task
router.put("/:id",(req,res)=>{
    const found=todos.some(todo=>todo.id===parseInt(req.params.id));
    const updateUser=req.body;

    if(found){
    const todo=todos.find(todo=>todo.id===parseInt(req.params.id));

    if (updateUser.title) {
        todo.title = updateUser.title;
    }

    if (updateUser.description) {
        todo.description = updateUser.description;
    }
        res.json({ message: "Task updated successfully", todo });

    }
});

//Delete a task 
router.delete("/:id",(req,res)=>{
const found=todos.some(todo=>todo.id===parseInt(req.params.id));

if(found){
     todos=todos.filter(todo => todo.id !== parseInt(req.params.id));
    res.json({msg:"task deleted"})
}
else{
    res.sendStatus(400);
}
});

module.exports = router;

