const express = require("express");
const router = express.Router();

// these are the controllers
// we will create all of them in future
const {
  createTodo,
  getTodoById,
  getTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} = require("../controllers/Todo");

//params
// it will fetch the value from the url
router.param("todoId", getTodoById);

// to get all the todos
router.get("/tasks/", getAllTodos);

// to get a single todo
router.get("/tasks/:todoId/", getTodo);

// to create a todo
router.post("/tasks/", createTodo);

// to update the todo
router.put("/tasks/:todoId", updateTodo);

// to delete the todo
router.delete("/tasks/:todoId", deleteTodo);

// we will export the router to import it in index.js
module.exports = router;
