const jwt = require("jsonwebtoken");
const todoModel = require("./todosModel");

const getAllTodos = async (req, res) => {
  try {
    // const { username } = req.body;
    const { role } = fetchUserDetails(req.headers.token);
    if (role == "admin") {
      const todos = await todoModel.find();
      if (todos) {
        res.json({ msg: "todos fetched", todos });
      }
      res.json({ msg: "no todos are found" });
    }
  } catch (err) {
    res.json({ msg: err });
  }
};

const getMyTodos = async (req, res) => {
  try {
    // const { userId } = req.body;
    const { username } = fetchUserDetails(req.headers.token);
    const todos = await todoModel.find({ username });
    if (todos) {
      res.json({ msg: "user todos fetched", todos });
    }
    res.json({ msg: "no todos are found with the given user" });
  } catch (err) {
    res.json({ msg: err });
  }
};

const addTodo = async (req, res) => {
  try {
    const { todo } = req.body;
    const { username } = fetchUserDetails(req.headers.token);
    const newTodo = await new todoModel({ username, todo }).save();
    res.json({ msg: "added newtodo successfully", newTodo });
  } catch (err) {
    console.log(err);
    res.json({ msg: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await todoModel.findByIdAndDelete(req.params.id);
    res.json({ msg: "todo deleted" });
  } catch (err) {
    res.json({ msg: err });
  }
};

const updateTodo = async (req, res) => {
  try {
    await todoModel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ msg: "updated todo successfully" });
  } catch (err) {
    res.json({ msg: err });
  }
};

function fetchUserDetails(token) {
  return jwt.verify(token, "secret");
}
module.exports = { getAllTodos, getMyTodos, addTodo, updateTodo, deleteTodo };
