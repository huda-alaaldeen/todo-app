## TODO-API

A simple RESTful API to manage a TODO list using Node.js, Express, and MongoDB.
--------------
## Features. 

 - Get all tasks
 - create a new tasks
 - get a task by ID 
 - update the task 
 - dalete the task 
--------------
## Project Structure

```
TODO-API/
|
|__config/
    |_db.js
|
|__controllers/
   |_todoController 
|
|__models
   |_Todo.js
|
|__routes
   |_todo.js
|
|__.env
|
|__index.js
|
|__package.json 
```
--------------

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/huda-alaaldeen/todo-app
cd todo-api
```
### 2. Install dependencies

```bash
npm install
```
### 3. Create `.env` file

Create a `.env` file in the root folder and add:

```env
MONGO_URL=mongodb://localhost:27017/mydatabase
```
### 4. Start the server

```bash
npm start
```