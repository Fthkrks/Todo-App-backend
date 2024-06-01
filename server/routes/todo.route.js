const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.model");

// Create

router.post("/todo", async (req, res) => {
  try {
    const {todoes, checked} = req.body;
    const newTodo = new Todo({todoes, checked});
    await newTodo.save();
    res.status(201).json(newTodo);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});



// Get


router.get("/", async(req, res) =>{
  try {
    const todo = await Todo.find({});
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "server error"});
  }
})





// Delete

router.delete("/:todoId", async(req, res) =>{
  try {
    const todoId = await req.params.todoId;

    const deleteTodo = await Todo.findOneAndDelete(todoId);


    if(!deleteTodo){
      return res.status(404).json({ error: "Todo not found." });

    }
    res.status(200).json(deleteTodo);


  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
})


module.exports = router;