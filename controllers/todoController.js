// controllers/todoController.js
const Todo = require('../models/Todo.js');

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json({ error: err.message });
  }
};

// Add new todo
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todo({ title, description });
    const saved = await newTodo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.json({ error: err.message });
  }
};

// Get single todo
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Task not found' });
    res.json(todo);
  } catch (err) {
    res.json({ error: err.message });
  }
};

// Update todo
exports.updateTodo = async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Updated successfully', todo: updated });
  } catch (err) {
    res.json({ error: err.message });
  }
};

// Delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.json({ error: err.message });
  }
};
