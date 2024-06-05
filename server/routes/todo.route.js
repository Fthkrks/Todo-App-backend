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



// Update

router.put("/:todoId", async(req, res) =>{

  try {
    const todoId = req.params.todoId;
    const updates = req.body;

    console.log("Updating todo with ID:", todoId);
    const existingTodo = await Todo.findById(todoId);

    console.log(existingTodo);

    if (!existingTodo){
      return (res.status(404).json({error: "Todo is not found."}))
  }

  const updatedTodo = await Todo.findByIdAndUpdate(todoId, updates, {new: true});

  res.status(200).json(updatedTodo);

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
})


module.exports = router;