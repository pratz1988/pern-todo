const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create a todo
app.post("/todos", async (req, res) => {
  try {
    console.log(req.body);
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );
    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
  }
});

//Get all todos

// Get a todo

//Update a todo

//Delete a todo

app.listen(5000, () => {
  console.log("Server has started on port  5000");
});
